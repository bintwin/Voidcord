@echo off
cd /d "%~dp0vercel"
npx vercel --prod --yes
pause

