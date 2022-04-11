import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography
} from '@mui/material'

const TitleCard = () => {
  return (
    <Card
      className="Titlecard"
      variant="outlined"
      sx={{
        backgroundColor: '#b0bec5',
        boxShadow: 3,
        margin: 5,
        minWidth: 150,
        minHeight: 150,
        maxHeight: 300,
        maxWidth: 400
      }}>
      <CardHeader title={'Restaurant'} subheader={'Type of Restaurant'} />
      <CardContent>
        <CardMedia
          component={'img'}
          height="140"
          image="https://wallpaperaccess.com/full/286308.jpg"
        />
        <Typography
          gutterBottom
          component="div"
          variant="body2"
          sx={{ paddingTop: 2 }}>
          This is the restaurant description
        </Typography>
      </CardContent>
    </Card>
  )
}

export default TitleCard
