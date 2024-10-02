import React from "react";
import {
  Grid,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import violetImage from "../../../../../assets/images/cardimagegrid.png";
import brownImage from "../../../../../assets/images/cardimagegrid2.png";
import orangeImage from "../../../../../assets/images/cardimagegrid3.png";
import violetCardImage from "../../../../../assets/images/cardimagegrid4.png";
import pinkImage from "../../../../../assets/images/cardimagegrid5.png";
import azureImage from "../../../../../assets/images/cardimagegrid6.png";

const OfferSections = () => {
  const cardData = [
    {
      id: 1,
      title: "Violet Card",
      description:
        "Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur.",
      image: violetImage,
      color: "#800080",
    },
    {
      id: 2,
      title: "Brown Card",
      description:
        "Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur.",
      image: brownImage,
      color: "#8B4513",
    },
    {
      id: 3,
      title: "Orange Card",
      description:
        "Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur.",
      image: orangeImage,
      color: "#FFA500",
    },
    {
      id: 4,
      title: "Violet Card",
      description:
        "Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur.",
      image: violetCardImage,
      color: "#800080",
    },
    {
      id: 5,
      title: "Pink Card",
      description:
        "Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur.",
      image: pinkImage,
      color: "#FFC0CB",
    },
    {
      id: 6,
      title: "Azure Card",
      description:
        "Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur.",
      image: azureImage,
      color: "#007FFF",
    },
  ];

  return (
    <Box sx={{ padding: " 2rem", textAlign: "center" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          marginBottom: "1rem",
          fontFamily: "Poppins",
          color: { xs: "white", md: "black" },
        }}
      >
        WHAT WE OFFER
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: "2rem",
          fontFamily: "Poppins",
          color: { xs: "white", md: "inherit" },
        }}
      >
        Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet
        consectetur lorem ipsum dolor sit amet consectetur.
        <br />
        consectetur lorem ipsum dolor sit amet consectetur.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {cardData.map((card) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={card.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                position: "relative",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={card.image}
                alt={card.title}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  backgroundColor: card.color,
                  color: "white",
                  padding: "0.5rem",
                  borderBottomLeftRadius: "8px",
                  fontFamily: "Poppins",
                }}
              >
                {card.title}
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold", fontFamily: "Poppins" }}
                >
                  {card.title}
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: "Poppins" }}>
                  {card.description}
                </Typography>
              </CardContent>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#8AE700",
                  color: "black",
                  fontFamily: "Poppins",
                  "&:hover": { backgroundColor: "#76c300" },
                }}
                endIcon={<ArrowForwardIcon />}
              >
                Learn More
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Button
        variant="contained"
        sx={{
          marginTop: "2rem",
          backgroundColor: "#8AE700",
          color: "black",
          fontFamily: "Poppins",
          "&:hover": { backgroundColor: "#76c300" },
        }}
      >
        Show More
      </Button>
    </Box>
  );
};

export default OfferSections;
