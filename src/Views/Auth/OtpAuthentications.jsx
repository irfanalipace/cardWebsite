import { Button, CircularProgress, Paper } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resendOtp, verifyOtp } from "../../store/actions/authActions";
import { useNavigate } from "react-router-dom";

const OtpAuthentications = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);

  const email = useSelector((state) => state.auth?.user.email);
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (/^[0-9]$/.test(element.value)) {
      let newOtp = [...otp];
      newOtp[index] = element.value;
      setOtp(newOtp);

      if (element.nextSibling) {
        element.nextSibling.focus();
      }
    }
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  const handleResendOtp = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      const isSuccess = await dispatch(resendOtp(email));
      if (isSuccess) {
        setLoader(false);
        setOtp(new Array(4).fill(""));
      }
    } catch (error) {
      setLoader(false);
      const formattedErrors = {};
      error.errors.forEach((err) => {
        formattedErrors[err.path[0]] = err.message;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const Otp = otp.join("");
      const data = { otp: Otp, email };
      const isSuccess = await dispatch(verifyOtp(data));
      if (isSuccess) {
        setOtp(new Array(4).fill(""));
        navigate("/history");
      }
    } catch (error) {
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
            Please enter the four-digit verification code we have sent to{" "}
            <br></br>
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
            <span style={styles.resendLink} onClick={handleResendOtp}>
              Resend OTP
            </span>
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
            {loader ? ( // Show loader or Sign in text
              <CircularProgress size={24} sx={{ color: "white" }} />
            ) : (
              "Sign in"
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
  },
};

export default OtpAuthentications;
