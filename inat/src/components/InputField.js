import React from 'react';
import './InputField.css';

const InputField = ({ type, placeholder, icon: Icon }) => {
  return (
    <div className="input">

      <input type={type} id={`input-${type}`} placeholder={placeholder} />
    </div>
  );
};

export default InputField;
