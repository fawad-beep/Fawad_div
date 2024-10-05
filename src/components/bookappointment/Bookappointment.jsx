import React from 'react'
import './bookappointment.css'
import img from '../../assets/appointment_img.png'


export const Bookappointment = () => {
  return (
    <div className='book'>
        <div className="book-content">
            <div className="left">
            <h1>Book Appointment <br />
            With 100+ Trusted Doctors</h1>
            <button className='book-btn'>Create account</button>
            </div>
            <div className="img-section">
        <img src={img} alt="" />

            </div>
        </div>
    </div>
  )
}
