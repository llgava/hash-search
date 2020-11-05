import React from 'react';

// Components
import HeaderWithProviders from './components.providers/Header';
import SearchBox from './components/SearchBox';
import TopBots from './components/TopBots';

// Containers
import { GlobalStyle } from './assets/styles/GlobalStyle';

function App() {
  return (
    <>
      <HeaderWithProviders />
      <SearchBox />
      <TopBots />
      <GlobalStyle />
    </>
  );
}

export default App;
