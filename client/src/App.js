import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Klient from './Klient';
import Samochody from './Samochody';
import Wypozyczenia from './Wypozyczenia';
import TabelaKlienci from './TabelaKlienci';
import TabelaWypozyczenia from './TabelaWypozyczenia';
import Wypozyczenia2 from './Wypozyczenia2';
import './App2.css';
function App() {
 return (
    <div className="App">
     <Router>
          <Link to='/Klient' className='linki'>Klient</Link>
          <Link to='/Samochody' className='linki'>Samochody</Link>
          <Link to='/Wypozyczenia' className='linki'>Wypożyczenia</Link>
          <Link to='/TabelaWypozyczenia' className='linki'>Aktualne Wypozyczenia</Link>
          <Link to='/TabelaKlienci' className='linki'>Nasi Klienci</Link>
          <Routes>
            <Route path='/'/>
            <Route path='/Klient'  element={<Klient />}/>
            <Route path='/Samochody' element={<Samochody />}/>
            <Route path='/Wypozyczenia' element={<Wypozyczenia />}/>
            <Route path='/TabelaWypozyczenia' element={<TabelaWypozyczenia/>}/>
            <Route path='/TabelaKlienci' element={<TabelaKlienci/>}/>
            <Route path='/Wypozyczenia2' element={<Wypozyczenia2/>}/>
          </Routes>
          </Router>
      </div>
  );
}

export default App;