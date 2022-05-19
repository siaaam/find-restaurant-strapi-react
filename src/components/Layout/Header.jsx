import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Food Advisor
          </Typography>
          <Button component={NavLink} color="inherit" to="/">
            Home
          </Button>
          <Button component={NavLink} color="inherit" to="/restaurants">
            Restaurants
          </Button>
          <Button component={NavLink} color="inherit" to="/about">
            About
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
