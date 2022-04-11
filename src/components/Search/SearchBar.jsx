import React from 'react'
import { Search } from '@mui/icons-material'
import { InputAdornment, TextField } from '@mui/material'

const SearchBar = () => {
  return (
    <>
      <TextField
        sx={{ paddingTop: 2 }}
        variant="outlined"
        label="Enter Your Zip Code"
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
      />
    </>
  )
}

export default SearchBar
