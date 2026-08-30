@echo off
rem ============================================================
rem IT Study Website - Start Script
rem Double-click to run. This window stays open so you can
rem check any error messages. To stop the site, use stop.bat.
rem ============================================================
title IT Study Website - Running

rem Switch to the folder where this script lives (project root)
cd /d "%~dp0"

echo ============================================
echo   IT Study Website starting...
echo ============================================
echo.

rem Check that Node.js is installed
where node >nul 2>nul
if errorlevel 1 (
    echo [ERROR] Node.js not found. Please install it first: https://nodejs.org/
    echo.
    pause
    exit /b 1
)

rem First run: install dependencies automatically
if not exist "node_modules" (
    echo First run: installing dependencies, this may take a few minutes...
    echo.
    call npm install
    if errorlevel 1 (
        echo.
        echo [ERROR] npm install failed. Check the messages above or your network.
        echo.
        pause
        exit /b 1
    )
)

echo Starting dev server...
echo.
echo   Website: http://localhost:5173
echo   How to use: open the address above in your browser to start learning.
echo   NOTE: keep this window open while studying.
echo   To stop the site: double-click stop.bat
echo.
echo ============================================
echo.

rem Run the Vite dev server in the foreground until stopped or crashed
call npm run dev

echo.
echo ============================================
echo Dev server stopped. If there are red error messages above,
echo take a screenshot for troubleshooting.
echo Press any key or close this window to exit.
echo ============================================
echo.
pause
