import React from 'react'
import './Header.css'
import Image from '../Images/background.jpg'
const Header = () => {
  return (
    <main className='Homepage'>
        <div className="col"><img src={Image} alt="" /></div>

        <div className='contents'>
          <h1>Bring your childs <br /> dream Event to life</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit  <br /> amet consectetur adipisicing elit. Nostrum expedita soluta sit, cum ab sint unde? Laboriosam repudiandae explicabo vitae.</p>
       
          <button className='sub_btn'>Subscribe Now</button>
          </div>

      </main>
  )
}

export default Header