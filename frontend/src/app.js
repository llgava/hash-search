import React from 'react';

import Routes from './routes';

// Providers
import LoggedInProvider from './hooks/LoggedIn';
import UserProvider from './hooks/User';
import StaffProvider from './hooks/Staff';

// Global Styles
import GlobalStyles from './components/GlobalStyle';
import BotProvider from './hooks/Bot';

const App = () => (
  <UserProvider>
    <BotProvider>
      <LoggedInProvider>
        <StaffProvider>
          <Routes />
          <GlobalStyles />
        </StaffProvider>
      </LoggedInProvider>
    </BotProvider>
  </UserProvider>
);

export default App;
