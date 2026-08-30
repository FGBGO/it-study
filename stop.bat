@echo off
rem ============================================================
rem IT Study Website - Stop Script
rem Double-click to stop the website server. This window stays
rem open so you can check the result.
rem ============================================================
title IT Study Website - Stop Server

rem The site runs on fixed port 5173 (must match vite.config.js)
set "PORT=5173"
set "PID="

echo ============================================
echo   Looking for the running website server on port %PORT%...
echo.

rem Find the PID of the process listening on that port
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":%PORT% " ^| findstr "LISTENING"') do (
    set "PID=%%a"
)

if defined PID (
    echo Found server process, PID=%PID%. Stopping it...
    taskkill /f /pid %PID% >nul 2>&1
    if errorlevel 1 (
        echo.
        echo [ERROR] Failed to kill the process. Close it manually in Task Manager if needed.
    ) else (
        echo.
        echo Website server stopped successfully.
    )
) else (
    echo No running website server found - nothing is listening on port %PORT%.
    echo If the site is still reachable, the port config was changed. Check vite.config.js.
)

echo.
echo ============================================
echo Press any key or close this window to exit.
echo ============================================
echo.
pause
