import {
  Box,
  Grid,
  Typography,
  Button,
  Avatar,
  useTheme,
  CircularProgress,
} from "@mui/material";

import HamzaProfile from "../../assets/images/HamzaProfile.svg";
import FormField from "../Auth/FormField";
import PasswordField from "../Auth/PasswordField";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../store/actions/accountSettingActions";

const AccountSetting = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const user = useSelector((state) => state?.auth?.user);
  const [loader, setLoader] = useState(false);
  const fileInputRef = useRef(null);
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    address: "",
    image: null,
    current_password: "",
    new_password: "",
    new_password_confirmation: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: name === "image" ? event.target?.files[0] : value,
    });
  };

  const handleChangeImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      const formData = new FormData();
      formData.append("name", formValues.name);
      formData.append("phone", formValues.phone);
      formData.append("address", formValues.address);
      formData.append("image", formValues.image);
      formData.append("current_password", formValues.current_password);
      formData.append("new_password", formValues.new_password);
      formData.append(
        "new_password_confirmation",
        formValues.new_password_confirmation
      );

      const { success, data } = await dispatch(updateProfile(formData));
      if (success) {
        setFormValues((prevData) => ({ ...prevData, ...data }));
      }
    } catch (err) {
      console.log(err.errors[0].message || "Failed to update profile");
    } finally {
      setLoader(false);
    }
  };

  console.log(user.image);

  useEffect(() => {
    if (user) {
      setFormValues((prevValues) => ({
        ...prevValues,
        name: user.name || "",
        phone: user.phone || "",
        address: user.address || "",
        image: user.image || null,
      }));
    }
  }, [user]);

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
            {/* Full Name */}
            <Grid item xs={12} md={6}>
              <FormField
                label={"Full Name"}
                placeholder="Hamza Yasin"
                name={"name"}
                type={"text"}
                formControlStyle={{ marginTop: 3 }}
                value={formValues.name}
                onChange={handleInputChange}
              />
            </Grid>

            {/* Phone Number */}
            <Grid item xs={12} md={6}>
              <FormField
                label={"Phone Number"}
                placeholder="+92 3001234567"
                name={"phone"}
                type={"text"}
                formControlStyle={{ marginTop: 3 }}
                value={formValues.phone}
                onChange={handleInputChange}
              />
            </Grid>

            {/* Address */}
            <Grid item xs={12}>
              <FormField
                label={"Address"}
                placeholder="DHA Phase 8, Broadway, Block D, Fifth Floor, building 120"
                name={"address"}
                type={"text"}
                formControlStyle={{ marginTop: 3 }}
                value={formValues.address}
                onChange={handleInputChange}
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
                name={"current_password"}
                type={"password"}
                placeholder={"**************"}
                formControlStyle={{ marginTop: 1 }}
                value={formValues.current_password}
                onChange={handleInputChange}
              />
            </Grid>

            {/* New Password */}
            <Grid item xs={12}>
              <PasswordField
                label={"New Password"}
                name={"new_password"}
                type={"password"}
                placeholder={"**************"}
                formControlStyle={{ marginTop: 1 }}
                value={formValues.new_password}
                onChange={handleInputChange}
              />
            </Grid>

            {/* Retype New Password */}
            <Grid item xs={12}>
              <PasswordField
                label={"Retype New Password"}
                name={"new_password_confirmation"}
                type={"password"}
                placeholder={"**************"}
                formControlStyle={{ marginTop: 1 }}
                value={formValues.new_password_confirmation}
                onChange={handleInputChange}
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
              onClick={handleProfileUpdate}
            >
              {loader ? (
                <CircularProgress size={24} sx={{ color: "white" }} />
              ) : (
                "Update"
              )}
            </Button>
          </Box>
        </Grid>

        {/* Right Side: Profile Picture */}
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: { xs: "center", md: "flex-start" },
              gap: 2,
              mt: { xs: 2, md: 0 },
            }}
          >
            <Avatar
              src={
                formValues.image instanceof File
                  ? URL.createObjectURL(formValues.image)
                  : formValues.image && typeof formValues.image === "string"
                  ? formValues.image
                  : HamzaProfile
              } // Profile Picture URL
              sx={{ width: "130px", height: "132px", borderRadius: "18px" }}
            />
            <input
              type="file"
              name="image"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleInputChange}
            />
            <Button
              type="button"
              name="image"
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
              onClick={handleChangeImageClick}
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
