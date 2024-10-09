import { Button, CircularProgress, Paper } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resendOtp, verifyOtp } from "../../store/actions/authActions";
import { useLocation, useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";

const OtpAuthentications = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [loader, setLoader] = useState(false);
  const type = location.state?.type || "register";
  const forgot_email = location.state?.forgot_email;
  const email = useSelector((state) => state.auth?.user?.email);

  const [otp, setOtp] = useState("");

  const handleChange = (otpValue) => {
    // Update the OTP state when the value changes
    setOtp(otpValue);

    // If the length of the OTP value is less than 4, focus on the next input
    const inputs = document.querySelectorAll("input");
    const lastIndex = otpValue.length - 1;

    if (lastIndex >= 0 && inputs[lastIndex]) {
      inputs[lastIndex].focus(); // Focus the last entered input
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && otp[index] === "") {
      // Focus on the previous input if the current one is empty
      const inputs = document.querySelectorAll("input");
      if (index > 0) {
        inputs[index - 1].focus(); // Move focus to the previous input
      }
    }
  };

  const handleResendOtp = async (e) => {
    e.preventDefault();
    try {
      const isSuccess = await resendOtp({
        email: type === "forgot_password" ? forgot_email : email,
        type,
      });
      if (isSuccess) {
        setOtp("");
      }
    } catch (error) {
      const formattedErrors = {};
      error.errors.forEach((err) => {
        formattedErrors[err.path[0]] = err.message;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const data = {
        otp,
        email: type === "forgot_password" ? forgot_email : email,
        type,
      };
      const isSuccess = await dispatch(verifyOtp(data));
      if (isSuccess && type === "register") {
        setOtp("");
        navigate("/history");
      } else if (isSuccess && type === "forgot_password") {
        setOtp("");
        navigate("/change-password", {
          state: {
            email: forgot_email,
          },
        });
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
        <div style={styles.container}>
          <h2 style={styles.heading}>OTP Authentication</h2>
          <p style={styles.description}>
            Please enter the four-digit verification code we have sent to{" "}
            <br></br>
            <span style={styles.email}>{email}</span>
          </p>

          <div style={styles.otpContainer}>
            <OtpInput
              numInputs={4}
              value={otp}
              onChange={handleChange}
              onFocus={(e) => e.target.select()}
              onKeyDown={(e, index) => handleKeyDown(e, index)}
              renderInput={(props) => <input {...props} />}
              inputStyle={styles.otpBox}
            />
          </div>

          <p style={styles.resendText}>
            Don't receive the OTP?{" "}
            <span style={styles.resendLink} onClick={handleResendOtp}>
              Resend OTP
            </span>
          </p>

          <Button
            sx={{
              ...styles.confirmButton,
              backgroundColor: otp ? "#8AE700" : "#E0E0E0",
              "&:hover": {
                backgroundColor: otp ? "#74B600" : "#E0E0E0",
              },
            }}
            onClick={handleSubmit}
            disabled={!otp}
          >
            {loader ? ( // Show loader or Sign in text
              <CircularProgress size={24} sx={{ color: "white" }} />
            ) : (
              "Verify"
            )}
          </Button>
        </div>
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
    backgroundColor: "#f0f0f0",
  },
  paperContainer: {
    padding: "40px",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  description: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "20px",
  },
  email: {
    color: "#8AE700",
    fontWeight: "bold",
  },
  otpContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "200px",
    marginBottom: "20px",
  },
  otpBox: {
    width: "40px",
    height: "40px",
    fontSize: "20px",
    textAlign: "center",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginRight: "10px",
    outline: "none",
    backgroundColor: "#fff",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  resendText: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "20px",
  },
  resendLink: {
    color: "#8AE700",
    cursor: "pointer",
    fontWeight: "bold",
  },
  confirmButton: {
    backgroundColor: "#8AE700",
    color: "#fff",
    padding: "15px 30px",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    width: "100%",
    marginTop: "16px",
    cursor: "pointer",
    fontWeight: "bold",
    textTransform: "none",
  },
};

export default OtpAuthentications;
