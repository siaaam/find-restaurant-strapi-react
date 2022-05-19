import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import PhotoCard from './PhotoCard';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Restaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadAllRestaurants();
  }, []);

  const loadAllRestaurants = async () => {
    const result = await axios.get(
      `http://localhost:1337/api/restaurants?fields=name,publishedAt,description&populate=image`
    );

    setAllRestaurants(result.data.data);
    setIsLoading(false);
  };

  const clickHandler = (evt) => {
    console.log(evt);
  };

  return isLoading ? (
    <h1>loading...</h1>
  ) : (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            Categories
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h5"
              sx={{ py: '10px', px: '5px', textTransform: 'uppercase' }}
            >
              Best Restaurant in Paris
            </Typography>
            <Grid container spacing={2} sx={{ height: '100%', width: '100%' }}>
              {allRestaurants.map((restaurant) => (
                <Grid
                  component={Link}
                  to={`/restaurants/${restaurant.id}`}
                  onClick={(evt) => clickHandler(evt.currentTarget)}
                  key={restaurant.id}
                  item
                  md={4}
                >
                  <PhotoCard restaurant={restaurant} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Restaurants;
