/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { FaChevronCircleDown } from 'react-icons/fa'

// Component Elements (E.g: Images, sounds, videos).
import Logo from '../../images/logo.svg';

// Every style of this component.
import { Container } from './styles';

// Contexts
import { useLoggedIn } from '../../context/LoggedIn';

export default function Header() {
  const { loggedIn } = useLoggedIn();

  return (
    <Container>
      <img src={Logo} alt="Logo" />

      <nav>
        <ul>
          <li><a href='/#'>home</a></li>
          <li><a href='https://github.com/llgava/hash-search' target="__blank">open source</a></li>
        </ul>
      </nav>

      { loggedIn
        ? <FaChevronCircleDown size={40}/>
        : <p>Deslogado</p>
      }

    </Container>
  )
}
