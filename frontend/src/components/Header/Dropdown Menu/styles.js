import styled from 'styled-components';

import Colors from '../../../styles/Colors.json';

export const IconButton = styled.div`
  text-align: center;
  padding-top: 4px;
  width: 64px;
  height: 60px;
  border-radius: 32px;
  background-color: ${Colors.ice};

  :hover {
    cursor: pointer;
    background-color: ${Colors.light_grey};
  }
`;
