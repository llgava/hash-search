import React from 'react';

// Components
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import LoggedInProvider from './contexts/LoggedIn';
import UserProvider from './contexts/User';

// Containers
import { GlobalStyle } from './assets/styles/GlobalStyle';
import __test__ from './components/__test__';

function App() {
  return (
    <>
      <UserProvider>
        <LoggedInProvider>
        <Header />
        <__test__ />
        </LoggedInProvider>
      </UserProvider>
      <SearchBox />
      <GlobalStyle />
    </>
  );
}

export default App;
