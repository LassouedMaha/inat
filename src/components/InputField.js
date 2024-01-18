import React from 'react';
import './InputField.css';

const InputField = ({ type, placeholder,className, icon:Icon ,onChange }) => {
  return (
    <div className="input">

      <input type={type} id={`input-${type}`} placeholder={placeholder} className={className} icon={Icon} onChange={onChange}/>
    </div>
  );
};

export default InputField;
