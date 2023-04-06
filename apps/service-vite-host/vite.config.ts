/// <reference types="vitest" />
import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/service-vite-host',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    react(),
    // // For some reason (yet unclear), viteTsConfigPaths in host application breaks the federation and needs to be commented out for now
    // viteTsConfigPaths({
    //   root: '../../',
    // }),
    federation({
      name: 'service-vite-host',
      remotes: {
        'service-vite-remote': 'http://localhost:5001/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'], // Any libraries we want to share with our remote
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../',
  //    }),
  //  ],
  // },

  // It's unclear why this is needed, but this is the source: https://youtu.be/t-nchkL9yIg?t=721
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
