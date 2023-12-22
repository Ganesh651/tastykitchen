import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import useFetch from '../useFetch'
import { restaaurantDetailsUrl } from '../urls'
import './index.css'
import Cookies from 'js-cookie'

const RestaurantDetails = () => {
  const { id } = useParams()
  const token = Cookies.get("jwt_token")
  const options = {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`
    }
  }

  const restaurantDetails = useFetch(restaaurantDetailsUrl + id, options)

  const { apiStatus, fetchedData } = restaurantDetails

  console.log(apiStatus, fetchedData)

  return (
    <>
      <Header />
      <div>
        RestaurantDetails
      </div>
      <Footer />
    </>
  )
}

export default RestaurantDetails
