import React from 'react';

// Components
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import LoggedInProvider from './context/LoggedIn';
import UserProvider from './context/User';

// Containers
import { GlobalStyle } from './styles/GlobalStyle';


function App() {
  return (
    <>
      <UserProvider>
        <LoggedInProvider>
        <Header />
        </LoggedInProvider>
      </UserProvider>
      <SearchBox />
      <GlobalStyle />
    </>
  );
}

export default App;
