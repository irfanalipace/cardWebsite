import { Box, Grid, Typography, Button, Avatar, useTheme } from "@mui/material";

import HamzaProfile from "../../assets/images/HamzaProfile.svg";
import FormField from "./FormField";
import PasswordField from "./PasswordField";

const AccountSetting = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.custom.historyLayoutBackgroundColor,
        borderTopLeftRadius: "13px",
        borderTopRightRadius: "13px",
        px: 5,
        py: 5,
      }}
    >
      {/* Account Settings Header */}
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          mb: { xs: 2, md: 4 },
          fontSize: { xs: "24px", md: "32px" }, // Responsive font size
          textAlign: { xs: "center", md: "left" }, // Center on small screens
        }}
      >
        Account Setting
      </Typography>

      <Grid container spacing={{ xs: 5, md: 10 }} sx={{ py: 2 }}>
        {/* Left Side: Form */}
        <Grid item xs={12} md={9}>
          {/* Basic Details Section */}
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              mb: 2,
              fontSize: { xs: "18px", md: "24px" }, // Responsive font size
            }}
          >
            Basic Details
          </Typography>

          <Grid container spacing={3}>
            {/* First Name */}
            <Grid item xs={12} md={6}>
              <FormField label={"First Name"} defaultValue="Hamza Yasin" />
            </Grid>

            {/* Last Name */}
            <Grid item xs={12} md={6}>
              <FormField label={"Last Name"} defaultValue="Hamza Yasin" />
            </Grid>

            {/* Email */}
            <Grid item xs={12} md={6}>
              <FormField
                label={"Email"}
                defaultValue="hamzayasin499@gmail.com"
              />
            </Grid>

            {/* Phone Number */}
            <Grid item xs={12} md={6}>
              <FormField label={"Phone Number"} defaultValue="+92 3001234567" />
            </Grid>

            {/* Address */}
            <Grid item xs={12}>
              <FormField
                label={"Address"}
                defaultValue="DHA Phase 8, Broadway, Block D, Fifth Floor, building 120"
              />
            </Grid>
          </Grid>

          {/* Change Password Section */}
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              mt: 5,
              mb: 2,
              fontSize: { xs: "18px", md: "24px" }, // Responsive font size
            }}
          >
            Change Password
          </Typography>

          <Grid container spacing={3}>
            {/* Current Password */}
            <Grid item xs={12}>
              <PasswordField
                label={"Current Password "}
                defaultValue="Hamza Yasin"
              />
            </Grid>

            {/* New Password */}
            <Grid item xs={12}>
              <PasswordField
                label={"New Password"}
                defaultValue="Hamza Yasin"
              />
            </Grid>

            {/* Retype New Password */}
            <Grid item xs={12}>
              <PasswordField
                label={"Retype New Passwor"}
                defaultValue="Hamza Yasin"
              />
            </Grid>
          </Grid>

          {/* Action Buttons */}
          <Box
            sx={{
              mt: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-end" },
              width: "100%",
              gap: 4,
            }}
          >
            <Button
              variant="text"
              sx={{
                fontWeight: 500,
                fontSize: { xs: "13px", md: "18px" },
                textTransform: "none",
                color: theme.palette.custom.accountSettingCancel,
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.custom.benefitCardImg,
                boxShadow: "none",
                fontWeight: 500,
                fontSize: { xs: "13px", md: "18px" },
                textTransform: "none",
              }}
            >
              Update
            </Button>
          </Box>
        </Grid>

        {/* Right Side: Profile Picture */}
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start", // Align Avatar and Button in the same row
              justifyContent: { xs: "center", md: "flex-start" },
              gap: 2, // Space between Avatar and Button
              mt: { xs: 2, md: 0 }, // Add margin-top on small screens
            }}
          >
            <Avatar
              src={HamzaProfile} // Profile Picture URL
              sx={{ width: "130px", height: "132px", borderRadius: "18px" }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.custom.benefitCardImg,
                boxShadow: "none",
                fontWeight: 700,
                height: "40px",
                width: "130px",
                fontSize: { xs: "13px", md: "18px" },
                textTransform: "none",
              }}
            >
              Change
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AccountSetting;
