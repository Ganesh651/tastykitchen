import React from 'react'
import Cookies from 'js-cookie'
import Slider from "react-slick";
import { offersurl } from '../urls'
import useFetch from '../useFetch'
import './index.css'

const Offers = () => {
  const token = Cookies.get("jwt_token")

  const options = {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`
    }
  }

  const offersData = useFetch(offersurl, options)

  const { apiStatus, fetchedData } = offersData

  const { offers } = fetchedData

  const renderLoadingView = () => {
    return (
      <div className='loading-container'>
        <span>{""}</span>
      </div>
    )
  }

  const renderSuccessView = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Slider {...settings}>
        {offers.map(offer => (
          <img key={offer.id} className='slide-image' src={offer.image_url} alt="offer" />
        ))}
      </Slider>
    )
  }



  const renderFailureView = () => { }


  const renderOffers = () => {
    switch (apiStatus) {
      case "INPROGRESS":
        return renderLoadingView()
      case "SUCCESS":
        return renderSuccessView()
      case "FAILURE":
        return renderFailureView()
      default:
        return null
    }
  }

  return <> {renderOffers()} </>

}

export default Offers
