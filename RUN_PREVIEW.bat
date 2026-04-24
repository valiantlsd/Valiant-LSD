@echo off
setlocal

cd /d "%~dp0"

if not exist node_modules (
  echo Installing dependencies. This only needs to happen the first time...
  call npm.cmd install
  if errorlevel 1 (
    echo.
    echo Dependency installation failed.
    pause
    exit /b 1
  )
)

echo.
echo Starting unified VLD preview...
echo Open http://127.0.0.1:5177 in your browser.
echo.
call npm.cmd run dev -- --port 5177

