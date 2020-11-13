import React, { useEffect } from 'react';
import { useField } from '@unform/core';

function Input({ name }) {
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {

  }, []);

  return(
    <>
      <input />
    </>
  );
}

export default Input;
