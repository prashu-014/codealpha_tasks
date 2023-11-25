import React from 'react'

import "./Login.css"
import InputControl from '../../UI/InputControl'

const Login = () => {
  return (
   <div className="login_container">
   
   <div className="login_wrapper">
   <h1>Login Form</h1>

   <InputControl label="Email" placeholder="Enter name"  />
   <InputControl label="Password" placeholder="Enter password"  />

   <br />
   <button className='loginBTN'>Login</button>

 
   <span>Already have account <a href="/SignUp">Click</a></span>


   
   
   </div>
   
   </div>
  )
}



export default Login