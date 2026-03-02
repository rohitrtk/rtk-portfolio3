import '@/styles/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/pages/Home/App';
import { ThemeProvider } from '@/context/ThemeProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
