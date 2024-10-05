import React from 'react'
import './about.css'
import about_img from '../../assets/about_image.png'

export const Aboutfile = () => {
  return (
    <div className='about'>
        <div className="about-top">
            <h2>ABOUT US</h2>
        </div>

    <div className="flex-container">
      <img src={about_img} alt="" />

    <div className="about-para">
      <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health record</p>
      <p className='p-2'>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
      <h4>Our Vision</h4>
      <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
    </div>

    </div>

    </div>
  )
}
