import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/multiLan_farmerscorecard/',
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://multilan-farmerscorecard.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
      },
    },
  },

  optimizeDeps: {
    include: ['hoist-non-react-statics'],
    esbuildOptions: {
      mainFields: ['module', 'main'],
    },
  },

  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
