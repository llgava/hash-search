import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

function Input({ name, required, placeholder, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField]);

  return (
    <input ref={inputRef} required={required} placeholder={placeholder} {...rest} />
  );
}

export default Input;
