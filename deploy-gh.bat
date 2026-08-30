@echo off
REM ============================================================
REM  GitHub Pages 一键部署脚本
REM  功能：1. 设置仓库名  2. 安装依赖（如需）  3. 构建  4. 发布到 gh-pages 分支
REM  说明：窗口不自动关闭，方便检查报错；按提示操作即可
REM ============================================================
chcp 65001 >nul
setlocal enabledelayedexpansion

echo ============================================
echo   GitHub Pages 一键部署
echo ============================================
echo.

REM --- 第 1 步：确认仓库名 ---
if "%APP_REPO%"=="" (
    set /p APP_REPO=请输入你的 GitHub 仓库名（例如 it-study）：
) else (
    echo 仓库名：%APP_REPO%（来自环境变量）
)

if "%APP_REPO%"=="" (
    echo 仓库名不能为空。
    pause
    exit /b 1
)

REM 去掉两边空格
for /f "tokens=* delims= " %%a in ("%APP_REPO%") do set "APP_REPO=%%a"

REM --- 第 2 步：检查依赖是否安装（没有就装） ---
if not exist node_modules\gh-pages\package.json (
    echo [1/3] 安装依赖 gh-pages + cross-env ...
    call npm install --no-audit --no-fund
    if errorlevel 1 (
        echo 依赖安装失败，请检查上面的报错。
        pause
        exit /b 1
    )
) else (
    echo [1/3] 依赖已就绪，跳过 npm install
)

REM --- 第 3 步：构建（带上正确的 base = /仓库名/） ---
echo [2/3] 开始构建，base = /%APP_REPO%/ ...
call npx.cmd cross-env-shell "vite build --base=/%APP_REPO%/"
if errorlevel 1 (
    echo 构建失败，请检查上面的报错。
    pause
    exit /b 1
)

REM --- 第 4 步：发布 dist/ 到 gh-pages 分支 ---
echo [3/3] 发布 dist/ 到 GitHub gh-pages 分支 ...
echo.
echo 如果是第一次发布，会提示你输入 GitHub 用户名与 Token（或使用 SSH key）。
echo 远端仓库地址需要是你自己的仓库：git remote -v 可以查看。
echo.
call npx.cmd gh-pages -d dist -b gh-pages -m "deploy to gh-pages"
if errorlevel 1 (
    echo.
    echo 发布失败！常见原因：
    echo   1. 还没有添加 GitHub 远端仓库  --- 请先执行：
    echo        git remote add origin https://github.com/你的用户名/你的仓库名.git
    echo   2. 用户名 / 密码（Token）错误
    echo   3. 网络问题（重试一次）
    echo.
    pause
    exit /b 1
)

echo.
echo ============================================
echo   部署成功！
echo ============================================
echo 几分钟后访问：
echo   https://你的用户名.github.io/%APP_REPO%/
echo.
echo GitHub 后台确认方式：
echo   仓库 Settings -^> Pages，Source 选择 Branch: gh-pages，/ (root)
echo.
pause
