import React from 'react';

// Components
import SearchBox from './components/SearchBox';

// Containers
import { GlobalStyle } from './assets/styles/GlobalStyle';

// Components with provider
import HeaderWithProviders from './components-providers/Header';

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
