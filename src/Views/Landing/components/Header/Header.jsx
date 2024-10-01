import { AppBar, Toolbar, Button, Typography, Box, IconButton, Divider } from '@mui/material';
import { ShoppingCart, Menu as MenuIcon, KeyboardArrowDown } from '@mui/icons-material'; 
import React from 'react';
import imagelog from "../../../../assets/images/logo.png";

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#000', padding: '0 1rem' }}>
      <Toolbar>

        <Box display="flex" alignItems="center">
          <Typography variant="h6">
            <img src={imagelog} alt="logo" style={{ height: '40px' }} />
          </Typography>
          <Divider orientation="vertical" flexItem sx={{ height: '40px', margin: '0 16px' }} />
        </Box>

      
        <Box display="flex" alignItems="center" gap={2} sx={{ flexGrow: 1 }}>
          <Box display="flex" alignItems="center">
            <Typography variant="body1">Prepaid Cards</Typography>
            <KeyboardArrowDown />
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#8AE700',
              color: '#000',
              '&:hover': { backgroundColor: '#76c300' },
            }}
          >
            Go to Gift Cards
          </Button>
        </Box>

     
        <Box display="flex" alignItems="center" gap={2}>
          <Box display="flex" alignItems="center">
            <Typography variant="body1">Registration Balance</Typography>
            <KeyboardArrowDown />
          </Box>

          <IconButton edge="end" color="inherit">
            <MenuIcon />
          </IconButton>

          <Box display="flex" alignItems="center">
            <Typography variant="body1">How to Pay</Typography>
            <KeyboardArrowDown />
          </Box>
          
          <Box display="flex" alignItems="center">
            <Typography variant="body1">More</Typography>
            <KeyboardArrowDown />
          </Box>

          <IconButton edge="end" color="inherit">
            <ShoppingCart />
          </IconButton>

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#8AE700',
              color: '#000',
              '&:hover': { backgroundColor: '#76c300' },
            }}
          >
            Buy Prepaid Cards
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
