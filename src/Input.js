import React from 'react';
import TextField from 'material-ui/TextField';
const Input = ({input, name, type, placeholder}) => (
    <TextField
        {...input}
        name={name}
        type={type}
        placeholder={placeholder}
    />
);

export default Input;