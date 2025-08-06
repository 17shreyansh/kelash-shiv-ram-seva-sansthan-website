@echo off
echo Installing image optimization dependencies...
npm install @craco/craco@^7.1.0 image-webpack-loader@^8.1.0 --save
echo.
echo Dependencies installed successfully!
echo.
echo To build optimized version, run:
echo npm run build
echo.
pause