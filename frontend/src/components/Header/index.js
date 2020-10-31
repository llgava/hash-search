import React from 'react';
import fetch from 'node-fetch';

import Logo from '../../images/logo.png';

// Style
import { Container } from './styles';
import DropdownMenu from './Dropdown Menu/DropdownMenu';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      isLoggedIn: false
    }
  }

  componentDidMount() {
    fetch('/api/me')
      .then(res => res.json())
      .then(user => this.setState({ user: user, isLoggedIn: true }));
  }

  render() {
    //const ProfileAvatar = `https://cdn.discordapp.com/avatars/${this.state.user.dsID}/${this.state.user.dsAvatar}`;
    const isLoggedIn = this.state.isLoggedIn;

    return(
      <Container>
        <img src={Logo} alt="Logo" />

        <nav>
          <ul>
            <li><a href='/#'>home</a></li>
            <li><a href='https://github.com/llgava/hash-search' target="__blank">open source</a></li>
          </ul>
        </nav>

        { isLoggedIn
          ? <DropdownMenu />
          : <a href="http://localhost:5000/api/auth"><button>login</button></a>
        }


      </Container>
    );
  }
}
