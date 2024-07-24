import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { HashRouter } from 'react-router-dom';
import { AppProvider } from './context/AppContext.tsx';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </AppProvider>
    </Provider>
  </React.StrictMode>
);
