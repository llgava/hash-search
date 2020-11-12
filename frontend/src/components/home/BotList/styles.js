import styled from 'styled-components';

import Colors from '../../../assets/styles/Colors.json';

const Container = styled.div`
  width: 100%;
  height: 50px;
`;

const BotFrame = styled.div`
  display: flex;
  justify-content: space-between;
  max-height: 256px;

  img {
    background-color: ${Colors.grey};
    width: 64px;
    height: 64px;
    border-radius: 10px;
    transform: translate(-15px, -15px);
  }

  h2 { margin-left: 15px; }

  span h3 {
    margin-right: 15px;
    float: right;
  }

  p {
    margin: 0 15px 15px 15px;
    text-align: justify;
    font-size: 14px;
  }

  div {
    border: 4px solid ${Colors.grey};
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
