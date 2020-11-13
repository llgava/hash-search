import React from 'react';

// Elements (e.g: Components, hooks, images and videos).
import GlobalStyles from './components/GlobalStyle';
import LoggedInProvider from './hooks/LoggedIn';
import UserProvider from './hooks/User';
import BotProvider from './hooks/Bot';
import Routes from './routes';

const App = () => (
  <UserProvider>
    <BotProvider>
      <LoggedInProvider>
          <Routes />
          <GlobalStyles />
      </LoggedInProvider>
    </BotProvider>
  </UserProvider>
);

export default App;
