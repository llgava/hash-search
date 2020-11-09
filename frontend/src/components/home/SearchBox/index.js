import React from 'react';

// Style
import { Container, SearchField } from './styles';

export default class SearchBox extends React.Component {
  render() {
    return (
      <Container>
        <h1>Sometimes with bots, your Discord<br />server goes <span>insane</span></h1>

        <SearchField>
          <input type="text" placeholder="How about looking for a bot?" />
          <a href="/#"><button>Search</button></a>
        </SearchField>
      </Container>
    );
  }
}
