import React from 'react';
import { Typography, Container, Grid } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="md">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        sx={{ height: '100vh' }}
      >
        <Grid item>
          <Typography variant="h1" component="h2" textAlign="center">
            Home
          </Typography>
          <Typography
            variant=""
            component=""
            sx={{ fontSize: '30px', textTransform: 'uppercase' }}
          >
            Design Your Own Style
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
