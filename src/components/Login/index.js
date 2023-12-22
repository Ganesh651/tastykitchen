import React from 'react'
import './index.css'

const Login = () => {
  return (
    <div className='login-page'>
      <div className='login-container'>
        <form className='login-form'>
          <div className='website-logo-container'>
            <img src="https://res.cloudinary.com/dky69roxl/image/upload/v1692778547/Frame_274_ptjrpu.svg"
              alt="website logo" />
            <span className='website-name'>Tasty Kitchen</span>
          </div>
        </form>
      </div>
      <div className='login-image-container'>
        <img src="https://res.cloudinary.com/dky69roxl/image/upload/v1692778340/Rectangle_1456_1_bfg4jn.png"
          alt="website login" />
      </div>
    </div>
  )
}

export default Login
