import React from 'react';

// Elements (e.g: Components, hooks, images and videos).
import Header from '../components/global/Header';
import BotList from '../components/home/BotList';
import Message from '../components/home/Message';

const Home = () => (
  <>
    <Header />
    <Message />
    <BotList />
  </>
);

export default Home;
