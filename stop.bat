@echo off
rem ============================================================
rem IT 教学网站 - 关闭脚本
rem 双击运行即可停止网站服务，窗口保持打开以便查看结果
rem ============================================================
chcp 65001 >nul
title IT 教学网站 - 关闭服务

rem 网站固定运行在 5173 端口（与 vite.config.js 中配置一致）
set "PORT=5173"
set "PID="

echo ============================================
echo   正在查找运行中的网站服务（端口 %PORT%）...
echo.

rem 通过端口号找到监听中的进程 PID
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":%PORT% " ^| findstr "LISTENING"') do (
    set "PID=%%a"
)

rem 找到则结束进程，否则给出提示
if defined PID (
    echo 找到服务进程，PID=%PID%，正在关闭...
    taskkill /f /pid %PID% >nul 2>&1
    if errorlevel 1 (
        echo.
        echo [错误] 关闭失败，可能需要手动在任务管理器中结束该进程。
    ) else (
        echo.
        echo 网站服务已成功关闭，浏览器中将无法继续访问。
    )
) else (
    echo 未发现运行中的网站服务（端口 %PORT% 无监听进程）。
    echo 如果网站仍可访问，可能是端口配置被修改，请检查 vite.config.js。
)

echo.
echo ============================================
echo 按任意键或直接关闭本窗口退出。
echo ============================================
echo.
pause
