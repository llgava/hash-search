import React from 'react';

// Components
import HeaderWithProviders from '../components.providers/Header';
import SearchBox from '../components/SearchBox';
import TopBots from '../components/TopBots';

const Home = () => (
  <>
    <HeaderWithProviders />
    <SearchBox />
    <TopBots />
  </>
);

export default Home;
