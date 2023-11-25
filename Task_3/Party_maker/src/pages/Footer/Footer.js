import React from 'react'

import { CiFacebook, CiInstagram, CiYoutube} from 'react-icons/ci'

import './Footer.css'

const Footer = () => {
    return (
        <footer>

            <div className="footer_container">

                <div className="footer_item">
                    <h1>Party maker</h1>
                    <span>Lets fun together</span>

                    <div>
                    <span><CiFacebook/></span>
                    <span>{CiInstagram}</span>
                    <span>{CiYoutube}</span>
                   
                    
                    </div>

                </div>

                <div className="footer_item">

                <h2>Get in touch</h2>
                <br />
                    <ul>
                        <li>cemanjd wankjf no 20,fvfvkk</li>
                        <li>PartyMaker@gmail.com</li>
                        <li>+913522555</li>
                        
                    </ul>

                </div>

                <div className="footer_item">
                    <h2>Newsletter</h2>
                    <br />
                    <p>Signup for our newletter to get updated information,insight or promotions</p>

                    <br />
                    <input type="text" className='footer_email' placeholder='Email' />
                    <br />
                    <button className='footer_signup'>Sign Up</button>

                </div>

               

            </div>

        </footer>
    )
}

export default Footer