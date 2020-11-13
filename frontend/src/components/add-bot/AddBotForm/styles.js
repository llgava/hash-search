import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

import Colors from '../../../assets/styles/Colors.json';
import ClientID from '../../../assets/images/icons/client_id.svg'
import BotName from '../../../assets/images/icons/bot_name.svg';
import Description from '../../../assets/images/icons/description.svg';
import InviteURL from '../../../assets/images/icons/invite_url.svg';

const Form = styled(Unform)`
  width: 35%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  input::placeholder  {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
  }

  input:focus, button:focus { outline: none; }
  input, button { border-radius: 10px; }

  input:nth-child(1) { background: url(${ClientID}) no-repeat scroll 18px 18px; }
  input:nth-child(2) { background: url(${BotName}) no-repeat scroll 18px 18px; }
  input:nth-child(3) { background: url(${Description}) no-repeat scroll 18px 18px; }
  input:nth-child(4) { background: url(${InviteURL}) no-repeat scroll 18px 18px; }

  input:nth-child(n) {
    background-color: ${Colors.ice};
    padding: 15px 15px 15px 56px;
  }

  input {
    margin-bottom: 30px;
    width: calc(100% - 71px);
    height: 32px;
    display: block;
  }

  button {
    color: white;
    background-color: ${Colors.dark_blue};
    width: 100%;
    display: block;
    padding: 15px;
  }
`;

export { Form };
