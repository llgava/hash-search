import styled from 'styled-components';

import Colors from '../../../assets/styles/Colors.json';

const Container = styled.div`
  width: 100%;
  height: 50px;
`;

const BotFrame = styled.div`
  display: flex;
  justify-content: space-between;
  height: 224px;

  img {
    background-color: ${Colors.grey};
    width: 72px;
    height: 72px;
    border-radius: 10px;
    transform: translate(-23px, -23px);
  }

  h2 { margin-left: 15px; }
  h3 { margin-right: 5px;}
  span, h3 { transition: .3s ease-in-out; }
  span:hover, span:hover > h3 { color: ${Colors.dark_blue}; }

  span {
    cursor: pointer;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 15px;
    right: 15px;
  }

  p {
    margin: 0 15px 15px 15px;
    text-align: justify;
    font-size: 14px;
  }

  div {
    position: relative;
    border: 3px solid ${Colors.grey};
    border-radius: 10px;
    background-color: ${Colors.ice};
    height: auto;
    width: 320px;
    box-shadow: 10px 10px 0px 0px #E1E5E6;
    transition: .3s ease-in-out;
  }

  div:hover {  transform: translateY(-10px); }
`;

export { Container, BotFrame };
