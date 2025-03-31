import { meta } from '@/meta';

export const isProductionEnv = meta.env.VITE_APP_NODE_ENV === 'production';
export const apiUrl = meta.env.VITE_API_URL;
