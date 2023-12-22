/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

const apiConstraints = {
  initial: "INITIAL",
  in_progress: "INPROGRESS",
  success: "SUCCESS",
  failure: "FAILURE"
}

const useFetch = (url, options, rating) => {
  const [apiStatus, setApiStatus] = useState(apiConstraints.initial)
  const [fetchedData, setFetchedData] = useState([])

  useEffect(() => {
    const getData = async () => {
      setApiStatus(apiConstraints.in_progress)
      const response = await fetch(url, options)
      const data = await response.json()
      setFetchedData(data)
      if (response.ok === true) {
        setApiStatus(apiConstraints.success)
      } else {
        setApiStatus(apiConstraints.failure)
      }
    }
    getData()

  }, [rating])

  return { apiStatus, fetchedData }
}

export default useFetch
