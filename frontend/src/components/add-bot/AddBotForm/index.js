import React from 'react';
import axios from 'axios';
import { Form } from '@unform/web';

// Elements (e.g: Components, hooks, images and videos).
import { Container } from './styles';
import Input from './@unform/input';

function AddBotForm() {
  function handleSubmit(data) {
    axios.post('/bots/register', data).then(() => console.log(data));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input type='text' name="client_id" />
        <Input type='text' name="name" />
        <Input type='text' name="description" />
        <Input type='url' name="invite_url" />

        <button type="submit">Send</button>
      </Form>
    </Container>
  );
}

export default AddBotForm;
