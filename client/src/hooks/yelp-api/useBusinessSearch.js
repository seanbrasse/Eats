import { useState, useEffect } from 'react'
import * as api from './api'

export const useBusinessSearch = (term, longitude, latitude) => {
  const [businesses, setBusinesses] = useState([])
  const [amountResults, setAmountResults] = useState()
  const [searchParams, setSearchParams] = useState({
    term,
    longitude,
    latitude
  })
  useEffect(() => {
    setBusinesses([])
    const fetchData = async () => {
      try {
        const rawData = await api.get('/businesses/search', searchParams)
        const resp = await rawData.json()
        setBusinesses(resp.businesses)
        setAmountResults(resp.total)
      } catch (e) {
        console.error.apply(e)
      }
    }
    fetchData()
  }, [searchParams])
  return [businesses, amountResults, searchParams, setSearchParams]
}
