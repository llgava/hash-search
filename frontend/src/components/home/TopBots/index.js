import React from 'react';
import { FaPlusCircle } from 'react-icons/fa'

import { Container, Items } from './styles';

export default function TopBots() {
  return(
    <Container>
      <Items>
        <img src='https://auctions.top.gg/static/uploads/912998ff4352d50c03a82cc96bae585a.png' alt='sim' />
        <h1>Groovy</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <div>
          <h3>add to your server</h3>
          <FaPlusCircle size={25} color='#6C82CF' />
        </div>
      </Items>
    </Container>
  );
}
