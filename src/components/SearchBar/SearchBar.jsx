import React, { useEffect, useState } from 'react'
import { Search } from '@mui/icons-material'
import { Box, InputAdornment, TextField } from '@mui/material'

const SearchBar = (props) => {
  const [term, setTerm] = useState(props.term || '')
  const [location, setLocation] = useState(props.location || '')

  const submit = (e) => {
    if (typeof props.search === 'function') {
      props.search(term, location)
    }
    console.log(term, location)
    e.preventDefault()
  }

  useEffect(() => {
    if (location === '') {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log('Latitude is :', position.coords.latitude)
        console.log('Longitude is :', position.coords.longitude)
        setLocation([position.coords.latitude, position.coords.longitude])
      })
    }
  })

  return (
    <>
      <form onSubmit={submit}>
        <TextField
          sx={{ paddingTop: 2, minWidth: 450 }}
          variant="outlined"
          label="What are you hungry for? "
          fullWidth
          type={'text'}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {' '}
                <Search />
              </InputAdornment>
            )
          }}
          onChange={(e) => {
            setTerm(e.target.value)
          }}
        />
      </form>
    </>
  )
}

export default SearchBar
