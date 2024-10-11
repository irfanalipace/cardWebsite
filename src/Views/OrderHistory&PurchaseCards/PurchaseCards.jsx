import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCards } from "../../store/actions/cardsAction";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import ToastComp from "../../components/toast/ToastComp";

const PurchaseCards = ({ cards, setCards }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loader, setLoader] = useState(false);
  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);
 
  const handleQuantityChange = (index, delta) => {
    setCards((prevCards) => {
      const newCards = [...prevCards]; // Clone the array
      const card = newCards[index];
      const newQuantity = Math.max((card.quantity || 1) + delta, 1); // Ensure quantity does not go below 1
      card.quantity = newQuantity; // Update card's quantity
      card.totalPrice = card.price * newQuantity; // Calculate total price based on updated quantity
      return newCards; // Return new state
    });
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
      console.error(err.message || "Failed to fetch orders");
      setLoader(false);
    }
  };

  useEffect(() => {
    getAllCards();
  }, []);

  const handleAddToCart = (cartItem) => {
    if (!isAuthenticated) {
      ToastComp({
        variant: "error",
        message: "Please Login to add item to cart",
      });
      navigate("/login");
    } else {
      dispatch({ type: "ADD_ITEM", payload: cartItem });
    }
  };

  return loader ? (
    <CircularProgress size={34} sx={{ color: "#8AE700" }} />
  ) : (
    <Grid container spacing={2} sx={{ padding: { xs: "1rem", sm: "2rem" } }}>
      {cards?.map((card, index) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={4} key={card?.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  backgroundColor: card?.color,
                  color: "white",
                  padding: "0.5rem",
                  borderBottomLeftRadius: "8px",
                  fontFamily: "Poppins",
                  fontSize: { xs: "12px", sm: "14px" },
                }}
              >
                {card?.color}
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold", fontFamily: "Poppins" }}
                >
                  {card?.type}
                </Typography>

                {/* Balance */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "1rem",
                  }}
                >
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Balance:
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "12px", sm: "14px" },
                    }}
                  >
                    {card?.balance}
                  </Typography>
                </Box>

                {/* Currency */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "1rem",
                  }}
                >
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Currency:
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "12px", sm: "14px" },
                      textTransform: "uppercase",
                    }}
                  >
                    {card?.currency}
                  </Typography>
                </Box>

                {/* Created At */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "1rem",
                  }}
                >
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Created At:
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "12px", sm: "14px" },
                    }}
                  >
                    {moment(card?.created_at).format("MMMM D, YYYY h:mm A")}
                  </Typography>
                </Box>

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
                    <Button
                      onClick={() => handleQuantityChange(index, -1)}
                      variant="outlined"
                      size="small"
                    >
                      -
                    </Button>
                    <Typography
                      variant="body1"
                      sx={{ display: "inline", margin: "0 1rem" }}
                    >
                      {card.quantity || 1}
                    </Typography>
                    <Button
                      onClick={() => handleQuantityChange(index, 1)}
                      variant="outlined"
                      size="small"
                    >
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
                    Price: $
                    {card.totalPrice?.toFixed(2) || (card.price * 1).toFixed(2)}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#8AE700",
                      color: "black",
                      fontFamily: "Poppins",
                      "&:hover": { backgroundColor: "#76c300" },
                      textTransform: "none",
                    }}
                    onClick={() => handleAddToCart(card)}
                  >
                    Add To Cart
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
