import styled from 'styled-components';

import Colors from '../../../assets/styles/Colors.json';

const Container = styled.div`
  h2 { margin-bottom: 45px; }
`;

const BotFrame = styled.div`
  display: flex;
  flex-direction: row;
  height: 172px;
  justify-content: left;

  a:nth-child(1) > div { margin-left: 0; }
  a:nth-child(4) > div { margin-right: 0; }

  div {
    background-color: ${Colors.ice};
    border-radius: 10px;
    border-top: 4px solid ${Colors.blue};
    box-shadow: 10px 10px 0px 0px ${Colors.light_grey};
    padding: 15px;
    transition: .3s ease-in-out;
    width: calc(320px - 30px);
    height: 112px;
    margin: 0 30px;
  }

  div:first-child { margin-left: 0; }
  div:last-child { margin-right: 0; }
  div:hover { transform: translateY(-10px); }

  img {
    border-radius: 10px;
    width: 72px;
    height: auto;
    transform: translate(-32px, -32px);
    background-color: ${Colors.ice};
  }

  h2 {
    margin: -72px 0 15px 0;
    text-align: center;
  }

  p {
    font-size: 14px;
    text-align: justify;
  }
`;

export { Container, BotFrame };
