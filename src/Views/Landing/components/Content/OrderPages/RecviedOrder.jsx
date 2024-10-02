import React from "react";
import {
  Box,
  Card,
  Typography,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#f0f0f0",
  padding: theme.spacing(3),
  marginTop: theme.spacing(3),
  width: "100%", 
  maxWidth: "600px", // To prevent card from being too wide on large screens
  margin: "0 auto", // Centering the card
  fontFamily: "Poppins, sans-serif",
}));

const RecviedOrder = () => {
  return (
    <Box
      sx={{
        padding: { xs: "10px", sm: "20px" }, // Responsive padding
        textAlign: "center",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {/* Content Section */}
        <Grid item xs={12} md={8}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Step 4:
              <span style={{ color: "#00000066" }}> Receive your cards</span>
            </Typography>
            <Typography
              fontWeight="bold"
              sx={{ marginTop: "12px", marginBottom: "12px" }}
            >
              Please Wait
            </Typography>
            <Typography variant="body1" paragraph>
              Your payment will be accepted after receiving the required number
              of confirmations from the Bitcoin network. The confirmation time
              depends on the network's workload and does not usually exceed 60
              minutes. The cards will be at your disposal a few minutes after we
              receive the full amount of your payment.
            </Typography>
          </Box>
        </Grid>

        {/* Card Section */}
        <Grid item xs={12} md={8}>
          <StyledCard elevation={2}>
            <Box>
              <Typography variant="body1" sx={{ color: "#00000066" }}>
                Payment:
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                TXN9E194FA0A321A9F58C56B0901D02A54E280
              </Typography>
            </Box>

            <Box mt={2}>
              <Typography variant="body1" sx={{ color: "#00000066" }}>
                BTC address:
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                TXN9E194FA0A321A9F58C56B0901D02A54E280
              </Typography>
            </Box>

            <Box mt={2}>
              <Typography variant="body1" sx={{ color: "#00000066" }}>
                Total Amount To Send:
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                $548584.546
              </Typography>
            </Box>

            <Box mt={2}>
              <Typography variant="body1" sx={{ color: "#00000066" }}>
                Received So Far:
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                $000000.00
              </Typography>
            </Box>

            <Box mt={2}>
              <Typography variant="body1" sx={{ color: "#00000066" }}>
                * Please save your Payment ID. It will help us trace your
                payment in case of a problem.
              </Typography>
              <Typography variant="body1" color="#8AE700">
                Check Your Payment Status
              </Typography>
            </Box>
          </StyledCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RecviedOrder;
