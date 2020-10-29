import styled from 'styled-components';

import Colors from '../../styles/Colors.json';

export const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 3% 15%;

  // Logo
  img:nth-child(1) {
    width: 356px;
    height: auto;
    margin-right: auto;
  }

  // Navigation
  nav { list-style: none; }
  nav ul li, button { font-size: 30px; }

  nav ul li {
    display: inline-block;
    padding: 0 15px;
  }

  // Login Button
  button {
    padding: 0px 0 0 15px;
    background: transparent;
    color: ${Colors.dark_blue};
    text-decoration: underline;
    border: none;
    border-radius: 50px;
    cursor: pointer;
  }

  a button:hover { color: ${Colors.blue}; }

  // Profile Avatar
  img:nth-child(3) {
    width: 64px;
    height: 64px;
    margin-left: 15px;
    font-family: 'Gilroy', sans-serif;
    border-radius: 32px;
  }
`;

