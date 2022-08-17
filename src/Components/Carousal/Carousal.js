import React from 'react'
import "./Carousal.css";

const Carousal = () => {
  return (
    <div>
        <div className='caro col-10'>
        <div className="pics-ctn container ">
          <img src="https://www.myvi.in/content/dam/vodafoneideadigital/homepage/banner-with-text-slider/sim-delivery-banner.png" alt=""  height="250px" width="100%"  />
          <img src="https://www.myvi.in/content/dam/vodafoneideadigital/homepage/banner-with-text-slider/Apna-banner-mobile.png" alt="" height="250px"  width="100%" />
          <img src="https://www.myvi.in/content/dam/vodafoneideadigital/homepage/banner-with-text-slider/Games-Desktop.png" alt="" height="250px"  width="100%"  />
          <img src="https://www.myvi.in/content/dam/vodafoneideadigital/homepage/banner-with-text-slider/Apna-banner-mobile.png" alt="" height="250px"  width="100%"  />
        </div>
        </div>
    </div>
  )
}

export default Carousal