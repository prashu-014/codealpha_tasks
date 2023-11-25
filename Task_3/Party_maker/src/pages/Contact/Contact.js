import React from 'react'
import './Contact.css'
import InputControl from '../../UI/InputControl'
function Contact() {
  return (
    <div className="contact_main">
    <div className="contact_form">

    <h1>Contact Us</h1>
    
      <InputControl  label="Nmae"/>
      <InputControl  label="Phone No."/>

      <textarea name="" id="" cols="30" rows="10" placeholder="Enter Messsage"></textarea>
    
    <button className='submitBtn'>Submit</button>

    </div>
    
    </div>
  )
}

export default Contact