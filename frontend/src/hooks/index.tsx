import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

const GlobalProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  );
};

export default GlobalProvider;
