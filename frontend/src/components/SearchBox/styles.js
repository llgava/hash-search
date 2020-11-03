import styled from 'styled-components';

import HashTag from '../../images/hashtag.svg';
import Colors from '../../styles/Colors.json';

export const Container = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -25%);
  text-align: center;

  h1 { font-size: 40px; }
  span {
    color: ${Colors.pink};
    font-family: 'Gilroy', sans-serif;
  }
`;

export const SearchField = styled.div`
  margin-top: 65px;

  input, button { font-size: 20px; }

  input {
    width: calc(486px - 52px);
    height: 62px;
    border: 2px solid ${Colors.grey};
    border-radius: 10px;
    padding: 0 0 0 52px;
    background: url(${HashTag}) no-repeat scroll 20px 21.5px;
    background-size: 18px;
    background-color: ${Colors.ice};
  }

  input:focus {
    outline-style: none;
    box-shadow: inset 0 0 0 2px ${Colors.dark_blue};
    border: 2px solid transparent;
  }

  button {
    margin-left: 15px;
    color: white;
    cursor: pointer;
    border: 2px solid ${Colors.dark_blue};
    background-color: ${Colors.blue};
    border-radius: 10px;
    width: 148px;
    height: 66px;
  }

  button:hover { background-color: ${Colors.dark_blue}; }
`;
