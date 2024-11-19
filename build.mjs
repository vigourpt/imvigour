import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Ensure dist directory exists
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Build main AIDA app
console.log('Building main AIDA app...');
execSync('vite build', { stdio: 'inherit' });

// Build niche analyzer
console.log('\nBuilding niche analyzer...');
if (fs.existsSync('dist/niche-analyzer')) {
  fs.rmSync('dist/niche-analyzer', { recursive: true });
}
fs.mkdirSync('dist/niche-analyzer', { recursive: true });
process.chdir('niche-analyzer');
execSync('vite build --outDir ../dist/niche-analyzer', { stdio: 'inherit' });
process.chdir('..');

// Build affiliate marketing calculator
console.log('\nBuilding affiliate marketing calculator...');
if (fs.existsSync('dist/affiliate-marketing-calculator')) {
  fs.rmSync('dist/affiliate-marketing-calculator', { recursive: true });
}
fs.mkdirSync('dist/affiliate-marketing-calculator', { recursive: true });
process.chdir('affiliatemarketingcalculator');
execSync('BUILD_TARGET=affiliate-marketing-calculator vite build --outDir ../dist/affiliate-marketing-calculator', { stdio: 'inherit' });
process.chdir('..');

console.log('\nBuild complete! Directory structure:');
execSync('ls -R dist/', { stdio: 'inherit' });
