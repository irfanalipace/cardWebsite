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

const Header = () => {
  return (
    <AppBar
      position="absolute" // Changed to absolute for overlapping the background image
      sx={{
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "transparent", // Set background to transparent
        boxShadow: "none", // Remove box shadow
        padding: "0 1rem",
        zIndex: 2, // Ensure it's above the background image
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
            sx={{ height: "40px", margin: "0 16px" }}
          />
        </Box>

        <Box display="flex" alignItems="center" gap={2} sx={{ flexGrow: 1 }}>
          <Box display="flex" alignItems="center">
            <Typography variant="body1" sx={{ fontFamily: "Poppins" }}>
              Prepaid Cards
            </Typography>
            <KeyboardArrowDown />
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#8AE700",
              color: "#000",
              fontFamily: "Poppins",
              "&:hover": { backgroundColor: "#76c300" },
            }}
          >
            Go to Gift Cards
          </Button>
        </Box>

        <Box display="flex" alignItems="center" gap={2}>
          <Box display="flex" alignItems="center">
            <Typography variant="body1" sx={{ fontFamily: "Poppins" }}>
              Registration Balance
            </Typography>
            <KeyboardArrowDown />
          </Box>

          <Box display="flex" alignItems="center">
            <Typography variant="body1" sx={{ fontFamily: "Poppins" }}>
              How to Pay
            </Typography>
            <KeyboardArrowDown />
          </Box>

          <Box display="flex" alignItems="center">
            <Typography variant="body1" sx={{ fontFamily: "Poppins" }}>
              More
            </Typography>
            <KeyboardArrowDown />
          </Box>

          <IconButton edge="end" color="inherit">
            <ShoppingCart />
          </IconButton>

          <Box display="flex" alignItems="center">
            <Typography variant="body1" sx={{ fontFamily: "Poppins" }}>
              $90.90
            </Typography>
            <KeyboardArrowDown />
          </Box>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#8AE700",
              color: "#000",
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

export default Header;
