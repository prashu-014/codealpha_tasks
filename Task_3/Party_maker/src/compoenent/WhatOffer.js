import React from 'react'

import girl from '../pages/Images/girl.jpg'



import { Services } from '../Data'
import Card from '../UI/Card'

import './WhatOffer.css'
const WhatOffer = () => {
  return (
    <div className='service_container'>

      <section className='serviceBox_left'>


      <div><h1>What we offer</h1></div>

     

        <div className="ser_cards">
          {
            Services.map(({ id, icon, title }) => {
              return (

                <Card className="ser_card" key={id}>
                  <div>
                    <img src={icon} alt="" />
                  </div>
                  <span>{title}</span>





                </Card>
              )
            })


          }
        </div>

       



      </section>
      <section className='serviceBox_right'>

      <img src={girl} alt="" />


      </section>




    </div>
  )
}

export default WhatOffer