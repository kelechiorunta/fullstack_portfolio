// import { defineConfig } from 'vite';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
/// <reference types="vitest/config" />
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5174,
    proxy: {
      '/api': {
        target: 'http://localhost:3300',
        changeOrigin: true,
        secure: false // dev mode
      }
    },
    cors: {
      // the origin you will be accessing via browser
      origin: 'http://localhost:3300'
    }
  },
  test: {
    name: { label: 'unit', color: 'cyan' },
    globals: true, // use describe, it, expect without import
    environment: 'jsdom', // for React (DOM environment)
    setupFiles: './jest.setup.ts' // optional setup file,
    // testTimeout: 15000
  }
});
