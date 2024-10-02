import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";

const PayOrder = () => {
  const btcAddress = "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa";
  const btcAmount = "0.005 BTC";

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied to clipboard: ${text}`);
  };

  return (
    <Box
      sx={{
        padding: "20px",
        textAlign: "center",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Step 3: Please send your money
      </Typography>
      <Typography variant="body1" paragraph>
        You have 30 minutes to start the payment process 
        <br />
        Do not reload this page.
      </Typography>

      <Box sx={{ marginTop: "15px" }}>
        <Typography
          variant="body1"
          fontWeight="bold"
          style={{ textAlign: "left", marginBottom: "3px" }}
        >
          BTC Address:
        </Typography>

        <Box display="flex" justifyContent="center" alignItems="center">
          <TextField
            value={btcAddress}
            variant="outlined"
            InputProps={{
              readOnly: true,
              style: { borderRadius: "4px", height: "45px" },
            }}
            sx={{ width: "100%", marginRight: 0 }}
          />
          <Button
            variant="outlined"
            onClick={() => copyToClipboard(btcAddress)}
            sx={{
              marginLeft: "-1px",
              padding: "9px",
              background: "#8AE700",
              color: "white",
            }}
          >
            Copy
          </Button>
        </Box>
        <Typography
          variant="body2"
          color="red"
          sx={{ textAlign: "left", marginTop: "4px" }}
        >
          Attention: This is a one-time address. You can use it to pay only this
          particular order.
        </Typography>
      </Box>

      <Box sx={{ marginTop: "15px" }}>
        <Typography
          variant="body1"
          fontWeight="bold"
          style={{ textAlign: "left", marginBottom: "3px" }}
        >
          BTC Amount:
        </Typography>

        <Box display="flex" justifyContent="center" alignItems="center">
          <TextField
            value={btcAmount}
            variant="outlined"
            InputProps={{
              readOnly: true,
              style: { borderRadius: "4px", height: "45px" },
            }}
            sx={{ width: "100%", marginRight: 0 }}
          />
          <Button
            variant="outlined"
            onClick={() => copyToClipboard(btcAmount)}
            sx={{
              marginLeft: "-1px",
              padding: "9px",
              background: "#8AE700",
              color: "white",
            }}
          >
            Copy
          </Button>
        </Box>
        <Typography
          variant="body2"
          color="red"
          style={{ textAlign: "left", marginTop: "4px" }}
        >
          Attention: User's wallet fee and transaction fee are not included in
          the amount. You may need to pay them additionally.
        </Typography>
      </Box>
      <Box sx={{ margin: "7px" }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          15:38 Minutes Remaining
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: "#939393" }}>
          Please click "Paid" as soon as you send your BTC
        </Typography>
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
          Cancel Order
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
          Paid
        </Button>
      </Box>
    </Box>
  );
};

export default PayOrder;
