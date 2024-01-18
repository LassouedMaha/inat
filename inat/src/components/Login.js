import React from 'react';
import InputField from './InputField';
import Button from './Button';
import './Login.css';
import { FaUser } from 'react-icons/fa';
import { RiLock2Fill } from 'react-icons/ri';
import { TbMinusVertical } from "react-icons/tb";
const Login = () => {
  return (
    <div className="login">
      <div className="titles">
        <h1>INSTITUT NATIONAL AGRONOMIQUE DE TUNISIE</h1>
        <h2>Publiez votre offre de stage et trouvez des candidats de tous horizons.</h2>
      </div>
      <form className="form">
        <h1>Connectez vous</h1>
        <p id="pp">Saisissez votre e-mail et mot de passe</p>
        <div className="input-container">
          <FaUser id="user" />
            
          <InputField type="email" placeholder="Entrer ton adresse email" id="email" icon={FaUser} />
        </div>
        <div className="input-container">
          <RiLock2Fill id="lock" />
        
          <InputField type="password" placeholder="Mot de passe" id="pwd" icon={RiLock2Fill} />
        </div>
        <Button text="Se connecter" id="butt" />
      </form>
    </div>
  );
};

export default Login;
