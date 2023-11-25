import React from 'react'
import './Content.css'

import Image from '../pages/Images/banner.jpg'


const Content = () => {
  return (

    <div className='content_main'>

      <img src={Image} alt="" />

      <div className='content_info'>
        <h1>We create, <br /> you- <br /> celebrate!</h1>
        <p>Order birthday packages from <span>$150 </span> </p>
        <button className='more-btn'>More Services</button>
      </div>
    </div>


  )
}

export default Content