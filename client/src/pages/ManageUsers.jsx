import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const Spending = () => {
  return (
    <div className="ManageUser">
      <h1>Create A User</h1>
      <Box sx={{ direction: 'row' }}>
        <h2>First Name</h2>
        <TextField />
        <h2>Last Name</h2>
        <TextField />
      </Box>
      <Button>Submit</Button>
      <h1>View Users</h1>
      <TextField />
    </div>
  )
}

export default Spending
