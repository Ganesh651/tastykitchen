import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

const Payment = () => {
  const navigate = useNavigate()

  const goToHomePage = () => {
    navigate("/")
  }

  return (
    <div className='notfound-container'>
      <img
        src="https://res.cloudinary.com/dky69roxl/image/upload/v1703321194/check-circle.1_1_hec5o2.svg"
        alt="success icon"
        className='success-icon'
      />
      <h2 className='notfound-headng'>Payment Successful</h2>
      <pre className='payment-description'>
        Thank you for ordering
        Your payment is successfully completed.
      </pre>
      <div className='button-container'>
        <button type="button" className='home-page-button' onClick={goToHomePage}>
          Go to Home page
        </button>
      </div>
    </div>
  )
}

export default Payment
