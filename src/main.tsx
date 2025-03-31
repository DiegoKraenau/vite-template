import { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from '@/App';
import meta from '@/meta';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router basename={meta.env.VITE_APP_BASENAME}>
      <App />
    </Router>
  </StrictMode>,
);
