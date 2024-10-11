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
  Badge,
} from "@mui/material";
import { ShoppingCart, KeyboardArrowDown, Menu } from "@mui/icons-material";
import { useState } from "react";
import imagelog from "../../../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import OptionsMenu from "./OptionsMenu";
import HamzaProfile from "../../../../assets/images/HamzaProfile.svg";
import { logout } from "../../../../store/actions/authActions";
import { calculateTotalPrice } from "../../../../utils/helper";

const HeaderOrderSections = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const token = useSelector((state) => state?.auth?.token);
  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);
  const user = useSelector((state) => state?.auth?.user);
  const cartItems = useSelector((state) => state?.cart?.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = async () => {
    try {
      await dispatch(logout(token));
      dispatch({ type: "CLEAR_ITEM", payload: [] });
    } catch (error) {
      console.log("logout error", error);
    } finally {
      navigate("/login");
    }
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

  const bottomDrawer = (
    <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText
              primary="Account Settings"
              onClick={() => navigate("/account-setting")}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Profile Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleLogout} sx={{ color: "#e60000" }}>
            <ListItemText primary="Logout" />
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
        backgroundColor: "white",
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
            sx={{ height: "40px", margin: "0 16px", color: "black" }}
          />
        </Box>

        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "flex", md: "none" }, color: "black" }}
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
          sx={{
            height: "100%",
            backgroundColor: "green",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <div>{drawer}</div>
            <div>{bottomDrawer}</div>
          </Box>
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
              sx={{ fontFamily: "Poppins", color: "black" }}
            >
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
              sx={{ fontFamily: "Poppins", color: "black" }}
            >
              Registration Balance
            </Typography>
            <KeyboardArrowDown style={{ color: "black" }} />
          </Box>

          <Box display="flex" alignItems="center">
            <Typography
              variant="body1"
              sx={{ fontFamily: "Poppins", color: "black" }}
            >
              How to Pay
            </Typography>
            <KeyboardArrowDown style={{ color: "black" }} />
          </Box>

          <Box display="flex" alignItems="center">
            <Typography
              variant="body1"
              sx={{ fontFamily: "Poppins", color: "black" }}
            >
              More
            </Typography>
            <KeyboardArrowDown style={{ color: "black" }} />
          </Box>

          <IconButton edge="end" color="inherit" style={{ color: "white" }}>
            <Badge
              badgeContent={cartItems.length}
              color="secondary"
              invisible={cartItems.length === 0}
            >
              <ShoppingCart style={{ color: "black" }} />
            </Badge>
          </IconButton>

          {cartItems.length && (
            <Box display="flex" alignItems="center">
              <Typography
                variant="body1"
                sx={{ fontFamily: "Poppins", color: "black" }}
              >
                ${`${calculateTotalPrice(cartItems)}`}
              </Typography>
              <KeyboardArrowDown style={{ color: "black" }} />
            </Box>
          )}

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#8AE700",
              color: "black",
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
                  sx={{ fontWeight: 500, lineHeight: "16px", color: "black" }}
                >
                  {user?.name}
                </Typography>
              </Box>
              <OptionsMenu />
            </Stack>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderOrderSections;
