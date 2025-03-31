/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  readonly VITE_APP_NODE_ENV: string;
  readonly VITE_APP_BASENAME: string;
  readonly VITE_API_URL: string;
  readonly VITE_PORT: number;
}
