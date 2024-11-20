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
execSync('vite build --outDir ../dist/affiliate-marketing-calculator', { stdio: 'inherit' });
process.chdir('..');

// Ensure all assets have correct file permissions
console.log('\nSetting file permissions...');
execSync('chmod -R 644 dist/assets/*', { stdio: 'inherit' });
execSync('chmod -R 644 dist/affiliate-marketing-calculator/assets/*', { stdio: 'inherit' });
execSync('chmod -R 644 dist/niche-analyzer/assets/*', { stdio: 'inherit' });

console.log('\nBuild complete! Directory structure:');
execSync('ls -la dist/', { stdio: 'inherit' });
execSync('ls -la dist/affiliate-marketing-calculator/', { stdio: 'inherit' });
execSync('ls -la dist/niche-analyzer/', { stdio: 'inherit' });
