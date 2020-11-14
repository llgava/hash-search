import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

// Elements (e.g: Components, hooks, images and videos).
import Colors from '../../../assets/styles/Colors.json';


const Form = styled(Unform)`
  width: 432px;
  height: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 60px 15px 15px 15px;
  border-top: 4px solid ${Colors.blue};
  border-radius: 15px;
  box-shadow: 10px 10px 0px 0px ${Colors.light_grey};
  background-color: ${Colors.ice};
  transform: translate(-50%, -50%);

  img {
    width: 128px;
    height: auto;
    margin-left: calc(100% - 128px);
    transform: translateY(62px);
  }
`;

const InputGroup = styled.div`
  span {
    font-family: 'Gilroy', sans-serif;
    background-color: ${Colors.ice};
    border-radius: 100%;
    padding: 0 10px;
    font-size: 16px;
    margin: -10px 0 0 30px;
    position:absolute;
  }

  input {
    background-color: ${Colors.ice};
    border: 2px solid ${Colors.blue};
    border-radius: 15px;
    display: block;
    padding: 15px;
    margin: 0 15px 30px 15px;
    width: calc(100% - 60px);
  }
`;

export { Form, InputGroup };
