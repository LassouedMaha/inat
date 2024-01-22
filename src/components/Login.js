import React, { useState } from 'react';
import supabase from './supabaseClient';
import InputField from './InputField';
import Button from './Button';
import './Login.css';
import { FaUser } from 'react-icons/fa';
import { RiLock2Fill } from 'react-icons/ri';

const Login = () => {
  var user;
  var session;
  const [FormData,setFormData]=useState({email:'',password:''})
  
  const handleChange=(event)=> {
  const { name, value } = event.target;
  setFormData((prevFormData) =>( {
      ...prevFormData,
      [name]: value,
  }));
};
  const handleSubmit= async(e)=> {
    e.preventDefault();
   
    const { data, error } = await supabase.auth.signInWithPassword({ 
      email:FormData.email,
      password:FormData.password });
      if (error) {
        alert('cant login ' + error.message);
    }
    else
      if(data.user) {
        user = data.user;
        session = data.session;
        console.log(user);
        console.log(session);
        supabase.from(FormData.userType).select().eq('id', user.id)
        .then((data) => {
            console.log(data);

            if (error) {
                alert("please check your role ");
            } else {

                localStorage.setItem("user", user);
            }

        })

}
  }     
  return (
    <div className="login">
      <div className="titles">
        <h1>INSTITUT NATIONAL AGRONOMIQUE DE TUNISIE</h1>
        <h2>Publiez votre offre de stage et trouvez des candidats de tous horizons.</h2>
      </div>
      <form className="form" onSubmit={handleSubmit} method='POST' >
        <h1>Connectez vous</h1>
        <p id="pp">Saisissez votre e-mail et mot de passe</p>
        <div className="input-container">
          <FaUser id="user" />
          <InputField
            type="email"
            placeholder="Entrer ton adresse email"
            id="email" 
            name="email"
            className='email'
            value={FormData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <RiLock2Fill id="lock" />
          <InputField
            type="password"
            placeholder="Mot de passe"
            id="pwd"
            name="password"
            className='pwd'
            value={FormData.password}
            onChange={handleChange}
          />
        </div>
        <Button text="Se connecter" id="butt" />
      </form>
    </div>
  );
} 
export default Login;