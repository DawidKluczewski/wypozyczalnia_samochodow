import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Klient from './Klient';
import Samochody from './Samochody';
import Wypozyczenia from './Wypozyczenia';
import './App2.css';
function App() {
 return (
    <div className="App">
     <Router>
          <Link to='/Klient' className='klient'>Klient</Link>
          <Link to='/Samochody' className='samochody'>Samochody</Link>
          <Link to='/Wypozyczenia' className='wypozyczenia'>Wypożyczenia</Link>
          <Routes>
            <Route path='/'/>
            <Route path='/Klient'  element={<Klient />}/>
            <Route path='/Samochody' element={<Samochody />}/>
            <Route path='/Wypozyczenia' element={<Wypozyczenia />}/>
          </Routes>
          </Router>
      </div>
  );
}

export default App;