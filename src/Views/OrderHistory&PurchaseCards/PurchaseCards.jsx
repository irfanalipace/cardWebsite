import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";
import violetImage from "../../assets/images/cardimagegrid.png";
import brownImage from "../../assets/images/cardimagegrid2.png";
import orangeImage from "../../assets/images/cardimagegrid3.png";
import violetCardImage from "../../assets/images/cardimagegrid4.png";
import pinkImage from "../../assets/images/cardimagegrid5.png";
import azureImage from "../../assets/images/cardimagegrid6.png";
import { useNavigate } from "react-router-dom";
import { fetchCards } from "../../store/actions/cardsAction";

const PurchaseCards = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [loader, setLoader] = useState(false);

  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const getAllCards = async () => {
    try {
      setLoader(true);
      const { success, data } = await fetchCards();

      if (success) {
        setCards(data);
      }
      setLoader(false);
    } catch (err) {
      console.log(err.errors[0].message || "Failed to fetch orders");
      setLoader(false);
    }
  };

  useEffect(() => {
    getAllCards();
  }, []);

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

  const handleNavigate = () => {
    navigate("/select-payment");
  };

  return loader ? (
    <CircularProgress size={34} sx={{ color: "8AE700" }} />
  ) : (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      sx={{ padding: { xs: "1rem", sm: "2rem" } }}
    >
      {cards?.map((card) => {
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
                  fontSize: { xs: "12px", sm: "14px" },
                }}
              >
                {card.color}
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold", fontFamily: "Poppins" }}
                >
                  {card.type}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: { xs: "12px", sm: "14px" },
                  }}
                >
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
                    <Button onClick={decrement} variant="outlined" size="small">
                      -
                    </Button>
                    <Typography
                      variant="body1"
                      sx={{ display: "inline", margin: "0 1rem" }}
                    >
                      {quantity}
                    </Typography>
                    <Button onClick={increment} variant="outlined" size="small">
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
                    onClick={handleNavigate}
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
  );
};

export default PurchaseCards;
