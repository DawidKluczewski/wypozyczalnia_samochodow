import React, {useState} from 'react';
import './App.css';
import Axios from "axios";
import logo from "../src/logo6969.png";
import { useNavigate} from "react-router-dom";


function Klient() {
    const [imie, setImie] = useState('')
    const [nazwisko, setNazwisko] = useState('')
    const [pesel, setPesel] = useState('')
    const [miejsce_zamieszkania, setMiejsce_zamieszkania] = useState('')
    const [numer_telefonu, setNumer_telefonu] = useState('')

    const submitKlient = () => {
      Axios.post("http://localhost:8002/api/insert", {
        imie: imie, 
        nazwisko: nazwisko,
        pesel: pesel, 
        miejsce_zamieszkania: miejsce_zamieszkania,
        numer_telefonu: numer_telefonu, 
    }).then(() => {
      alert("Udało się");
      });
    };
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
          <h2>Rejestracja</h2>
          </div>
    
        </div>
    
    
    
    
    
    
    
          <div className='form'>
    
    
          <label className='imion'>Imie:</label>
          <input type="text" className='imie' name="imie" onChange={(e)=> {
    setImie(e.target.value)
    
    }}/>
     
    
    
          <label className='nazwisken'>Nazwisko:</label>
          <input type="text" className="nazwisko" name="nazwisko" onChange={(e)=> {
    setNazwisko(e.target.value)
    }}/>
    
    
          <label className='peselito'>Pesel:</label>
          <input type="number" className='pesel' name="pesel" onChange={(e)=> {
    setPesel(e.target.value)
    }}/>
    
    
          <label className='miejsce'>Miejsce zamieszkania:</label>
          <input type="text" className='miejsce_zamieszkania' name="miejsce_zamieszkania"  onChange={(e)=> {
    setMiejsce_zamieszkania(e.target.value)
    }}/>
    
    
          <label className='numer'>Numer telefonu:</label>
          <input type="text" className='numer_telefonu' name="numer_telefonu" onChange={(e)=> {
    setNumer_telefonu(e.target.value)
    }}/>
    
    
    
          <button className='button1' onClick={submitKlient}>WYŚLIJ</button>
          <button className='button2' onClick={()=>{navigate('/Samochody')}}>Dalej</button>
    
          </div>
          
        </div>
    
      );
    }
    
    export default Klient;