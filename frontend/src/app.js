import React from 'react';

// Components
import HeaderWithProviders from './components.providers/Header';
import SearchBox from './components/SearchBox';

// Containers
import { GlobalStyle } from './assets/styles/GlobalStyle';

function App() {
  return (
    <>
      <HeaderWithProviders />
      <SearchBox />
      <GlobalStyle />
    </>
  );
}

export default App;
