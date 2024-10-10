import { Button, Paper } from "@mui/material";
import { useState } from "react";
import { verifyOtp } from "../../store/actions/authActions";
import { useDispatch } from "react-redux";

const VerifyPassword = () => {
  const dispatch = useDispatch();
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (/^[0-9]$/.test(element.value)) {
      let newOtp = [...otp];
      newOtp[index] = element.value;
      setOtp(newOtp);

      // Move to the next input field
      if (element.nextSibling) {
        element.nextSibling.focus();
      }
    } else if (element.value === "") {
      // Allow backspace to delete the input
      let newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
      if (element.previousSibling) {
        element.previousSibling.focus();
      }
    }
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(verifyOtp(otp));

      setOtp(new Array(4).fill(""));
    } catch (error) {
      // Handle validation errors
      const formattedErrors = {};
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
            Please enter the four-digit verification code we have sent to <br />
            <span style={styles.email}>hamzayasin499@gmail.com</span>
          </p>

          <div style={styles.otpContainer}>
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
                style={styles.otpBox}
              />
            ))}
          </div>

          <p style={styles.resendText}>
            Don't receive the OTP?{" "}
            <span style={styles.resendLink}>Resend OTP</span>
          </p>

          <Button
            sx={{
              ...styles.confirmButton,
              backgroundColor: isOtpComplete ? "#8AE700" : "#E0E0E0",
              "&:hover": {
                backgroundColor: isOtpComplete ? "#74B600" : "#E0E0E0",
              },
            }}
            onClick={handleSubmit}
            disabled={!isOtpComplete}
          >
            Verify & Proceed
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
    color: "#fff",
    padding: "15px 30px",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    width: "100%",
    marginTop: "16px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default VerifyPassword;
