import { createGlobalStyle } from 'styled-components';

// Elements
import Colors from '../Colors.json';

export const Buttons = createGlobalStyle`
  button {
    background-color: ${Colors.blue};
    border-radius: 10px;
    border: 2px solid ${Colors.dark_blue};
    color: white;
    cursor: pointer;
    font-family: 'Gilroy', sans-serif;
    font-size: 20px;
    height: 66px;
    width: 148px;
  }

  button:focus { outline-style: none; }
`;
