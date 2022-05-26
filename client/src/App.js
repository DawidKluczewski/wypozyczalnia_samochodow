import React, {useState} from 'react';
import './App.css';
import Axios from "axios";

function App() {

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

  return (
    <div className="App">
      <h1>Wypożyczalnia Samochodów</h1>
      <h2>Rejestracja</h2>

      <div className='form'>

      <label>Imie:</label>
      <input type="text" name="imie" onChange={(e)=> {
setImie(e.target.value)
}}/>
      <label>Nazwisko:</label>
      <input type="text" name="nazwisko" onChange={(e)=> {
setNazwisko(e.target.value)
}}/>
      <label>Pesel:</label>
      <input type="text" name="pesel" onChange={(e)=> {
setPesel(e.target.value)
}}/>
      <label>Miejsce zamieszkania:</label>
      <input type="text" name="miejsce_zamieszkania" onChange={(e)=> {
setMiejsce_zamieszkania(e.target.value)
}}/>
      <label>Numer telefonu:</label>
      <input type="text" name="numer_telefonu" onChange={(e)=> {
setNumer_telefonu(e.target.value)
}}/>

      <button onClick={submitKlient}>Wyślij</button>

      </div>
    </div>
  );
}

export default App;
