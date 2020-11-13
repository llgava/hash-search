import React from 'react';
import axios from 'axios';

// Elements (e.g: Components, hooks, images and videos).
import { Form } from './styles';
import Input from './@unform/input';

function AddBotForm() {
  function handleSubmit(data) {
    axios.post('/bots/register', data).then(() => console.log(data));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input type='text' name="client_id" required={true} placeholder='Client ID' />
      <Input name="name" required={true} placeholder='Bot name' />
      <Input type='text' name="description" required={true} placeholder='Description' />
      <Input type='url' name="invite_url" required={true} placeholder='Invite URL' />

      <button type="submit">add bot</button>
    </Form>
  );
}

export default AddBotForm;
