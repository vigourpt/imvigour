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
process.chdir('affiliate-marketing-calculator');
execSync('STANDALONE=true vite build', { stdio: 'inherit' });
// Copy build output to main dist directory
if (fs.existsSync('dist')) {
  fs.cpSync('dist', '../dist/affiliate-marketing-calculator', { recursive: true });
  fs.rmSync('dist', { recursive: true });
}
process.chdir('..');

console.log('\nBuild complete! Directory structure:');
execSync('ls -la dist/', { stdio: 'inherit' });
execSync('ls -la dist/affiliate-marketing-calculator/', { stdio: 'inherit' });
execSync('ls -la dist/niche-analyzer/', { stdio: 'inherit' });
