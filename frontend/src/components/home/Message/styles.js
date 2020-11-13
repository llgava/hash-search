import styled from 'styled-components';

// Elements (e.g: Components, hooks, images and videos).
import Colors from '../../../assets/styles/Colors.json';

const Container = styled.div`
  margin: 10% 0;
  text-align: center;

  span {
    color: ${Colors.pink};
    font-size: 40px;
    font-family: 'Gilroy', sans-serif;
  }
`;

export { Container };
