import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImgCarousel from './ImgCarousel';
import { Container, Box, Typography, CssBaseline, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';

const Restaurant = () => {
  const { id } = useParams();

  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [openingHours, setOpeningHours] = useState(null);

  useEffect(() => {
    loadSingleRestaurant();
  }, []);

  const loadSingleRestaurant = async () => {
    const result = await axios.get(
      `http://localhost:1337/api/restaurants/${id}?populate=image,openingHours`
    );
    setRestaurantInfo(result.data.data);

    setOpeningHours([result.data.data.attributes.openingHours[0]]);

    setIsLoading(false);
  };
  console.log(restaurantInfo);
  console.log(openingHours);

  return isLoading ? (
    <Typography variant="h1" component="h3" sx={{ py: '10px' }}>
      Loading...
    </Typography>
  ) : (
    <>
      <Container maxWidth="md">
        <Box>
          <Typography variant="h2" component="h3" sx={{ py: '10px' }}>
            Name: {restaurantInfo.attributes.name}
          </Typography>
        </Box>
        <Box>
          <ImgCarousel restaurantInfo={restaurantInfo} />
        </Box>
      </Container>

      <Container>
        <Box sx={{ marginTop: '100px', marginBottom: '20px' }}>
          <Box>
            <Button
              component={Link}
              to={`/restaurants/${id}/info`}
              variant="outlined"
              sx={{ marginRight: '20px' }}
            >
              Information
            </Button>
            <Button variant="outlined"> Reviews</Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Restaurant;
