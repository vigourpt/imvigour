import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isStandalone = process.env.STANDALONE === 'true';
const base = isStandalone ? '/' : '/affiliate-marketing-calculator/';

console.log(`Building in ${isStandalone ? 'standalone' : 'subdirectory'} mode with base: ${base}`);

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
});
