import React from 'react';

import { Container } from './styles';

export default function MyBotsHeader() {
  return (
    <Container>
      <div>
        <h1>My bots</h1>
        <a href="/#"><button>add bot</button></a>
      </div>
    </Container>
  );
}
