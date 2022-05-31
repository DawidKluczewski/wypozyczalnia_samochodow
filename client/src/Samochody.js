import React from 'react'
import './Samochody.css';
import Audi from "./Audi RS7 2021.png";
import BMWX7 from "./BMW X7 2021.png";
import bmwi8 from "./BMW i8 coupe 2019.png";
import ferrariF88 from "./Ferrari F880 2020.png";
import Lambo from "./Lamborghini Huracan EVO 2020.png";
import Mclaren from "./McLaren P1 2018.png";
import mercedesG500 from "./Mercedes G500 2019.png";
import nissanGTR from "./Nissan GTR 2020.png";
import rrwraith from "./Rolls-Royce Wraith 2022.png";
import Porche from "./Porsche Taycan 2020.png";
import { useNavigate} from "react-router-dom";
function Samochody() {
  let navigate = useNavigate();
  return (

<div className='container'>

  <div className='Audi'>
    <img src={Audi} alt="this is car1 image" />
    <p>Audi RS7</p>
    <button onClick={() => {
      navigate('/Wypozyczenia')
    }} >
      Wypożycz
    </button>
  </div>
  
  <div className="BMWX7">
            <img src={BMWX7} alt="this is car2 image" />
            <p>BMW X7 2021</p>
            button
          </div>


          <div className="bmwi8">
            <img src={bmwi8} alt="this is car3 image" />
            <p>BMW i8 coupe 2019</p>
          </div>

          <div className="ferrariF88">
            <img src={ferrariF88} alt="this is car4 image" />
            <p>FerrariF88</p>
          </div>

          <div className='Lambo'>
            <img src={Lambo} alt="this is car5 image" />
            <p>Lamborghini Huracan EVO 2020</p>
          </div>

          <div className='Mclaren'>
            <img src={Mclaren} alt="this is car6 image" />
            <p>McLaren P1 2018</p>
          </div>

          <div className='mercedesG500'>
            <img src={mercedesG500} alt="this is car7 image" />
            <p>Mercedes G500 2019</p>
          </div>

          <div className='nissanGTR'>
            <img src={nissanGTR} alt="this is car8 image" />
            <p>Nissan GTR 2020</p>
          </div>

          <div className='rrwraith'>
            <img src={rrwraith} alt="this is car9 image" />
            <p>Rolls-Royce Wraith 2022</p>
          </div>

          <div className='Porshe'>
            <img src={Porche} alt="this is car image10" />
            <p>Porsche Taycan 2020</p>
          </div>
         


</div>

  )
}

export default Samochody