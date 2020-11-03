/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
//import { FaChevronCircleDown } from 'react-icons/fa'

// Elements, components, contexts, ands styles.
import Logo from '../../assets/images/logo.svg';
import DropdownMenu from '../DropdownMenu';
import { useLoggedIn } from '../../context/LoggedIn';
import { Container } from './styles';

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
        ? <>{/* <FaChevronCircleDown size={40} /> */} <DropdownMenu /></>
        : <a href='http://localhost:5000/api/auth'><button>login</button></a>
      }

    </Container>
  )
}
