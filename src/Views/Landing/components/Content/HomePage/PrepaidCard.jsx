import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Box,
  Button,
  TextField, Select,
    MenuItem,
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

const PrepaidCard = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterToggle = () => {
    setIsFilterOpen((prev) => !prev);
  };

 
  const handleCancel = () => {
    setIsFilterOpen(false);
  };
  const cardData = [
    {
      id: 1,
      title: "Violet Card",
      description:
        "Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur.",
      image: violetImage,
      color: "#800080",
      price: 20,
    },
    {
      id: 2,
      title: "Brown Card",
      description:
        "Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur.",
      image: brownImage,
      color: "#8B4513",
      price: 25,
    },
    {
      id: 3,
      title: "Orange Card",
      description:
        "Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur.",
      image: orangeImage,
      color: "#FFA500",
      price: 30,
    },
    {
      id: 4,
      title: "Violet Card",
      description:
        "Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur.",
      image: violetCardImage,
      color: "#800080",
      price: 20,
    },
    {
      id: 5,
      title: "Pink Card",
      description:
        "Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur.",
      image: pinkImage,
      color: "#FFC0CB",
      price: 15,
    },
    {
      id: 6,
      title: "Azure Card",
      description:
        "Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur.",
      image: azureImage,
      color: "#007FFF",
      price: 22,
    },
  ];

  return (
    <Box sx={{ padding: "2rem", textAlign: "center" , background:"#3453071A"}}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", marginBottom: "1rem", fontFamily: "Poppins" }}
      >
        VIRTUAL PREPAID CREDIT HOURS
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginBottom: "2rem", fontFamily: "Poppins" }}
      >
        Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet
        consectetur lorem ipsum dolor sit amet consectetur.
        <br />
        consectetur lorem ipsum dolor sit amet consectetur.
      </Typography>
      <Box sx={{ padding: "2rem" }}>
      <Grid container spacing={2} justifyContent="flex-end" alignItems="center">
        
     

   
        {isFilterOpen && (
          <>
          
            <Grid item>
              <Select fullWidth defaultValue="" displayEmpty>
                <MenuItem value="" disabled>
                  Select MasterCard
                </MenuItem>
                <MenuItem value={1}>MasterCard 1</MenuItem>
                <MenuItem value={2}>MasterCard 2</MenuItem>
                <MenuItem value={3}>MasterCard 3</MenuItem>
              </Select>
            </Grid>

           
            <Grid item>
              <TextField
                fullWidth
                placeholder="Please Type Value"
                variant="outlined"
              />
            </Grid>

            <Grid item>
              <Select fullWidth defaultValue="" displayEmpty>
                <MenuItem value="" disabled>
                  Select Currency
                </MenuItem>
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="EUR">EUR</MenuItem>
                <MenuItem value="PKR">PKR</MenuItem>
              </Select>
            </Grid>

           
            <Grid item>
              <Button
                variant="outlined"
                onClick={handleCancel}
                sx={{ marginRight: "1rem" }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#007FFF", color: "white" }}
              >
                Apply Filter
              </Button>
            </Grid>
          </>
        )}

           <Grid item>
          <Button
            variant="contained"
            onClick={handleFilterToggle}
            sx={{ backgroundColor: "#007FFF", color: "white" }}
          >
            Apply Filterd
          </Button>
        </Grid>
      </Grid>
    </Box>
       <Grid container spacing={4} justifyContent="center">
        {cardData.map((card) => {
          const [quantity, setQuantity] = useState(1); 

          const increment = () => {
            setQuantity((prev) => prev + 1);
          };

          const decrement = () => {
            setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
          };

          return (
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

                  {/* Quantity Control */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "1rem",
                    }}
                  >
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Quantity:
                    </Typography>
                    <Box>
                      <Button onClick={decrement} variant="outlined">
                        -
                      </Button>
                      <Typography
                        variant="body1"
                        sx={{ display: "inline", margin: "0 1rem" }}
                      >
                        {quantity}
                      </Typography>
                      <Button onClick={increment} variant="outlined">
                        +
                      </Button>
                    </Box>
                  </Box>

                  <hr style={{ margin: "1rem 0" }} />

                  {/* Price and Purchase Now Button */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", fontFamily: "Poppins" }}
                    >
                      Price: ${card.price * quantity}
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#8AE700",
                        color: "black",
                        fontFamily: "Poppins",
                        "&:hover": { backgroundColor: "#76c300" },
                      }}
                    >
                      Purchase Now
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default PrepaidCard;
