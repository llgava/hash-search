import React from 'react';

// Elements (e.g: Components, hooks, images and videos).
import GlobalStyles from './components/GlobalStyle';
import LoggedInProvider from './hooks/LoggedIn';
import UserProvider from './hooks/User';
import BotProvider from './hooks/Bot';
import Routes from './routes';
import BotByOwnerProvider from './hooks/BotByOwner';

const App = () => (
  <UserProvider>
    <BotProvider>
      <BotByOwnerProvider>
        <LoggedInProvider>
          <Routes />
          <GlobalStyles />
        </LoggedInProvider>
      </BotByOwnerProvider>
    </BotProvider>
  </UserProvider>
);

export default App;
