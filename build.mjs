import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Clean dist directory
console.log('Cleaning dist directory...');
if (fs.existsSync('dist')) {
  fs.rmSync('dist', { recursive: true });
}
fs.mkdirSync('dist');

// Build main AIDA app
console.log('\nBuilding main AIDA app...');
execSync('vite build', { stdio: 'inherit' });

// Build niche analyzer
console.log('\nBuilding niche analyzer...');
process.chdir('niche-analyzer');
execSync('vite build --outDir ../dist/niche-analyzer', { stdio: 'inherit' });
process.chdir('..');

// Build affiliate marketing calculator
console.log('\nBuilding affiliate marketing calculator...');
process.chdir('affiliatemarketingcalculator');
execSync('vite build --outDir ../dist/affiliate-marketing-calculator', { stdio: 'inherit' });
process.chdir('..');

// Ensure proper directory structure
console.log('\nEnsuring proper directory structure...');
const distPath = path.resolve('dist');
const amcPath = path.resolve(distPath, 'affiliate-marketing-calculator');
const nicheAnalyzerPath = path.resolve(distPath, 'niche-analyzer');

// Create directories if they don't exist
if (!fs.existsSync(amcPath)) {
  fs.mkdirSync(amcPath, { recursive: true });
}
if (!fs.existsSync(nicheAnalyzerPath)) {
  fs.mkdirSync(nicheAnalyzerPath, { recursive: true });
}

// Copy files to ensure they're in the correct location
if (fs.existsSync(path.resolve(amcPath, 'index.html'))) {
  fs.copyFileSync(
    path.resolve(amcPath, 'index.html'),
    path.resolve(amcPath, 'index.html')
  );
}
if (fs.existsSync(path.resolve(nicheAnalyzerPath, 'index.html'))) {
  fs.copyFileSync(
    path.resolve(nicheAnalyzerPath, 'index.html'),
    path.resolve(nicheAnalyzerPath, 'index.html')
  );
}

console.log('\nBuild complete! Directory structure:');
execSync('ls -la dist/', { stdio: 'inherit' });
execSync('ls -la dist/affiliate-marketing-calculator/', { stdio: 'inherit' });
execSync('ls -la dist/niche-analyzer/', { stdio: 'inherit' });
