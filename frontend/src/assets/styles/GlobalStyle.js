import { createGlobalStyle } from 'styled-components';

import Background from '../images/background.png';
import Gilroy from '../fonts/Gilroy.otf';
import OpenSans from '../fonts/OpenSans.ttf';
import Colors from './Colors.json';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Gilroy';
    src: url(${Gilroy});
  }

  @font-face {
    font-family: 'OpenSans';
    src: url(${OpenSans});
  }

  * {
    border: 0;
    margin: 0;
    text-decoration: none;
  }

  p, span, ::placeholder { font-family: 'OpenSans', sans-serif; }

  a { color: ${Colors.dark_grey}; }
  a:hover { color: ${Colors.dark_blue};  }

  ::placeholder {
    opacity: 0.3;
    color: black;
    font-weight: bold;
  }

  button { font-family: 'Gilroy', sans-serif; }
  button:focus { outline-style: none; }

  body {
    background-image: url(${Background});
    background-color: white;
    font-family: 'Gilroy', sans-serif;
  }
`;
