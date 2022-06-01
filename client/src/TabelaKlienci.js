import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from "axios";
import logo from "../src/logo6969.png";

function TabelaKlienci() {

    const [imie, setImie] = useState('')
    const [nazwisko, setNazwisko] = useState('')
    const [KlienciList, setKlienciList] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:8002/api/get").then((response) => {
            setKlienciList(response.data)
        });
    },
    []);

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
          <table>
        <tr>
            <th>Imie</th> 
         </tr>
         <tr>
            <th>Nazwisko</th>
         </tr>
              
            </table>
    
    <div className='divek'>
        
    {KlienciList.map((val) => {
        return (
        <div>
        <table>
        <tr>
            <td>{val.imie}</td>
         </tr>
         <tr>
             <td>{val.nazwisko}</td>
         </tr>
              
            </table>
            </div>
            
        )
    })}
    </div>
        </div>
    </div>
  )
}

export default TabelaKlienci