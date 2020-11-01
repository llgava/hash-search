/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { FaChevronCircleDown } from 'react-icons/fa'
import fetch from 'node-fetch';

// Component Elements (E.g: Images, sounds, videos).
import Logo from '../../images/logo.png';

// Every style of this component.
import { Container } from './styles';

const IconsSize = 40;

export default function Header() {
  const [user, setUser] = useState([]);

  // Fetch all data from http://localhost:5000/api/me if the user are logged in.
  useEffect(async () => {
    const UserFetch = await fetch('/api/me');
    const UserData = await UserFetch.json();

    setUser(UserData);
  }, []);

  return (
    <Container>
      <img src={Logo} alt="Logo" />

      <nav>
        <ul>
          <li><a href='/#'>home</a></li>
          <li><a href='https://github.com/llgava/hash-search' target="__blank">open source</a></li>
        </ul>
      </nav>

      <FaChevronCircleDown size={IconsSize} />
    </Container>
  )
}
