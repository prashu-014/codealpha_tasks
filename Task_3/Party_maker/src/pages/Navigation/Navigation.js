import React, { useState } from 'react'
import './Navigation.css'
import { Link, NavLink, Navigate,useNavigate } from 'react-router-dom'

import { links } from '../../Data'
import { CiMenuBurger } from 'react-icons/ci'
import { IoCloseOutline } from "react-icons/io5";

import Login from '../Login/Login'








function Navigation(props) {

  const Navigates = useNavigate()

  const [isNavShowing, setNavShowing] = useState(false);
  return (
    <nav>
      <div className='container'>
        <div>
          <button className='menuIcon' onClick={()=> setNavShowing(prev=>!prev)} >
          {
            isNavShowing ? <IoCloseOutline />: <CiMenuBurger /> 
          }
          </button>
          <Link className="logo" to="/" onClick={()=> setNavShowing(false)}>
            <img src="" alt="logo" />
          </Link>
        </div>



        <ul className={`nav_links ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>
        {
          links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink to={path} className={({ isActive }) => isActive ? 'active-nav' : ''} onClick={()=> setNavShowing(prev=>!prev)}>{name}</NavLink>
              </li>
            )
          })
        }
      </ul>


      <button className='loginBtn' onClick={()=> Navigates("login")}>{props.button}</button>





    </div>
    </nav >
  )
}

export default Navigation