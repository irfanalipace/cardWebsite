import { useState } from "react";
import {
  TextField,
  IconButton,
  InputAdornment,
  Button,
  Paper,
  CircularProgress,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../store/actions/authActions";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const location = useLocation();
  const email = location.state?.email;
  const verification_token = useSelector(
    (state) => state.auth?.forgetPasswordVerificationToken
  );

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async () => {
    setLoader(true);
    try {
      const data = {
        email,
        password,
        password_confirmation,
        verification_token,
      };
      const isSuccess = await dispatch(changePassword(data));
      if (isSuccess) {
        setPassword("");
        setPasswordConfirmation("");
        navigate("/history");
      }
      setLoader(false);
    } catch (error) {
      const formattedErrors = {};
      setLoader(false);
      error.errors.forEach((err) => {
        formattedErrors[err.path[0]] = err.message;
      });
    }
  };

  return (
    <div style={styles.outerContainer}>
      <Paper elevation={3} style={styles.paperContainer}>
        <h3 style={styles.heading}>Change Password</h3>
        <p style={styles.description}>
          Input your new desired password in the input fields below to create a
          new password.
        </p>

        {/* Password Input */}
        <Typography
          sx={{ textAlign: "left", fontWeight: "500", margin: "4px" }}
        >
          Password
        </Typography>
        <TextField
          placeholder="*********"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          style={styles.textField}
          InputLabelProps={{
            shrink: false,
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "rgba(0, 0, 0, 0.23)", // Change border color (default)
              },
              "&:hover fieldset": {
                borderColor: "rgba(0, 0, 0, 0.23)", // Change border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "rgba(0, 0, 0, 0.23)", // Change border color when focused
              },
            },
          }}
        />

        {/* Confirm Password Input */}
        <Typography
          sx={{ textAlign: "left", fontWeight: "500", margin: "4px" }}
        >
          Confirm Password
        </Typography>
        <TextField
          placeholder="*********"
          variant="outlined"
          type={showConfirmPassword ? "text" : "password"}
          value={password_confirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          fullWidth
          style={styles.textField}
          InputLabelProps={{
            shrink: false,
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={toggleConfirmPasswordVisibility}>
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "rgba(0, 0, 0, 0.23)", // Change border color (default)
              },
              "&:hover fieldset": {
                borderColor: "rgba(0, 0, 0, 0.23)", // Change border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "rgba(0, 0, 0, 0.23)", // Change border color when focused
              },
            },
          }}
        />

        {/* Confirm Button */}
        <Button
          variant="contained"
          style={styles.confirmButton}
          onClick={handleSubmit}
          fullWidth
        >
          {loader ? (
            <CircularProgress size={24} sx={{ color: "white" }} />
          ) : (
            "Confirm"
          )}
        </Button>
      </Paper>
    </div>
  );
};

// Styling for the components
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
    marginBottom: "15px", // Adjust padding here for spacing below the heading
    color: "#333",
  },
  description: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "25px", // Adjust padding here for spacing below the description
    lineHeight: "1.5",
  },
  textField: {
    marginBottom: "20px", // Adjust padding here for spacing below each input field
  },
  confirmButton: {
    backgroundColor: "#8AE700",
    color: "#fff",
    padding: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    textTransform: "none",
  },
};

export default ChangePassword;
