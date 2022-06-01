import React, {useState, useEffect} from 'react';
import logo from "../src/logo6969.png";
import { useNavigate} from "react-router-dom";
import './App.css';
import Axios from "axios";

function TabelaWypozyczenia() {

    const [cena, setCena] = useState('')
    const [data_wypozyczenia, setData_wypozyczenia] = useState('')
    const [data_zwrotu, setData_zwrotu] = useState('')
    const [okres_wypozyczenia, setOkres_wypozyczenia] = useState('')
    const [WypozyczeniaList, setWypozyczeniaList] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:8002/api/get1").then((response) => {
            setWypozyczeniaList(response.data)
        });
    },
    []);

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
          <h2>Aktualne Wypożyczenia:</h2>
          </div>
    
        </div>

    <div className='divek'>

       <table> 
           <tr><th>Cena</th><th>Data Wypożyczenia</th><th>Data Zwrotu</th><th>Okres Wypożyczenia</th></tr>
    {WypozyczeniaList.map((val) => {
        return (
        <tr>
            <td>{val.cena}</td>
         
            <td>{val.data_wypozyczenia}</td>

            <td>{val.data_zwrotu}</td>

            <td>{val.okres_wypozyczenia}</td>
         </tr>
              
        )
    })}
    </table>

    
    </div>
    <button className="buttonik" onClick={() => {
      navigate('/Wypozyczenia2')
    }} >
      Edytuj swoje wypożyczenie
    </button>

    </div>

  )
}

export default TabelaWypozyczenia