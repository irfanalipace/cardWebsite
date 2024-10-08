import React from "react";
import { TextField, Button, Paper, Typography } from "@mui/material";

const ForgetPassword = () => {
  return (
    <div style={styles.outerContainer}>
      <Paper elevation={3} style={styles.paperContainer}>
        <h3 style={styles.heading}>Forgot your Password?</h3>
        <p style={styles.description}>
          Don’t worry, we can help you out! If you still remember your email
          address, you can quickly reset your password.
        </p>
        <Typography
          sx={{ textAlign: "left", fontWeight: "500", margin: "4px" }}
        >
          Email
        </Typography>
        <TextField
          label="Email Address"
          variant="outlined"
          fullWidth
          style={styles.textField}
        />

        <Button variant="contained" style={styles.requestButton} fullWidth>
          Request Password Change
        </Button>
      </Paper>
    </div>
  );
};

const styles = {
  outerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f9f9f9",
  },
  paperContainer: {
    padding: "40px",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#333",
  },
  description: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "25px",
    lineHeight: "1.5",
  },
  textField: {
    marginBottom: "25px",
  },
  requestButton: {
    backgroundColor: "#8AE700",
    color: "#fff",
    padding: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "24px",
  },
};

export default ForgetPassword;
