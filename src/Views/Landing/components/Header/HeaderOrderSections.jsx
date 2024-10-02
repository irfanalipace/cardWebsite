import {
    AppBar,
    Toolbar,
    Button,
    Typography,
    Box,
    IconButton,
    Divider,
  } from "@mui/material";
  import { ShoppingCart, KeyboardArrowDown } from "@mui/icons-material";
  import React from "react";
  import imagelog from "../../../../assets/images/logo.png";
  
  const HeaderOrderSections = () => {
    return (
      <AppBar
        position="absolute" 
        sx={{
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "transparent", 
          boxShadow: "none", 
          padding: "0 1rem",
          zIndex: 2, 
        }}
      >
        <Toolbar>
          <Box display="flex" alignItems="center">
            <Typography variant="h6">
              <img src={imagelog} alt="logo" style={{ height: "40px" }} />
            </Typography>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ height: "40px", margin: "0 16px",color:"black" }}
            />
          </Box>
  
          <Box display="flex" alignItems="center" gap={2} sx={{ flexGrow: 1 }}>
            <Box display="flex" alignItems="center">
              <Typography variant="body1" sx={{ fontFamily: "Poppins" , color:"black"}}>
                Prepaid Cards
              </Typography>
              <KeyboardArrowDown />
            </Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#8AE700",
                color: "black",
                fontFamily: "Poppins",
                "&:hover": { backgroundColor: "#76c300" },
              }}
            >
              Go to Gift Cards
            </Button>
          </Box>
  
          <Box display="flex" alignItems="center" gap={2}>
            <Box display="flex" alignItems="center">
              <Typography variant="body1" sx={{ fontFamily: "Poppins" , color:"black"}}>
                Registration Balance
              </Typography>
              <KeyboardArrowDown style={{color:"black"}}/>
            </Box>
  
            <Box display="flex" alignItems="center">
              <Typography variant="body1" sx={{ fontFamily: "Poppins", color:"black" }}>
                How to Pay
              </Typography>
              <KeyboardArrowDown style={{color:"black"}}/>
            </Box>
  
            <Box display="flex" alignItems="center">
              <Typography variant="body1" sx={{ fontFamily: "Poppins" ,color:"black"}}>
                More
              </Typography>
              <KeyboardArrowDown style={{color:"black"}}/>
            </Box>
  
            <IconButton edge="end" color="inherit" style={{color:"black"}}>
              <ShoppingCart style={{color:"black"}}/>
            </IconButton>
  
            <Box display="flex" alignItems="center">
              <Typography variant="body1" sx={{ fontFamily: "Poppins",color:"black" }}>
                $90.90
              </Typography>
              <KeyboardArrowDown style={{color:"black"}}/>
            </Box>
  
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#8AE700",
              color:"black",
                fontFamily: "Poppins",
                "&:hover": { backgroundColor: "#76c300" },
              }}
            >
              Buy Prepaid Cards
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default HeaderOrderSections;
  