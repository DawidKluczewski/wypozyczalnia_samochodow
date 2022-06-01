import React from 'react'
import logo from "../src/logo6969.png";

function TabelaKlienci() {
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
          <h2>Nasi Klienci:</h2>
          </div>
    
        </div>
    </div>
  )
}

export default TabelaKlienci