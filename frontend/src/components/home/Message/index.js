import React from 'react';

// Style
import { Container } from './styles';

export default class Message extends React.Component {
  render() {
    return (
      <Container>
        <h1>Sometimes with bots, your Discord<br />server goes <span>insane</span></h1>
      </Container>
    );
  }
}
