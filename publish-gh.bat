@echo off
REM ============================================================
REM  Publish dist/ to GitHub gh-pages branch (pure Git, no gh-pages npm)
REM  - Avoids Windows-specific issues: ENAMETOOLONG, remote mismatch
REM  - Workflow: copy dist to temp folder -> init git -> force push gh-pages
REM  Keep window open on error for inspection
REM ============================================================
setlocal

echo ============================================
echo   Publish to GitHub Pages (gh-pages branch)
echo ============================================
echo.

REM Read origin URL from current repo
for /f "tokens=*" %%i in ('git remote get-url origin 2^>nul') do set REMOTE=%%i
if "%REMOTE%"=="" (
    echo [ERROR] origin remote not configured.
    echo         Run: git remote add origin https://github.com/FGBGO/it-study.git
    pause
    exit /b 1
)
echo Remote: %REMOTE%

REM Check dist exists
if not exist "dist\index.html" (
    echo [ERROR] dist\index.html not found. Please build first:
    echo         set VITE_BASE=/it-study/ ^& npm run build
    pause
    exit /b 1
)

REM Prepare a clean temp working dir
set TMP_DIR=%TEMP%\ghp-%RANDOM%
echo.
echo [1/3] Temp dir: %TMP_DIR%
if exist "%TMP_DIR%" rmdir /s /q "%TMP_DIR%"
mkdir "%TMP_DIR%" >nul

REM Copy dist contents (recursive, overwrite, quiet)
echo [2/3] Copying dist contents to temp dir
xcopy "dist\*" "%TMP_DIR%\" /E /Y /I /Q >nul

REM Create 404.html as a fallback (harmless for hash routing)
copy /Y "%TMP_DIR%\index.html" "%TMP_DIR%\404.html" >nul

REM Init git in temp dir, create orphan gh-pages commit
cd /d "%TMP_DIR%"
git init >nul
git checkout -b gh-pages >nul 2>&1
git add -A >nul
git commit -m "deploy gh-pages" >nul
if errorlevel 1 (
    echo [ERROR] Failed to commit in temp dir
    pause
    exit /b 1
)

REM Force push to remote gh-pages branch
echo [3/3] Pushing gh-pages branch ...
echo.
git push -f "%REMOTE%" gh-pages:gh-pages
if errorlevel 1 (
    echo.
    echo [ERROR] Push failed. Possible reasons:
    echo   1. Not logged in / bad credentials
    echo      - Username = FGBGO, password = Personal Access Token(classic) with 'repo' scope
    echo      - Or switch origin to SSH: git remote set-url origin git@github.com:FGBGO/it-study.git
    echo   2. Network or GitHub service issue; retry later
    echo.
    pause
    exit /b 1
)

REM Cleanup
cd /d "%~dp0"
rmdir /s /q "%TMP_DIR%" 2>nul

echo.
echo ============================================
echo   [OK] gh-pages pushed successfully!
echo ============================================
echo.
echo Final setup steps (only needed ONCE):
echo   1. Open https://github.com/FGBGO/it-study - confirm 'gh-pages' branch exists
echo   2. Settings -^> Pages: Source = Branch: gh-pages, Folder = /(root), Save
echo   3. Wait 1-3 minutes, then visit:
echo        https://FGBGO.github.io/it-study/
echo.
pause
