import { Fastfood, Title } from '@mui/icons-material'
import { Box, Button, Icon, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import '@fontsource/cabin/700.css'

const Navbar = () => {
  return (
    <Box className="NavBar">
      <Box className="logo" sx={{ paddingX: 2, paddingY: 1 }}>
        <Fastfood sx={{ paddingX: 2, fontSize: 40 }} />
        <Typography variant="h4" fontFamily={'cabin'}>
          Eats!
        </Typography>
        {/* <h1>Eats!</h1> */}
      </Box>
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
