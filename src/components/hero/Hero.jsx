import React from 'react'
import './hero.css'
import header_img from '../../assets/header_img.png'
import group_img from '../../assets/group_profiles.png'
import { useNavigate } from 'react-router-dom'

export const Hero = () => {

  const navigate = useNavigate()

  return (
    <div className='hero'>
      <div className='left'>
        <h1>Book appointment <br /> With trusted docters</h1>

      <div className="para">
    <img src={group_img} alt=""  className='group-img'/>
      <p>Simply browse through our extensive list of trusted doctors, 
    schedule your appointment hassle-free.</p>
        </div> 

       <button onClick={()=>navigate('/Details')} className='btn'>Book appointment <i class="fa-solid fa-arrow-right"></i></button>

      </div>

        <img src={header_img} alt="" className='header-img'/>
        
    </div>
  )
}
