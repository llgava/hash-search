import styled from 'styled-components';

import Colors from '../../../assets/styles/Colors.json';

export const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 3% 15%;
  background-color: white;

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
`;

export const HeaderLogo = styled.img`
  width: 356px;
  height: auto;
  margin-right: auto;
`;
