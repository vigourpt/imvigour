import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isStandalone = process.env.STANDALONE === 'true';
console.log('Building in', isStandalone ? 'standalone' : 'subdirectory', 'mode');

// https://vitejs.dev/config/
export default defineConfig({
  base: isStandalone ? '/' : '/affiliate-marketing-calculator/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
});
