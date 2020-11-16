import React from 'react';
import axios from 'axios';

// Elements (e.g: Components, hooks, images and videos).
import { Form, InputGroup } from './styles';
import Input from './@unform/input';
import Background from '../../../assets/images/background-add-bot.svg';

function AddBotForm() {

  function handleSubmit(data) {
    axios.post('/bots/register', data).then((res) => {
      window.location('/home')
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <img src={Background} alt='teste' />
      </div>

      <InputGroup>
        <span>Client ID</span>
        <Input type='text' name="client_id" required={true} />
      </InputGroup>

      <InputGroup>
        <span>Name</span>
        <Input type='text' name="name" required={true} />
      </InputGroup>

      <InputGroup>
        <span>Description</span>
        <Input type='text' name="description" required={true} />
      </InputGroup>

      <InputGroup>
        <span>Invite URL</span>
        <Input type='url' name="invite_url" required={true} />
      </InputGroup>

      <button type="submit">add bot</button>
    </Form>
  );
}

export default AddBotForm;
