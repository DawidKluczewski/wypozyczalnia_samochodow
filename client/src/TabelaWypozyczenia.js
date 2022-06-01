import React, {useState, useEffect} from 'react';
import logo from "../src/logo6969.png";
import './App.css';
import Axios from "axios";

function TabelaWypozyczenia() {
    const [WypozyczeniaList, setWypozyczeniaList] = useState([])
    const [noweDni, setNoweDni]=useState('');

    const delteReview = (cen) =>{
      Axios.delete(`http://localhost:8002/api/delete/${cen}`);
    };

    const updateReview = (cen) =>{
      Axios.put("http://localhost:8002/api/update", {
        cena : cen, 
        okres_wypozyczenia: noweDni,
      });
      setNoweDni("")
    };

    useEffect(() => {
        Axios.get("http://localhost:8002/api/get1").then((response) => {
            setWypozyczeniaList(response.data)
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
            <td>  <button onClick={() =>{delteReview(val.cena)}}>Usuń wypożyczenie</button></td>
            <td><input type="number" onChange={(e)=>{
              setNoweDni(e.target.value)
            }}/></td>
            <td><button onClick={() =>{updateReview(val.cena)
            }}>Update</button></td>
         </tr>
              
        )
    })}
    </table>
    </div>
    </div>

  )
}

export default TabelaWypozyczenia