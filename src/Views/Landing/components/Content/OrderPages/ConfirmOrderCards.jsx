import React from "react";
import {
  Box,
  Card,
  Typography,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import Footer from "../../Footer";

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#f0f0f0",
  padding: theme.spacing(3),
  marginTop: theme.spacing(3),
  width: "94%",
  fontFamily: "Poppins, sans-serif",
}));

const ConfirmOrderCards = () => {
  return (
    <Box
      sx={{
        padding: "20px",
        textAlign: "center",
        fontFamily: "Poppins, sans-serif",
       
      }}
    >
      {" "}
     
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Step 2: Confirm Your Order
      </Typography>
      <Typography variant="body1" paragraph>
      Your cards have been successfully booked You have 3 minutes to confirm your order and <br></br> proceed to the payment process (Step 3) Do not reload this page.
      </Typography>
      <StyledCard elevation={2}>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography variant="body1" fontWeight="bold">100 CAD MASTERCARD</Typography>
         
          <Typography variant="body1" fontWeight="bold">$1983.44 * 45</Typography>
          <Typography variant="body1" fontWeight="bold">$43732.89</Typography>
        </Box>

        <Divider />

        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="body1" sx={{color:"#00000066"}}>Payment:</Typography>
          <Typography variant="body1">
            <Box component="span" display="flex" alignItems="center" sx={{color:"#00000066"}}>
              <CurrencyBitcoinIcon
                style={{ fontSize: "20px", marginRight: "5px", color:"#00000066"}}
              />{" "}
              BTC
            </Box>
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" mt={1}>
          <Typography variant="body1" fontWeight="bold">
            Total USD:
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            $78.99
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" mt={1}>
          <Typography variant="body1" fontWeight="bold">
            Total BTC:
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            0000000000.45 BTC
          </Typography>
        </Box>
      </StyledCard>
      <Box sx={{ marginTop: "15px" }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          02:35 Minutes Remaining
        </Typography>
        <Typography variant="body1" paragraph>
          We recommend you enter your email so that our{" "}
          <Box component="span" sx={{ color: "#8AE700", fontWeight: "bold" }}>
            Support Team
          </Box>{" "}
          could contact you if necessary.
        </Typography>
      </Box>
      <Box sx={{ marginTop: "15px", width: "100%" }}>
        <TextField
          placeholder="Enter Your Email"
          type="text"
          name="email"
          style={{
            width: "100%",
            marginBottom: "15px",
            fontFamily: "Poppins, sans-serif",
          }} 
        />
      </Box>
      <Box sx={{ marginTop: "15px", width: "100%", display: "flex", gap: 2 }}>
        <Button
          style={{
            background: "#7D7E84",
            padding: "12px",
            color: "white",
            flex: 1,
            fontFamily: "Poppins, sans-serif",
          }} 
        >
          Cancel
        </Button>
        <Button
          style={{
            background: "#8AE700",
            padding: "12px",
            color: "white",
            flex: 1,
            fontFamily: "Poppins, sans-serif",
          }} 
        >
          Pay with BTC
        </Button>
      </Box>
      
    </Box>
  );
};

export default ConfirmOrderCards;
