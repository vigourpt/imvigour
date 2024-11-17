import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Affiliate-Marketing-Calculator/', // Set the base path for the subdirectory
  plugins: [react()],
});
