import styled from 'styled-components';

// Elements (e.g: Components, hooks, images and videos).
import Colors from '../../../assets/styles/Colors.json';

const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 3% 0;
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
    width: auto;
    background: transparent;
    color: ${Colors.dark_blue};
    text-decoration: underline;
    border: none;
    cursor: pointer;
  }

  a button:hover { color: ${Colors.blue}; }
`;

const HeaderLogo = styled.img`
  width: 356px;
  height: auto;
  margin-right: auto;
`;

export { Container, HeaderLogo };
