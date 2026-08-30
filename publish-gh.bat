@echo off
REM ============================================================
REM  发布 dist/ 到 GitHub 的 gh-pages 分支（Git 原生方式，Windows）
REM  - 不用 gh-pages npm 包，避免 Windows 下的 ENAMETOOLONG / remote mismatch 等坑
REM  - 流程：复制 dist 到临时目录 -> 初始化临时 git 仓库 -> 强制推送 gh-pages 分支
REM  窗口保持打开，报错可以检查
REM ============================================================
chcp 65001 >nul
setlocal

echo ============================================
echo   发布到 GitHub Pages (gh-pages 分支)
echo ============================================
echo.

REM 远端地址（已在仓库执行过 git remote add origin ...，这里直接读取）
for /f "tokens=*" %%i in ('git remote get-url origin') do set REMOTE=%%i
if "%REMOTE%"=="" (
    echo 错误：没有配置 origin 远端。
    echo 请先执行：git remote add origin https://github.com/FGBGO/it-study.git
    pause
    exit /b 1
)
echo 远端仓库：%REMOTE%

REM 检查 dist 是否存在
if not exist dist\index.html (
    echo 错误：dist/index.html 不存在，请先构建。
    echo 可以运行：npm run build  或  deploy-gh.bat
    pause
    exit /b 1
)

REM 在临时目录里做一次干净的提交
set TMP_DIR=%TEMP%\gh-pages-%RANDOM%
echo.
echo [1/3] 准备临时工作目录：%TMP_DIR%
if exist "%TMP_DIR%" rmdir /s /q "%TMP_DIR%"
mkdir "%TMP_DIR%"

REM 把 dist 的所有文件复制过去（xcopy 带 /E 递归，/Y 覆盖）
echo [2/3] 复制 dist 内容到临时仓库
xcopy dist\* "%TMP_DIR%\" /E /Y /I /Q >nul

REM GitHub Pages 需要 404.html 作为深链回退；由于本站是 hash 路由，
REM 这一步不是必须的，但仍然创建一个与 index.html 相同的 404.html 兜底
copy /Y "%TMP_DIR%\index.html" "%TMP_DIR%\404.html" >nul

REM 在临时目录里初始化 git，做一次提交
cd /d "%TMP_DIR%"
git init >nul
git checkout -b gh-pages >nul 2>&1
git add -A
git commit -m "deploy gh-pages: %date% %time%" >nul
if errorlevel 1 (
    echo 临时提交失败
    pause
    exit /b 1
)

REM 强制推送到远端 gh-pages 分支
echo [3/3] 推送 gh-pages 到远端...
echo.
git push -f "%REMOTE%" gh-pages:gh-pages
if errorlevel 1 (
    echo.
    echo 推送失败！常见原因：
    echo   1. 还没登录 GitHub / 没有 HTTPS 凭据
    echo       - 如果提示输入用户名和密码：用户名为 GitHub 用户名，密码请用 Personal Access Token
    echo         （Settings -^> Developer settings -^> Personal access tokens -^> Tokens classic，权限勾 repo）
    echo       - 也可以用 SSH key，把远端换成 git@github.com:FGBGO/it-study.git
    echo   2. 网络或 GitHub 服务异常（稍后重试）
    echo.
    pause
    exit /b 1
)

REM 清理临时目录
cd /d "%~dp0"
rmdir /s /q "%TMP_DIR%" 2>nul

echo.
echo ============================================
echo   gh-pages 分支推送成功！
echo ============================================
echo.
echo 请按顺序再做 3 步（最后两步是一次性的）：
echo   1. 在 https://github.com/FGBGO/it-study 上能看到 gh-pages 分支
echo   2. 进入仓库 Settings -^> Pages
echo      Source 选 Branch: gh-pages  目录: / (root)  点 Save
echo   3. 等 1-3 分钟后访问：
echo        https://FGBGO.github.io/it-study/
echo.
pause
