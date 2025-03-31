/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig(({ mode }) => {
  const envs = loadEnv(mode, process.cwd(), '');
  const { VITE_PORT, VITE_APP_BASENAME } = envs;

  return {
    plugins: [react()],
    server: {
      open: VITE_APP_BASENAME,
      port: +VITE_PORT,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'dist',
      sourcemap: mode === 'development',
      minify: 'esbuild',
      cssCodeSplit: true,
      brotliSize: false,
    },
    optimizeDeps: {
      include: ['react', 'react-dom'],
    },
  };
});
