import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { theme } from "../../Theme";
import { contactApi } from "../../store/actions/contactActions";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  // State for validation errors
  const [errors, setErrors] = useState({});

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Reset errors
    setErrors({});

    // Create the order object with the relevant data
    const orderData = {
      name: `${firstName} ${lastName}`,
      email: email,
      message: message,
      phoneNumber: phoneNumber, // Optionally include phone number
    };

    // Log the payload to verify values
    console.log("Payload to be sent:", orderData);

    // Call the contact API with the order data
    contactApi(orderData).then(response => {
      if (response.success) {
        // Handle success (reset the form, show a success message, etc.)
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
      } else {
        // Handle API validation errors
        setErrors(response.payload);
      }
    }).catch(error => {
      // Handle any other errors
      console.error("API error:", error);
    });
  };

  return (
    <Box
      flex={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 6,
      }}
      component="form" // Change to form for submission
      onSubmit={handleSubmit} // Attach the submit handler
    >
      <Grid container spacing={2} sx={{ px: 3, columnGap: 2, rowGap: 2 }}>
        <Grid item xs={11.8} md={5.8}>
          <TextField
            label={"First Name"}
            placeholder={"John"}
            value={firstName} // Bind state to input
            onChange={(e) => setFirstName(e.target.value)} // Update state on input change
            fullWidth
            variant="outlined"
          />
          {errors.name && (
            <Typography color="error" variant="body2">{errors.name}</Typography>
          )}
        </Grid>
        <Grid item xs={11.8} md={5.8}>
          <TextField
            label={"Last Name"}
            placeholder={"Doe"}
            value={lastName} // Bind state to input
            onChange={(e) => setLastName(e.target.value)} // Update state on input change
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={11.8} md={11.8}>
          <TextField
            label={"Email"}
            placeholder={"abc@gmail.com"}
            value={email} // Bind state to input
            onChange={(e) => setEmail(e.target.value)} // Update state on input change
            fullWidth
            variant="outlined"
          />
          {errors.email && (
            <Typography color="error" variant="body2">{errors.email}</Typography>
          )}
        </Grid>
     

        <Grid item xs={11.8}>
          <TextField
            label={"Message"}
            placeholder={"Write your message.."}
            value={message} // Bind state to input
            onChange={(e) => setMessage(e.target.value)} // Update state on input change
            fullWidth
            variant="outlined"
            multiline
            rows={4} // Optional for multiline messages
          />
          {errors.message && (
            <Typography color="error" variant="body2">{errors.message}</Typography>
          )}
        </Grid>
      </Grid>

      <Stack
        direction="row"
        sx={{ alignItems: "center", justifyContent: "space-between", pr: 4 }}
      >
        <div></div>
        <Button
          type="submit" // Change button type to submit
          sx={{
            backgroundColor: theme.palette.custom.benefitCardImg,
            textTransform: "none",
            color: theme.palette.common.white,
            px: 2.5,
            py: 1.3,
          }}
        >
          Send Message
        </Button>
      </Stack>
    </Box>
  );
};

export default ContactForm;
