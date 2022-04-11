import React, { Component, useEffect } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import TitleCard from '../components/Card/Card'
import '@fontsource/raleway/500.css'
import SearchBar from '../components/Search/SearchBar'

const n = 12
const elements = []
for (var i = 0; i < n; i++) {
  elements.push(
    <Grid item xs={1}>
      <TitleCard />
    </Grid>
  )
}

const Home = () => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log('Latitude is :', position.coords.latitude)
      console.log('Longitude is :', position.coords.longitude)
    })
  })

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
        <SearchBar />
      </Box>
      <Grid container direction={'row'} columns={{ xs: 1, sm: 2, md: 4 }}>
        {elements}
      </Grid>
    </div>
  )
}

export default Home
