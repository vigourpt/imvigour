import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Determine the base path based on the build target
const getBase = () => {
  if (process.env.BUILD_TARGET === 'affiliate-marketing-calculator') {
    return '/affiliate-marketing-calculator/';
  }
  return '/';
};

export default defineConfig({
  base: getBase(),
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
});
