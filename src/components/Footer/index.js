import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './index.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo-container'>
        <img src="https://res.cloudinary.com/dky69roxl/image/upload/v1703228793/Frame_275_prt51x.png"
          alt="website logo"
          className='footer-logo'
        />
        <span className='footer-logo-text'>Tasty Kitchens</span>
      </div>
      <div className='footer-description-container'>
        <p className='description'>The only thing we are serious about is food. Contact us on</p>
      </div>
      <div className='social-container'>
        <FaInstagram className='social-icons'
          style={{ color: "#fff", width: "30px", height: "30px", marginRight: "20px" }} />
        <FaTwitter className='social-icons'
          style={{ color: "#fff", width: "30px", height: "30px", marginRight: "20px" }} />
        <FaSquareFacebook className='social-icons'
          style={{ color: "#fff", width: "30px", height: "30px", marginRight: "20px" }} />
      </div>
    </div>
  )
}

export default Footer
