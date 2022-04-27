import React, { Component, useEffect } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import SearchBar from '../components/Search/SearchBar'
import { useBusinessSearch } from '../hooks/yelp-api/useBusinessSearch'
import SearchResults from '../components/Search/SearchResults'

//TODO: Lots of repeated code, needs cleanup
const Search = () => {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const termParam = params.get('desc')
  const latitudeParam = params.get('latitude')
  const longitudeParam = params.get('longitude')

  const history = useNavigate()
  const [businesses, amountResults, searchParams, setSearchParams] =
    useBusinessSearch(termParam, latitudeParam, longitudeParam)

  const search = (term, latitude, longitude) => {
    const urlEncodedTerm = encodeURI(term)
    const urlEncodedLatitude = encodeURI(latitude)
    const urlEncodedLongitude = encodeURI(longitude)

    history(
      `/search?desc=${urlEncodedTerm}&latitude=${urlEncodedLatitude}&longitude=${urlEncodedLongitude}`
    )
  }

  const capitalizeFirstLetter = (term) => {
    return term.charAt(0).toUpperCase() + term.slice(1)
  }

  return (
    <div className="Search">
      <Box
        sx={{
          paddingX: 2,
          paddingTop: 4,
          maxWidth: 450,
          mx: 'auto',
          display: 'flex'
        }}>
        <SearchBar
          search={search}
          term={termParam}
          latitude={latitudeParam}
          longitude={longitudeParam}
        />
      </Box>
      <Typography
        variant="h5"
        fontFamily={'raleway'}
        sx={{
          paddingTop: 3,
          color: '#64dd17',
          font: 'Raleway'
        }}>
        Search Results for {capitalizeFirstLetter(termParam)} Near Me
      </Typography>
      <Grid container direction={'row'} columns={{ xs: 1, sm: 2, md: 4 }}>
        <SearchResults businesses={businesses} />
      </Grid>
    </div>
  )
}

export default Search
