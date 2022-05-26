import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Klient from './Klient';
import Samochody from './Samochody';
import Wypozyczenia from './Wypozyczenia';
function App() {
 return (
    <div className="App">
     <Router>
          <Link to='/Klient'>Klient</Link>
          <Link to='/Samochody'>Samochody</Link>
          <Link to='/Wypozyczenia'>Wypożyczenia</Link>
          <Routes>
            <Route path='/'/>
            <Route path='/Klient' element={<Klient />}/>
            <Route path='/Samochody' element={<Samochody />}/>
            <Route path='/Wypozyczenia' element={<Wypozyczenia />}/>
          </Routes>
          </Router>
      </div>
  );
}

export default App;