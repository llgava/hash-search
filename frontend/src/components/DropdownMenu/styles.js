import styled from 'styled-components';

import Colors from '../../styles/Colors.json';

export const IconButton = styled.div`
  width: 40px;
  height: 38px;
  border-radius: 32px;
  background-color: ${Colors.ice};

  :hover {
    cursor: pointer;
    background-color: ${Colors.light_grey};
  }
`;

export const DropdownList = styled.div`
  width: 20%;
  height: auto;
  position: absolute;
  top: 3%;
  width: 300px;
  background-color: ${Colors.ice};

  div:nth-child(1) {
    padding: 15px;
    border-radius: 15px 15px 0 0;
    display: inline-flexbox;
    line-height: 0px;
    align-items: center;
    width: 100%;
    height: auto;
    background-color: ${Colors.dark_blue};
  }

  p, span { color: white; }
  p { font-weight: 600; }

  span {
    font-size: 12px;
    font-weight: 500;
  }

  img {
    margin-right: 15px;
    border-radius: 32px;
    width: 64px;
    height: auto;
  }
`;
