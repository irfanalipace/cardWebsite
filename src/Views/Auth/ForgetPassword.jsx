import {
  TextField,
  Button,
  Paper,
  Typography,
  FormHelperText,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { z } from "zod";
import { forgotPassword } from "../../store/actions/authActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);

  const emailSchema = z.string().email("Invalid email format");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
      emailSchema.parse(email);
      const isSuccess = await dispatch(forgotPassword(email));
      if (isSuccess) {
        setError("");
        navigate("/otp-authentication", {
          state: { type: "forgot_password", forgot_email: email },
        });
        setLoader(false);
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
        setLoader(false);
      }
    }
  };
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
          placeholder="Email Address"
          variant="outlined"
          fullWidth
          style={styles.textField}
          name={name}
          value={email}
          error={!!error}
          onChange={(e) => setEmail(e.target.value)}
          InputLabelProps={{
            shrink: false,
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: error ? "red" : "rgba(0, 0, 0, 0.23)", // Change border color (default)
              },
              "&:hover fieldset": {
                borderColor: error ? "red" : "rgba(0, 0, 0, 0.23)", // Change border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: error ? "red" : "rgba(0, 0, 0, 0.23)", // Change border color when focused
              },
            },
          }}
        />
        {error && (
          <FormHelperText sx={{ color: "#e60000" }}>{error}</FormHelperText>
        )}

        <Button
          variant="contained"
          style={{
            ...styles.requestButton,
            backgroundColor: !email ? "#E0E0E0" : "#8AE700",
            "&:hover": {
              backgroundColor: !email ? "#E0E0E0" : "#74B600",
            },
          }}
          fullWidth
          onClick={handleSubmit}
          disabled={!email}
        >
          {loader ? (
            <CircularProgress size={24} sx={{ color: "white" }} />
          ) : (
            "Request Password Change"
          )}
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
    color: "#fff",
    padding: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "24px",
    textTransform: "none",
  },
};

export default ForgetPassword;
