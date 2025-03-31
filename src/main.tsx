import { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from '@/App';
import meta from '@/meta';
import { GlobalAppProvider } from '@/store/app-context';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router basename={meta.env.VITE_APP_BASENAME}>
      <GlobalAppProvider>
        <App />
      </GlobalAppProvider>
    </Router>
  </StrictMode>,
);
