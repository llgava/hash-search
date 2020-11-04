/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { FaChevronCircleDown } from 'react-icons/fa'

// Elements, components, contexts, ands styles.
import Logo from '../../assets/images/logo.svg';
import DropdownMenu from '../DropdownMenu';
import { useLoggedIn } from '../../contexts/LoggedIn';
import { Container, HeaderLogo } from './styles';
import Colors from '../../assets/styles/Colors.json';

export default function Header() {
  const { loggedIn } = useLoggedIn();
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <Container>
      <HeaderLogo src={Logo} alt="Logo" />

      <nav>
        <ul>
          <li><a href='/#'>home</a></li>
          <li><a href='https://github.com/llgava/hash-search' target="__blank">open source</a></li>
        </ul>
      </nav>

      { openDropdown
        ? <DropdownMenu />
        : null
      }

      { loggedIn
        ? <FaChevronCircleDown size={40}
            style={{
              cursor: "pointer",
              color: Colors.dark_grey
            }}
            onClick={() => { setOpenDropdown(!openDropdown) }}/>
        : <a href='http://localhost:5000/api/auth'><button>login with Discord</button></a>
      }

    </Container>
  )
}
