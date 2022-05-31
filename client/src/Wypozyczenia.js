import React, {useState} from 'react';
import './App.css';
import Axios from "axios";
import logo from "../src/logo6969.png";

function Wypozyczenia() {
    const [cena, setCena] = useState('')
    const [data_wypozyczenia, setData_wypozyczenia] = useState('')
    const [data_zwrotu, setData_zwrotu] = useState('')
    const [okres_wypozyczenia, setOkres_wypozyczenia] = useState('')
    const [text, setText] = useState('')
    const mnoznik = document.getElementById('okres_wypozyczenia')

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

    const handleSubmit = (event) => {
      event.preventDefault();
      setText(event.target[0].value * mnoznik.value);
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
    
        <form onSubmit={handleSubmit} className="form">

          <label className='imion'>Cena za dzień:</label>
          <input type="number" className='imie' name="cena" value = "1000" onChange={(e)=> {
    setCena(e.target.value)
    
    }}/>
  
          <label className='nazwisken'>Data wypożyczenia:</label>
          <input type="date" className="nazwisko" name="data_wypozyczenia" onChange={(e)=> {
    setData_wypozyczenia(e.target.value)
    }}/>
    
          <label className='peselito'>Data zwrotu:</label>
          <input type="date" className='pesel' name="data_zwrotu" onChange={(e)=> {
    setData_zwrotu(e.target.value)
    }}/>
    
          <label className='miejsce'>Okres wypożyczenia:</label>
          <input type="text" className='miejsce_zamieszkania' name="okres_wypozyczenia" id="okres_wypozyczenia" onChange={(e)=> {
    setOkres_wypozyczenia(e.target.value)
    }}/>

      <button>Pokaż ostateczną cenę:</button>

    <h3>{text}</h3>

    <button onClick={submitWypozyczenia}>Wypożycz swój samochód</button>

    
    </form>
    </div>
        
    
      );
    }
    
    export default Wypozyczenia;