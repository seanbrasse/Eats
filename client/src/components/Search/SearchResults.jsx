import React from 'react'
import { Grid } from '@mui/material'
import BusinessCard from '../Card/BusinessCard.jsx'

const SearchResults = (props) => {
  console.log(props.businesses)
  if (!props.businesses || !props.businesses.length) {
    return <div></div>
  }
  const results = props.businesses.map((b) => (
    <>
      <BusinessCard key={b.id} business={b} />
    </>
  ))

  return <Grid> {results} </Grid>
}

export default SearchResults
