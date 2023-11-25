import React from 'react'

import Card from '../UI/Card'

import { Programs} from '../Data'

import { Route,Router,useNavigate } from 'react-router-dom'

import './Program.css'
const program = () => {
  return (

    

    <div className='container_service'>

      <div className='card_heading'>
      <h1>Awesome Serices</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, omnis!</p>
      </div>
      <div className='card_content'>
        {
          Programs.map(({id,name,img,information}) => 
          {
           return(

            <Card className="programs_program" key={id}>

            <div className="card_img">
            <img src={img} alt="" /></div>
            <div className='card_info'>
            <span>{name}</span>
            <p>{information}</p>
            </div>

            <button className='BookNow_btn'>Book Now</button>
           
            
            
            </Card>
           )
          })
         
         
        }

      </div>

    </div>
  )
}

export default program