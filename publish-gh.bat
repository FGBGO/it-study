@echo off
REM ============================================================
REM  Publish dist/ to GitHub gh-pages branch (pure Git)
REM  Steps: derive repo name from origin -> build with correct
REM         base -> copy dist to temp repo -> force push gh-pages
REM  Keep window open on error for inspection
REM ============================================================
setlocal

echo ============================================
echo   Publish to GitHub Pages (gh-pages branch)
echo ============================================
echo.

REM ---------- Capture author identity from the current repo ----------
for /f "tokens=*" %%i in ('git config user.name  2^>nul') do set GIT_USER_NAME=%%i
for /f "tokens=*" %%i in ('git config user.email 2^>nul') do set GIT_USER_EMAIL=%%i
if "%GIT_USER_NAME%"==""  set GIT_USER_NAME=it-study
if "%GIT_USER_EMAIL%"=="" set GIT_USER_EMAIL=it-study@local
echo Author: %GIT_USER_NAME% ^<%GIT_USER_EMAIL%^>

REM ---------- Read origin remote and derive repository name ----------
for /f "tokens=*" %%i in ('git remote get-url origin 2^>nul') do set REMOTE=%%i
if "%REMOTE%"=="" (
    echo [ERROR] origin remote not configured.
    echo         Run: git remote add origin https://github.com/FGBGO/it-study.git
    pause
    exit /b 1
)
echo Remote: %REMOTE%

REM Derive repo name: strip ".git", then take the segment after the last "/"
set REPO_URL=%REMOTE:.git=%
set APP_REPO=
for %%a in (%REPO_URL:/= %) do set APP_REPO=%%a
if "%APP_REPO%"=="" (
    echo [ERROR] Cannot derive repository name from remote URL.
    pause
    exit /b 1
)
echo Repository name: %APP_REPO%
echo Base path: /%APP_REPO%/
echo.

REM ---------- Build with the CORRECT base for GitHub Pages ----------
REM (Never publish a dist built with base '/': assets would 404 on Pages)
echo [1/4] Building with Vite base = /%APP_REPO%/ ...
call npx.cmd vite build --base=/%APP_REPO%/
if errorlevel 1 (
    echo [ERROR] Build failed. Check the log above.
    pause
    exit /b 1
)

if not exist "dist\index.html" (
    echo [ERROR] dist\index.html not found after build.
    pause
    exit /b 1
)

REM Prepare a clean temp working dir
set TMP_DIR=%TEMP%\ghp-%RANDOM%
echo [2/4] Temp dir: %TMP_DIR%
if exist "%TMP_DIR%" rmdir /s /q "%TMP_DIR%"
mkdir "%TMP_DIR%" >nul

REM Copy dist contents
echo [3/4] Copying dist contents to temp dir
xcopy "dist\*" "%TMP_DIR%\" /E /Y /I /Q >nul

REM Create 404.html as a fallback (harmless for hash routing)
copy /Y "%TMP_DIR%\index.html" "%TMP_DIR%\404.html" >nul

REM Init git in temp dir, set identity explicitly, create gh-pages commit
cd /d "%TMP_DIR%"
git init >nul
git config user.name  "%GIT_USER_NAME%"
git config user.email "%GIT_USER_EMAIL%"
git config core.autocrlf false
git checkout -b gh-pages >nul 2>&1
git add -A >nul
git commit -m "deploy gh-pages" >nul
if errorlevel 1 (
    echo [ERROR] Failed to commit in temp dir
    pause
    exit /b 1
)

REM Force push to remote gh-pages branch
echo [4/4] Pushing gh-pages branch ...
echo.
git push -f "%REMOTE%" gh-pages:gh-pages
if errorlevel 1 (
    echo.
    echo [ERROR] Push failed. Possible reasons:
    echo   1. Bad credentials: username = FGBGO, password = Personal Access Token(classic, repo scope)
    echo   2. Network issue; retry later
    echo.
    pause
    exit /b 1
)

cd /d "%~dp0"
rmdir /s /q "%TMP_DIR%" 2>nul

echo.
echo ============================================
echo   [OK] gh-pages pushed successfully!
echo ============================================
echo.
echo Wait 1-3 minutes, then hard-refresh (Ctrl+F5):
echo   https://FGBGO.github.io/%APP_REPO%/
echo.
echo If pages still 404 after a few minutes:
echo   Repo Settings -^> Pages -^> Source = Branch: gh-pages, Folder = /(root)
echo.
pause
