import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  IconButton,
  Divider,
  useTheme,
  Avatar,
} from "@mui/material";
import { ShoppingCart, KeyboardArrowDown } from "@mui/icons-material";
import imagelog from "../../assets/images/logo.png";
import HamzaAvatar from "../../assets/images/Hamza.svg";

const Header = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="absolute" // Changed to absolute for overlapping the background image
      sx={{
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: theme.palette.custom.white, // Set background to transparent
        boxShadow: "none", // Remove box shadow
        padding: "0 1rem",
        zIndex: 2, // Ensure it's above the background image
        color: theme.palette.custom.black,
        height: "100px",
        display: "flex",
        justifyContent: "center",
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
              textTransform: "none",
              boxShadow: "none",
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
              textTransform: "none",
              boxShadow: "none",
            }}
          >
            Buy Prepaid Cards
          </Button>

          <IconButton edge="end" color="inherit">
            <Avatar alt="Hamza" src={HamzaAvatar} />
          </IconButton>

          <Box display="flex" alignItems="center">
            <Typography variant="body1" sx={{ fontFamily: "Poppins" }}>
              Hamza...
            </Typography>
            <KeyboardArrowDown />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
