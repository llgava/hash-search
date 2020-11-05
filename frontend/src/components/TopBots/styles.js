import styled from 'styled-components';

import Colors from '../../assets/styles/Colors.json';

export const Container = styled.div`
  padding: 0 100px;
`;

export const Items = styled.div`
  background-color: white;
  border-radius: 10px;
  border: 4px solid ${Colors.grey};
  width: 300px;
  height: 300px;
  padding: 15px;
  box-shadow: 15px 15px 0px 0px rgba(225,229,230,1);
  transition: .3s ease-in-out;

  :hover { transform: translateY(-10px); }
  h1, h3, p { color: ${Colors.dark_grey }; }
  h1 { margin-top: -20px; }
  h3 { margin-right: 10px; }

  p {
    text-align: justify;
    margin-bottom: 20px;
  }

  img {
    transform: translate(-35px, -35px);
    width: 128px;
    height: auto;
    border-radius: 15px;
  }

  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;
