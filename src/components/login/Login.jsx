import React from 'react'
import './login.css'

export const Login = () => {
  return (
    <div className='login'>
     
    <div className="login-box">
        <div className="login-top">
            <h3>Create account</h3>
            <p>Please sign up to book appointment</p>
        </div>
        <div className="labels">
        <div className="label">
        <label htmlFor="">Full Name</label>
        <input type="Name" />
        </div>
        <div className="label">
        <label htmlFor="">Email</label>
        <input type="Email" />
        </div>
        <div className="label">
        <label htmlFor="">Password </label>
        <input type="Password" />
        </div>
        <button className='login-btn'>Create account</button>
        <p className='login-para'>Already have an account? <span>Login here</span></p>
        </div>
    </div>

    </div>
  )
}
