@echo off
REM ============================================================
REM  Push master branch to GitHub origin
REM  Keep window open on error for inspection
REM ============================================================
setlocal

echo ============================================
echo   Push master branch to GitHub origin
echo ============================================
echo.

REM Check origin
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo [WARN] origin not configured, adding default repo https://github.com/FGBGO/it-study.git ...
    git remote add origin https://github.com/FGBGO/it-study.git
)

echo Origin remote:
git remote -v
echo.

echo Pushing master ...
echo If prompted for credentials: username = FGBGO, password = Personal Access Token(classic, repo scope)
echo.

git push -u origin master
if errorlevel 1 (
    echo.
    echo [ERROR] Push failed. Possible reasons:
    echo   1. Wrong username / token
    echo   2. Token missing 'repo' scope
    echo   3. Network issue connecting GitHub
    echo.
    pause
    exit /b 1
)

echo.
echo [OK] master pushed successfully.
pause
