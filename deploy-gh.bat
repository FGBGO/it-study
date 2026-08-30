@echo off
REM ============================================================
REM  One-click GitHub Pages deploy (uses npm gh-pages package)
REM  Steps: ask repo name -> install deps (if needed) -> build -> publish
REM  Keep window open on error for inspection
REM ============================================================
setlocal enabledelayedexpansion

echo ============================================
echo   One-click GitHub Pages deploy
echo ============================================
echo.

REM Step 1: ask repo name
if "%APP_REPO%"=="" (
    set /p APP_REPO=Enter your GitHub repository name (e.g. it-study): 
) else (
    echo Repository name (from env): %APP_REPO%
)

if "%APP_REPO%"=="" (
    echo [ERROR] Repository name is required.
    pause
    exit /b 1
)

REM Trim
for /f "tokens=* delims= " %%a in ("%APP_REPO%") do set "APP_REPO=%%a"

REM Step 2: npm install (only if dependencies are missing)
if not exist "node_modules\gh-pages\package.json" (
    echo [1/3] Installing dependencies gh-pages + cross-env ...
    call npm install --no-audit --no-fund
    if errorlevel 1 (
        echo [ERROR] npm install failed. Check the log above.
        pause
        exit /b 1
    )
) else (
    echo [1/3] Dependencies already present. Skipping install.
)

REM Step 3: build with Vite base = /<repo>/
echo [2/3] Building with base = /%APP_REPO%/ ...
call npx.cmd cross-env-shell "vite build --base=/%APP_REPO%/"
if errorlevel 1 (
    echo [ERROR] Build failed. Check the log above.
    pause
    exit /b 1
)

REM Step 4: publish with gh-pages npm package
echo [3/3] Publishing dist/ to gh-pages branch ...
echo.
echo If first time, you may be prompted for GitHub credentials:
echo   Username = FGBGO
echo   Password = Personal Access Token (classic, scope 'repo')
echo.
call npx.cmd gh-pages -d dist -b gh-pages -m "deploy to gh-pages"
if errorlevel 1 (
    echo.
    echo [ERROR] Publish failed. Possible reasons:
    echo   1. GitHub remote not added yet: run ^< git remote add origin https://github.com/FGBGO/it-study.git ^>
    echo   2. Wrong username / token
    echo   3. Network issue. Retry later.
    echo   NOTE: If you keep hitting 'ENAMETOOLONG' or 'remote mismatch',
    echo         double-click publish-gh.bat instead, which uses pure Git.
    echo.
    pause
    exit /b 1
)

echo.
echo ============================================
echo   [OK] Deployed successfully!
echo ============================================
echo.
echo Visit (after 1-3 minutes, and enabling Pages in Settings):
echo        https://FGBGO.github.io/%APP_REPO%/
echo.
echo   Repo Settings -^> Pages -^> Source = Branch: gh-pages  Folder = / (root)
echo.
pause
