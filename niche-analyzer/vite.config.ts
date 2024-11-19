import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/nicheanalyzerdownload/', // Set this to the subdirectory name
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'index.js',
        chunkFileNames: 'index.js',
        assetFileNames: 'index[extname]',
      },
    },
  },
});
