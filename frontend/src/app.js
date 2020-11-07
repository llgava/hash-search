import React from 'react';

import Routes from './routes';
import { GlobalStyle } from './assets/styles/GlobalStyle';

// Providers
import LoggedInProvider from './hooks/LoggedIn';
import UserProvider from './hooks/User';
import StaffProvider from './hooks/Staff';

const App = () => (
  <UserProvider>
    <LoggedInProvider>
      <StaffProvider>
        <Routes />
        <GlobalStyle />
      </StaffProvider>
    </LoggedInProvider>
  </UserProvider>
);

export default App;
