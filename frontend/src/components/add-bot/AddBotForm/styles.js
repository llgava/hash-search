import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

// Elements (e.g: Components, hooks, images and videos).
import Colors from '../../../assets/styles/Colors.json';

const Form = styled(Unform)`
  width: 432px;
  height: auto;
  position: absolute;
  left: 50%;
  top: 55%;
  padding: 60px 15px 15px 15px;
  border-top: 4px solid ${Colors.blue};
  border-radius: 15px;
  box-shadow: 10px 10px 0px 0px ${Colors.light_grey};
  background-color: ${Colors.ice};
  transform: translate(-50%, -50%);

  div:first-child { height: 0px; }

  img {
    width: 228px;
    height: auto;
    margin-left: calc(100% - 228px);
    transform: translateY(-176px);
  }

  button {
    background-color: ${Colors.dark_blue};
    border: 3px inset rgba(0, 0, 0, .10);
    width: calc(100% - 30px);
    color: white;
    margin: 0 15px 30px 15px;
    padding: 15px;
    border-radius: 15px;
    transition: .3s ease-in-out;
    cursor: pointer;
  }

  button:hover { background-color: ${Colors.blue}; }
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
    font-size: 16px;
    padding: 15px;
    margin: 0 15px 30px 15px;
    width: calc(100% - 60px);
  }
`;

export { Form, InputGroup };
