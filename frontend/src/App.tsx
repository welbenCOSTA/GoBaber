import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';

import Routes from './routes';

import GlobalProvider from './hooks';

const App: React.FC = () => (
  <BrowserRouter>
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
    <GlobalStyles />
  </BrowserRouter>
);

export default App;
