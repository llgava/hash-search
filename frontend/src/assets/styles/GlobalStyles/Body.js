import { createGlobalStyle } from 'styled-components';

import bg from '../../images/bg.png'

export const Body = createGlobalStyle`
  * {
    margin: 0;
    border: 0;
    padding: 0;
  }

  body {
    background-image: url(${bg});
    padding: 0 15%;
  }
`;
