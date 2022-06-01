import React from 'react'
import logo from "../src/logo6969.png";
import { useNavigate} from "react-router-dom";
function TabelaWypozyczenia() {
  let navigate = useNavigate();
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
          <h2>Aktualne wypożyczenia</h2>
          </div>
    
        </div>

        <button onClick={() => {
      navigate('/Wypozyczenia2')
    }} >
      Wypożycz
    </button>
    </div>

  )
}

export default TabelaWypozyczenia