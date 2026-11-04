@echo off
setlocal
cd /d "%~dp0vercel"
echo Deploying to Vercel...
call vercel --prod
if errorlevel 1 (
  echo.
  echo Deployment failed. If you need to log in, run: vercel login
) else (
  echo.
  echo Deployed successfully!
)
pause

