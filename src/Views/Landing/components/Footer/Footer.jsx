import { Box, Grid, Typography, Divider, styled } from "@mui/material";
import { Facebook, YouTube } from "@mui/icons-material";
import logoimage from "../../../../assets/images/logo.png";
import React from "react";

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: "#000",
  color: "#fff",
  padding: "2rem 1rem",
  [theme.breakpoints.down("sm")]: {
    textAlign: "left",
  },
}));

const Footer = () => {
  return (
    <StyledFooter>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
         <img src={logoimage} alt="img" />
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Box mt={2} sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box display="flex" alignItems="center" gap={1}>
              <Facebook />
              <Typography variant="body2">Follow us on Facebook</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1} mt={1}>
              <YouTube />
              <Typography variant="body2">Follow us on YouTube</Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6">Menu</Typography>
          <Box mt={2} display="flex" flexDirection="column" gap={1}>
            <Typography variant="body2">How to Play</Typography>
            <Typography variant="body2">FAQ's</Typography>
            <Typography variant="body2">Products</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">About VCC</Typography>
          <Box mt={2} display="flex" flexDirection="column" gap={1}>
            <Typography variant="body2">Where to use Ezzocard VCCs</Typography>
            <Typography variant="body2">Where to Use Ezzocard VCCs</Typography>
            <Typography variant="body2">Blog</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box mt={0} display="flex" flexDirection="column" gap={1}>
            <Typography variant="h6">Contact Us</Typography>
            <Typography variant="body2">+92-343-6683-499</Typography>
            <Typography variant="body2">abc@gmail.com</Typography>
            <Typography variant="body2">92, Saeedan, Lahore</Typography>
          </Box>
        </Grid>
      </Grid>

      <Divider style={{ backgroundColor: "#fff", margin: "2rem 0" }} />

      <Typography align="center" variant="body2">
        Ezzocard 2024 All rights reserved.
      </Typography>
    </StyledFooter>
  );
};

export default Footer;
