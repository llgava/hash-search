import styled from 'styled-components';

import Colors from '../../assets/styles/Colors.json';

export const Container = styled.div`
  padding: 2% 15%;

  div {
    display: flex;
    justify-content: space-between;
  }

  h1 { color: ${Colors.dark_grey}; }

  button { font-size: 20px; }

  button {
    color: white;
    cursor: pointer;
    border: 2px solid ${Colors.dark_blue};
    background-color: ${Colors.blue};
    border-radius: 10px;
    width: 148px;
    height: 48px;
  }

  button:hover { background-color: ${Colors.dark_blue}; }
`;
