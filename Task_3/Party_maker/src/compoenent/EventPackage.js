import React from 'react'

import './EventPackage.css'
import { Packages } from '../Data'


import { IoArrowForwardCircleOutline } from 'react-icons/io5'

import Card from '../UI/Card'

const EventPackage = () => {
    return (
        <div className='Evt_main'>

            <section className='Evt_box'>

                <div className='Evt_heading'>
                    <span>Choose your holiday</span>
                    <h1>Our Events Packages</h1>
                </div>

                <article className='Evt_cards'>
                    {
                        Packages.map(({ id, title, time, price, range, decoration, catering }) => {

                            let text = title.split(' ')
                            let text1 = text[0]
                            let text2 = text[1]
                            return (

                                <Card className="Evt_card" key={id}>


                                    <div className='card_title'>
                                        <h1>{text1} </h1>
                                        <h1>{text2} </h1>
                                        <p>From<span className='card_price'> {price}</span></p>

                                    </div>

                                    <div className='Evtcard_info'>
                                        <ul>
                                            <li>{time}</li>
                                            <li>{range}</li>
                                            <li>{decoration}</li>
                                            <li>{catering}</li>
                                        </ul>
                                    </div>

                                    <button className='Evt_btn'><IoArrowForwardCircleOutline /></button>



                                </Card>


                            )

                        })



                    }
                </article>
            </section>


        </div>
    )
}

export default EventPackage