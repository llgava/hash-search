/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { FaChevronCircleDown } from 'react-icons/fa';

// Elements (e.g: Components, hooks, images and videos).
import Colors from '../../../assets/styles/Colors.json';
import DropdownMenu from '../DropdownMenu';
import Logo from '../../../assets/images/logo.svg';
import { Container, HeaderLogo } from './styles';
import { loginURL } from '../../../config.json';
import { useLoggedIn } from '../../../hooks/LoggedIn';

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
        : <a href={loginURL}><button>login with discord</button></a>
      }
    </Container>
  )
}
