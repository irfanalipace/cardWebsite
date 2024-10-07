import { Paper } from '@mui/material';
import React, { useState } from 'react';

const OtpAuthentications = () => {
  const [otp, setOtp] = useState(new Array(4).fill('')); // Create an array of 4 input boxes for OTP

  const handleChange = (element, index) => {
    // Allow only numeric input and focus on next box
    if (/^[0-9]$/.test(element.value)) {
      let newOtp = [...otp];
      newOtp[index] = element.value;
      setOtp(newOtp);

      // Focus on next input box if not the last one
      if (element.nextSibling) {
        element.nextSibling.focus();
      }
    }
  };

  return (
    <div style={styles.outerContainer}>
      <Paper elevation={3} style={styles.paperContainer}>
        <div style={styles.container}>
          <h2 style={styles.heading}>OTP Authentication</h2>
          <p style={styles.description}>
            Please enter the four-digit verification code we have sent to{' '}<br></br>
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
                onFocus={(e) => e.target.select()} // Select the input when focused
                style={styles.otpBox}
              />
            ))}
          </div>

          <p style={styles.resendText}>
            Don't receive the OTP?{' '}
            <span style={styles.resendLink}>Resend OTP</span>
          </p>

          <button style={styles.confirmButton}>Confirm</button>
        </div>
      </Paper>
    </div>
  );
};

// Styling for the components
const styles = {
  outerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', // Ensure it's full height of the screen
    backgroundColor: '#f0f0f0',
  },
  paperContainer: {
    padding: '40px',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  },
  description: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '20px',
  },
  email: {
    color: '#8AE700',
    fontWeight: 'bold',
  },
  otpContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '200px',
    marginBottom: '20px',
  },
  otpBox: {
    width: '40px',
    height: '40px',
    fontSize: '20px',
    textAlign: 'center',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginRight: '10px',
    outline: 'none',
    backgroundColor: '#fff',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  resendText: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '20px',
  },
  resendLink: {
    color: '#8AE700',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  confirmButton: {
    backgroundColor: '#8AE700',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    width: '100%',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default OtpAuthentications;
