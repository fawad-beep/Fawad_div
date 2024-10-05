import React, { useState } from 'react'
import "./navbar.css"
import admin_logo from "..//..//assets/admin_logo.svg"
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {

  const navigate = useNavigate()

  const [showMenue ,setShowMenue] = useState(false)
  const handle = ()=>{
    setShowMenue(!showMenue)
   
  }


  return (
    <div className='navbar'>
    
        <img src={admin_logo} alt=""  className='navbar-img'/>
        <ul>
            <li><a href='/' className='active'>Home</a></li>
            <li><a href='/alldocters'>All-docters</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/contact'>Contact</a></li>
        </ul>
        <button  onClick={()=>navigate('/loginpage')}>Create account</button>
  
  
    <div className={`burger ${showMenue ? "" :""}`} onClick={handle}>
      <div className="menue"></div>
      <div className="menue"></div>
      <div className="menue"></div>
    </div>

    <div className={`show-height ${showMenue ? "for-show-height" : ""}`}>

      <div className="show-height-top">
         <img src={admin_logo} alt="" />
      </div>


      <div className="order-list">
            <li><a href='/'>Home</a></li>
            <li><a href='/alldocters'>All-docters</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/contact'>Contact</a></li>
            </div>


    </div>

    </div>
  )
}
