import React from 'react';
import { Form } from '@unform/web';

// Elements (e.g: Components, hooks, images and videos).
import { Container } from './styles';
import Input from './@unform/input';

function BotList() {
  return (
    <Container>
      <Form>
        <Input name="client_id" />
      </Form>
    </Container>
  );
}

export default BotList;
