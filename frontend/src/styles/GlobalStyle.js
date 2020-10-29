import { createGlobalStyle } from 'styled-components';

import Background from '../images/background.png';
import Gilroy from '../fonts/Gilroy.otf';
import Colors from './Colors.json';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Gilroy';
    src: url(${Gilroy});
  }

  * {
    color: ${Colors.dark_grey};
    text-decoration: none;
  }

  a:hover {
    color: ${Colors.dark_blue};
    transition: all 0.3s ease 0s;
  }
  
  button { font-family: 'Gilroy', sans-serif; }

  body {
    background-image: url(${Background});
    font-family: 'Gilroy', sans-serif;
  }
`;
