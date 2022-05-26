import React, {useState} from 'react';
import './App.css';
import Axios from "axios";

function App() {

  const [imie, setImie] = useState('')
  const [nazwisko, setNazwisko] = useState('')

  const submitKlient = () => {
    Axios.post("http://localhost:8002/api/insert", {
      imie: imie, 
      nazwisko: nazwisko,
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

      <button onClick={submitKlient}>Wyślij</button>
      </div>
    </div>
  );
}

export default App;
