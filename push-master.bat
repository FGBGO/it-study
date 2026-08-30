@echo off
REM ============================================================
REM  推送 master 分支到 GitHub
REM  窗口保持打开，报错可以检查
REM ============================================================
chcp 65001 >nul
setlocal

echo ============================================
echo   推送 master 到 GitHub 远端
echo ============================================
echo.

REM 检查 origin 是否存在
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo 未配置 origin 远端，正在添加默认仓库 https://github.com/FGBGO/it-study.git ...
    git remote add origin https://github.com/FGBGO/it-study.git
)
echo 远端：
git remote -v
echo.

echo 正在推送 master ...
echo （若提示输入用户名/密码：用户名填 FGBGO，密码填 Personal Access Token classic，权限勾 repo）
echo.
git push -u origin master
if errorlevel 1 (
    echo.
    echo 推送失败！请根据上面的报错检查：
    echo   1. 用户名 / Token 是否正确
    echo   2. Token 是否勾选了 repo 权限
    echo   3. 网络连接 GitHub 是否正常
    echo.
    pause
    exit /b 1
)

echo.
echo master 推送成功！
pause
