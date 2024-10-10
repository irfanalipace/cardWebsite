import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  IconButton,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { ShoppingCart, KeyboardArrowDown, Menu } from "@mui/icons-material";
import React, { useState } from "react";
import imagelog from "../../../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Prepaid Cards" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Go to Gift Cards" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Registration Balance" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="How to Pay" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="More" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Buy Prepaid Cards" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

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
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: { xs: "wrap", md: "nowrap" },
        }}
      >
        <Box display="flex" alignItems="center">
          <Link to="/">
            <Typography variant="h6">
              <img src={imagelog} alt="logo" style={{ height: "40px" }} />
            </Typography>
          </Link>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ height: "40px", margin: "0 16px", color: "white" }}
          />
        </Box>

        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "flex", md: "none" }, color: "white" }}
          onClick={handleDrawerToggle}
        >
          <Menu />
        </IconButton>

        <Drawer
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </Drawer>

        <Box
          display={{ xs: "none", md: "flex" }}
          alignItems="center"
          gap={2}
          sx={{
            flexGrow: 1,
            justifyContent: "flex-start",
          }}
        >
          <Box display="flex" alignItems="center">
            <Typography
              variant="body1"
              sx={{ fontFamily: "Poppins", color: "white" }}
            >
              Prepaid Cards
            </Typography>
            <KeyboardArrowDown />
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#8AE700",
              color: "white",
              fontFamily: "Poppins",
              "&:hover": { backgroundColor: "#76c300" },
            }}
          >
            Go to Gift Cards
          </Button>
        </Box>

        <Box
          display={{ xs: "none", md: "flex" }}
          alignItems="center"
          gap={2}
          sx={{
            justifyContent: "flex-end",
          }}
        >
          <Box display="flex" alignItems="center">
            <Typography
              variant="body1"
              sx={{ fontFamily: "Poppins", color: "white" }}
            >
              Registration Balance
            </Typography>
            <KeyboardArrowDown style={{ color: "white" }} />
          </Box>

          <Box display="flex" alignItems="center">
            <Typography
              variant="body1"
              sx={{ fontFamily: "Poppins", color: "white" }}
            >
              How to Pay
            </Typography>
            <KeyboardArrowDown style={{ color: "white" }} />
          </Box>

          <Box display="flex" alignItems="center">
            <Typography
              variant="body1"
              sx={{ fontFamily: "Poppins", color: "white" }}
            >
              More
            </Typography>
            <KeyboardArrowDown style={{ color: "white" }} />
          </Box>

          <IconButton edge="end" color="inherit" style={{ color: "white" }}>
            <ShoppingCart style={{ color: "white" }} />
          </IconButton>

          <Box display="flex" alignItems="center">
            <Typography
              variant="body1"
              sx={{ fontFamily: "Poppins", color: "white" }}
            >
              $90.90
            </Typography>
            <KeyboardArrowDown style={{ color: "white" }} />
          </Box>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#8AE700",
              color: "white",
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
