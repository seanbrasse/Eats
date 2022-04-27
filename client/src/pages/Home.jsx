import React, { Component, useEffect } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import BusinessCard from '../components/Card/BusinessCard'
import '@fontsource/raleway/500.css'
import SearchBar from '../components/Search/SearchBar'
import { useLocation, useNavigate } from 'react-router-dom'
import { useBusinessSearch } from '../hooks/yelp-api/useBusinessSearch'

const n = 12
const elements = []
for (var i = 0; i < n; i++) {
  elements.push(
    <Grid item xs={1}>
      <BusinessCard />
    </Grid>
  )
}
//TODO: Lots of repeated code, needs cleanup, probably needs to be moved to the search bar component?? Idk not quite
const Home = () => {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const termParam = params.get('desc')
  const latitudeParam = params.get('latitude')
  const longitudeParam = params.get('longitude')

  const [businesses, amountResults, searchParams, setSearchParams] =
    useBusinessSearch(termParam, latitudeParam, longitudeParam)
  const history = useNavigate()

  const search = (term, latitude, longitude) => {
    const urlEncodedTerm = encodeURI(term)
    const urlEncodedLatitude = encodeURI(latitude)
    const urlEncodedLongitude = encodeURI(longitude)

    history(
      `/search?desc=${urlEncodedTerm}&latitude=${urlEncodedLatitude}&longitude=${urlEncodedLongitude}`
    )
  }

  return (
    <div className="Home">
      <Typography
        variant="h5"
        fontFamily={'raleway'}
        sx={{
          paddingY: 3,
          color: '#64dd17',
          font: 'Raleway'
        }}>
        Find Places to Eat Near Me
      </Typography>
      <Box
        sx={{
          // paddingInline: 2,
          paddingX: 2,
          maxWidth: 450,
          // minWidth: 10,
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
      <Grid container direction={'row'} columns={{ xs: 1, sm: 2, md: 4 }}>
        {elements}
      </Grid>
    </div>
  )
}

export default Home
