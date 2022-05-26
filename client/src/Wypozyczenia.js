import React, {useState} from 'react';
import './App.css';
import Axios from "axios";
import logo from "../src/logo6969.png";

function Wypozyczenia() {
    const [cena, setCena] = useState('')
    const [data_wypozyczenia, setData_wypozyczenia] = useState('')
    const [data_zwrotu, setData_zwrotu] = useState('')
    const [okres_wypozyczenia, setOkres_wypozyczenia] = useState('')

    const submitWypozyczenia = () => {
      Axios.post("http://localhost:8002/api/insert1", {
        cena: cena, 
        data_wypozyczenia: data_wypozyczenia,
        data_zwrotu: data_zwrotu, 
        okres_wypozyczenia: okres_wypozyczenia,
    }).then(() => {
      alert("Udało się");
      });
    };

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
          <h2>Wypożyczenie</h2>
          </div>
    
        </div>
    
          <div className='form'>

          <label className='imion'>Cena:</label>
          <input type="text" className='imie' name="cena" onChange={(e)=> {
    setCena(e.target.value)
    
    }}/>
  
          <label className='nazwisken'>Data wypożyczenia:</label>
          <input type="text" className="nazwisko" name="data_wypozyczenia" onChange={(e)=> {
    setData_wypozyczenia(e.target.value)
    }}/>
    
          <label className='peselito'>Data zwrotu:</label>
          <input type="number" className='pesel' name="data_zwrotu" onChange={(e)=> {
    setData_zwrotu(e.target.value)
    }}/>
    
          <label className='miejsce'>Okres wypożyczenia:</label>
          <input type="text" className='miejsce_zamieszkania' name="okres_wypozyczenia"  onChange={(e)=> {
    setOkres_wypozyczenia(e.target.value)
    }}/>
    
          <button onClick={submitWypozyczenia}>Wyślij</button>
    
          </div>
        </div>
    
      );
    }
    
    export default Wypozyczenia;