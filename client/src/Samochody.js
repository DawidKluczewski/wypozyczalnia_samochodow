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
function Samochody() {
  return (

<div className='container'>

  <div className='Audi'>
    <img src={Audi} alt="this is car image" />
  </div>
  
  <div className="BMWX7">
            <img src={BMWX7} alt="this is car image" />
          </div>


          <div className="bmwi8">
            <img src={bmwi8} alt="this is car image" />
          </div>

          <div className="ferrariF88">
            <img src={ferrariF88} alt="this is car image" />
          </div>

          <div className='Lambo'>
            <img src={Lambo} alt="this is car image" />
          </div>

          <div className='Mclaren'>
            <img src={Mclaren} alt="this is car image" />
          </div>

          <div className='mercedesG500'>
            <img src={mercedesG500} alt="this is car image" />
          </div>

          <div className='nissanGTR'>
            <img src={nissanGTR} alt="this is car image" />
          </div>

          <div className='rrwraith'>
            <img src={rrwraith} alt="this is car image" />
          </div>

          <div className='Porshe'>
            <img src={Porche} alt="this is car image" />
          </div>


</div>
    

  )
}

export default Samochody