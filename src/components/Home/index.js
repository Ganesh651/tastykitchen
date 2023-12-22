import React, { useState } from 'react'
import Cookies from 'js-cookie'
import { ThreeDots } from 'react-loader-spinner'
import Header from '../Header'
import Footer from '../Footer'
import { offersurl } from '../urls'
import Offers from '../Offers'
import useFetch from '../useFetch'
import './index.css'


const limit = 9

const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 1,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

const Home = () => {
  const [activePage, setActivePage] = useState(1)
  const [rating, setRating] = useState(sortByOptions[0].value)
  const offset = (activePage - 1) * limit
  const token = Cookies.get("jwt_token")
  console.log(rating)
  const options = {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`
    }
  }

  const restaurantList = useFetch(`https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${limit}&sort_by_rating=${rating}'`, options, rating)

  const { apiStatus, fetchedData } = restaurantList

  const { restaurants } = fetchedData

  console.log(restaurants, apiStatus)


  const renderLoadingView = () => {
    console.log("Loading...")
    return (
      <div className='loading-container'>
        <ThreeDots height={50} width={50} color="#F7931E" />
      </div>
    )
  }

  const onRatingFilter = e => {
    setRating(e.target.value)
  }

  const renderSuccessView = () => (
    <div className='restaurants-container'>
      <div className='filters-container'>
        <div className='heading-container'>
          <h2>Popular Restaurants</h2>
          <p>Select Your favourite restaurant special dish and make your day happy...</p>
        </div>
        <div className='filter'>
          <select value={rating} onChange={onRatingFilter}>
            {sortByOptions.map(eachOption => (
              <option value={eachOption.value} key={eachOption.id}>{eachOption.displayText}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )

  const renderFailureView = () => { }


  const renderRestaurantsList = () => {
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

  return (
    <>
      <Header />
      <div style={{ backgroundColor: "#bfbfbf" }} className='home-container'>
        <Offers />
        {renderRestaurantsList()}
    </div>
      <Footer />
    </>

  )
}

export default Home
