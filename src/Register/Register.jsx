import React from 'react'
import "./Register.css"

const Register = () => {
  return (
    <div className='Register'>
      <div className='register'>
      <h1 className='register-txt'>REGISTER</h1>
        <h6 className='register-p'>Please fill in the information below:</h6>
        <div className='register-box'>
            <input type="text" placeholder='First name' className='input-register'/>
            <input type="text" placeholder='Last name' className='input-register'/>
            <input type="text" placeholder='Email' className='input-register'/>
            <input type="text" placeholder='Password' className='input-register'/>
            <button className='btn-register'>CREATE MY ACCOUNT</button>
        </div>
      </div>
    </div>
  )
}

export default Register