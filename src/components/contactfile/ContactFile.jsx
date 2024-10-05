import React from 'react'
import './contact.css'
import contact_img from '../../assets/contact_image.png'

export const ContactFile = () => {
  return (
    <div className='contact'>

    <div className="contact-top">
        <h1>Contact Us</h1>
    </div>

    <div className="contact-center">
        <div className="contact-img">
            <img src={contact_img} alt="" />
        </div>
        <div className="contact-content">
            <h4>Our OFFICE</h4>
            <div className="para-1">
            <p>54709 Willms Station </p>
            <p>Suite 350, Washington, USA</p>
            </div>
            <div className="para-2">
            <p>Tel: (415) 555‑0132</p>
            <p>Email: greatstackdev@gmail.com</p>
            </div>
            <h4>Careers at PRESCRIPTO</h4>
            <p>Learn more about our teams and job openings.</p>
            <button className='contact-btn'>Explore more</button>
        </div>
    </div>
   
    </div>
  )
}
