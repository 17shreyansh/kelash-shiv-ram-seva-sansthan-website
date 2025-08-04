const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting deployment process...\n');

try {
  // Clean previous build
  console.log('🧹 Cleaning previous build...');
  if (fs.existsSync('build')) {
    execSync('rmdir /s /q build', { stdio: 'inherit' });
  }

  // Install dependencies
  console.log('📦 Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });

  // Build the project
  console.log('🔨 Building project...');
  execSync('npm run build', { stdio: 'inherit' });

  // Check if build was successful
  if (!fs.existsSync('build')) {
    throw new Error('Build failed - build directory not found');
  }

  console.log('\n✅ Build completed successfully!');
  console.log('\n📋 Deployment options:');
  console.log('1. Netlify: Drag and drop the "build" folder to netlify.com/drop');
  console.log('2. Vercel: Run "npx vercel --prod" in this directory');
  console.log('3. GitHub Pages: Push to GitHub and enable Pages in repository settings');
  console.log('4. Local test: Run "npm run serve" to test the build locally');

} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}