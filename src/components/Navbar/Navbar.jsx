import { Fastfood } from '@mui/icons-material'
import { Box, Button, Icon } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <Box className="NavBar">
      <Fastfood />
      <h1>NavBar</h1>
      <ul className="nav-links">
        <Link className="link" to="/">
          <li>Home</li>
        </Link>
        <Link className="link" to="/previous">
          <li>Places I've Eaten</li>
        </Link>
        <Link className="link" to="/spending">
          <li>Spending</li>
        </Link>
      </ul>
    </Box>
  )
}

export default Navbar
