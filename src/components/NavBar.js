import React from 'react';
import './NavBar.css';
import logo from '../images/logo.png'
import { FaCircleUser } from "react-icons/fa6"; 
const NavBar = () => {
  return (
      <nav className='navbar '>
        <img src={logo} alt='logo'/>
        <div className='haute-gauche'>
            <div className='rect'>
              <p id="date">Depuis 1898</p>
            </div>
        <h1>INSTITUT NATIONAL  AGRONOMIQUE DE TUNISIE</h1>
        <h2>UN PÔLE D’EXCELLENCE</h2>
        </div>
        <div className='haute-droit'>
          <FaCircleUser className='iconinscri' />
          <a href="a">inscription</a>
        </div>
    </nav>);
  
};

export default NavBar;