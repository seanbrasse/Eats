import React, { useEffect, useState } from 'react'
import { Google, Search } from '@mui/icons-material'
import { Box, InputAdornment, TextField } from '@mui/material'

const SearchBar = (props) => {
  const [term, setTerm] = useState(props.term || '')
  const [location, setLocation] = useState(props.location || '')
  const [latitude, setLatitude] = useState(props.latitude || '')
  const [longitude, setLongitude] = useState(props.longitude || '')

  const submit = (e) => {
    if (typeof props.search === 'function') {
      props.search(term, latitude, longitude)
    }
    console.log(term, latitude, longitude)
    e.preventDefault()
  }

  useEffect(() => {
    if (location === '') {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log('Latitude is :', position.coords.latitude)
        console.log('Longitude is :', position.coords.longitude)
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
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
          value={term}
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
