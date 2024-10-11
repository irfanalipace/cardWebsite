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
  Stack,
  Avatar,
  useTheme,
  Badge,
} from "@mui/material";
import { ShoppingCart, KeyboardArrowDown, Menu } from "@mui/icons-material";
import { useState } from "react";
import imagelog from "../../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import OptionsMenu from "./OptionsMenu";
import { useSelector } from "react-redux";
import HamzaProfile from "../../../../assets/images/HamzaProfile.svg";
import { calculateTotalPrice } from "../../../../utils/helper";

const Header = () => {
  const theme = useTheme();
  const user = useSelector((state) => state?.auth?.user);
  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);
  const cartItems = useSelector((state) => state?.cart?.items);

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
      position="fixed"
      sx={{
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: theme.palette.custom.headerGreen,
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
            <Badge
              badgeContent={cartItems.length}
              color="secondary"
              invisible={cartItems.length === 0}
            >
              <ShoppingCart style={{ color: "white" }} />
            </Badge>
          </IconButton>

          {cartItems.length && (
            <Box display="flex" alignItems="center">
              <Typography
                variant="body1"
                sx={{ fontFamily: "Poppins", color: "white" }}
              >
                ${`${calculateTotalPrice(cartItems)}`}
              </Typography>
              <KeyboardArrowDown style={{ color: "white" }} />
            </Box>
          )}

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
          {isAuthenticated && (
            <Stack
              direction="row"
              sx={{
                p: 2,
                gap: 1,
                alignItems: "center",
                borderTop: "1px solid",
                borderColor: "divider",
              }}
            >
              <Avatar
                sizes="small"
                alt="Profile"
                src={
                  user?.image && typeof user?.image === "string"
                    ? user?.image
                    : HamzaProfile
                }
                sx={{ width: 36, height: 36 }}
              />
              <Box sx={{ mr: "auto" }}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 500, lineHeight: "16px" }}
                >
                  {user?.name}
                </Typography>
              </Box>
              <OptionsMenu color="white" />
            </Stack>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
