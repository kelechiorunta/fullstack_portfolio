import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Theme } from '@radix-ui/themes';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import '@radix-ui/themes/styles.css';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Theme
        appearance="dark"
        accentColor={'gold'}
        // grayColor="olive"
        // panelBackground="translucent"
        // style={{ backgroundColor: 'var(--teal-5)', fontFamily: 'Poppins' }}
      >
        <App />
      </Theme>
    </BrowserRouter>
  </StrictMode>
);
