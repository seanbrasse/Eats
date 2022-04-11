import React, { Component, useEffect } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import TitleCard from '../components/Card/Card'
import { useLocation, useNavigate } from 'react-router-dom'
import SearchBar from '../components/SearchBar/SearchBar'

const Search = () => {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const termParam = params.get('find_desc')
  const locationParam = params.get('find_loc')

  const history = useNavigate()

  const search = (term, location) => {
    const urlEncodedTerm = encodeURI(term)
    const urlEncodedLocation = encodeURI(location)
    history(
      `/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`
    )
  }

  return (
    <div className="Search">
      <Box
        sx={{
          // paddingInline: 2,
          paddingX: 2,
          paddingTop: 4,
          maxWidth: 450,
          // minWidth: 10,
          mx: 'auto',
          display: 'flex'
        }}>
        <SearchBar search={search} />
      </Box>
      <Typography
        variant="h5"
        fontFamily={'raleway'}
        sx={{
          paddingTop: 3,
          color: '#64dd17',
          font: 'Raleway'
        }}>
        Search Results
      </Typography>
      <Typography
        variant="subtitle2"
        fontFamily={'raleway'}
        sx={{
          paddingY: 1,
          color: 'black',
          font: 'Raleway'
        }}>
        Searched for: {termParam} Near Me
      </Typography>
      <Box
        sx={{
          // paddingInline: 2,
          paddingX: 2,
          maxWidth: 450,
          // minWidth: 10,
          mx: 'auto',
          display: 'flex'
        }}></Box>
    </div>
  )
}

export default Search
