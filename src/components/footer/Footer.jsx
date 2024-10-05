import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-content">
        <div className="footer-top">
            <div className="img">
            <img src={logo} alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        <div className="company">
            <h4>COMPANY</h4>
            <div className="company-para">
            <p>Home</p>
            <p>About us</p>
            <p>Contact us</p>
            <p>Privacy Policy</p>
            </div>
        </div>
        <div className="gmail">
            <h4>GET IN TOUCH</h4>
            <div className="gmail-para">
                <p>+92 025-584759</p>
                <p>Fawadkhan@gmail.com</p>
            </div>
        </div>
        </div>
    <hr />
        <div className="last-para">
            <p>Copyright © 2024 GreatStack - All Right Reserved.</p>
        </div>
        </div>
    </div>
  )
}
