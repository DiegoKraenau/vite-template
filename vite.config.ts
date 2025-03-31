/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig(({ mode }) => {
  const envs = loadEnv(mode, process.cwd(), '');
  const { VITE_PORT } = envs;

  return {
    plugins: [react()],
    server: {
      port: +VITE_PORT,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  };
});
