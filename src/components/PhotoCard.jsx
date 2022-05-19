import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

const PhotoCard = ({ restaurant }) => {
  // console.log(restaurant.attributes);
  // console.log(
  //   restaurant.attributes.image.data[0].attributes.formats.thumbnail.url
  // );
  const img =
    restaurant.attributes.image.data[0].attributes.formats.thumbnail.url;
  return (
    <Card
      sx={{
        maxWidth: 345,
        '&:hover': {
          backgroundColor: 'red',
        },
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={`http://localhost:1337${img}`}
        alt={restaurant.attributes.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {restaurant.attributes.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {restaurant.attributes.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PhotoCard;
