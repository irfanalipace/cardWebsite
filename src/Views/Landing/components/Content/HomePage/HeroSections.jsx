import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import Imagecard from "../../../../../assets/images/imagecard.png";

const HeroSections = () => {
  return (
    <Box sx={{ padding: "0rem 2rem", color: "white" }}>
      <Grid container alignItems="center" spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              fontWeight: "bold",
              marginBottom: "1rem",
              fontFamily: "Poppins",
              fontSize: { md: "38px", sm: "20px" },
            }}
          >
            Virtual Credit Cards: Your Way to Safer Payments
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: "2rem", fontFamily: "Poppins" }}
          >
            Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet
            consectetur lorem ipsum dolor sit amet consectetur lorem ipsum dolor
            sit amet consectetur.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "black",
              fontFamily: "Poppins",
              "&:hover": { backgroundColor: "white" },
            }}
          >
            Our Services
          </Button>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={Imagecard}
            alt="Hero"
            sx={{ width: "85%", height: "auto" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSections;
