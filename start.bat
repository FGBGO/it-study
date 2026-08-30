@echo off
rem ============================================================
rem IT 教学网站 - 启动脚本
rem 双击运行即可启动网站，窗口会保持打开，报错信息可在此查看
rem ============================================================
chcp 65001 >nul
title IT 教学网站 - 正在运行

rem 切换到本脚本所在目录（即项目目录）
cd /d "%~dp0"

echo ============================================
echo   IT 教学网站 启动中...
echo ============================================
echo.

rem 检查是否安装了 Node.js
where node >nul 2>nul
if errorlevel 1 (
    echo [错误] 未检测到 Node.js，请先安装：https://nodejs.org/
    echo.
    pause
    exit /b 1
)

rem 首次运行时自动安装依赖
if not exist "node_modules" (
    echo 首次运行，正在安装依赖，可能需要几分钟，请耐心等待...
    echo.
    call npm install
    if errorlevel 1 (
        echo.
        echo [错误] 依赖安装失败，请检查上方错误信息或网络连接。
        echo.
        pause
        exit /b 1
    )
)

echo 正在启动开发服务器...
echo.
echo   网站地址：http://localhost:5173
echo   使用方法：在浏览器中打开上面的地址即可开始学习
echo   注意：学习期间请勿关闭本窗口；结束学习请双击 stop.bat 关闭网站
echo.
echo ============================================
echo.

rem 启动 Vite 开发服务器（前台运行，直到手动关闭或出错）
call npm run dev

echo.
echo ============================================
echo 开发服务器已停止。若上方出现红色报错信息，
echo 请截图排查；按任意键或直接关闭本窗口退出。
echo ============================================
echo.
pause
