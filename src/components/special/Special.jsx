import React from 'react'
import './special.css'
import first from '../../assets/1.svg'
import second from '../../assets/2.svg'
import third from '../../assets/3.svg'
import fourth from '../../assets/4.svg'
import fiveth from '../../assets/5.svg'
import sixth from '../../assets/6.svg'

export const Special = () => {
  return (
    <div className='special'>
        <div className="special-top">
            <h1>Find By Speciality</h1>
            <p>Simply browse through our extensive list of trusted doctors, schedule <br /> your appointment hassle-free</p>
        </div>

    <div className="works">

    <div className="image">
    <img src={first} alt="" />
    <p>General physician</p>
    </div>
    <div className="image">
    <img src={second} alt="" />
    <p>Gynecologist</p>
    </div>
    <div className="image">
    <img src={third} alt="" />
    <p>Dermatologist</p>
    </div>
    <div className="image">
    <img src={fourth} alt="" />
    <p>Pediatricians</p>
    </div>
    <div className="image">
    <img src={fiveth} alt="" />
    <p>Neurologist</p>
    </div>
    <div className="image">
    <img src={sixth} alt="" />
    <p>Gastroenterologist</p>
    </div>

   
   

    </div>

    </div>
  )
}
