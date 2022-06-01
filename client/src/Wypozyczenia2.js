import React, {useState} from 'react';
import './App.css';
import Axios from "axios";
import logo from "../src/logo6969.png";

function Wypozyczenia2() {
  return (
    <div className="klient">
        <div className='srodek'>
    
          <div className='logo'>
            <img src={logo} alt="this is car image" />
          </div>
    
          <div className='tekst'> 
            <h1>WYPOŻYCZALNIA SAMOCHODÓW</h1>
          </div>
          <div className='tekst2'>
          <h2>Edytuj swoje wypożyczenie</h2>
          </div>
    
        </div>
        </div>
  )
}

export default Wypozyczenia2