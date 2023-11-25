import React from 'react'
import './View.css'
import InputControl from '../../UI/InputControl'

import Calender from '../Images/CalenderImg.png'







function View() {
  return (
    <div className="calender_main">
    
    <div className="calender_wrapper">

    <div className="celender">

    <img src={Calender} alt="" />




  
    
   
    
    
    </div>
    <div className="celender_right">
    
    <h1>Book Plan</h1>
    <InputControl label="Name" placeholder="Enter Name" />
    <InputControl label="Phone No." placeholder="Enter Phone number" />
    <InputControl label="E-mail" placeholder="Enter gmail" />

    <input type="Date" />


    <select name="Program" id="">

    <option value="Select ">Select</option>
    <option value="Birthday Parties">Birthday Parties</option>
    <option value="Family Celebrations ">Family Celebrations</option>
    <option value="Weddings Celebrations">Weddings Celebrations</option>
    <option value="Indoor Parties">Indoor Parties</option>

  
    

    </select>
<br />
    <button className='bookNowBtn'>Book Now</button>

    <hr />
    </div>
    </div>
    
    </div>
  )
}

export default View