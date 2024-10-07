import {
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
  styled,
  Typography,
  Button,
} from "@mui/material";
import RegistrationLogo from "../../assets/images/registrationLogo.svg";
import RightSide from "../../assets/images/Right-Side.svg";
import FormField from "./FormField";
import PasswordField from "./PasswordField";
import { theme } from "../../Theme";

const Registration = () => {
  const GreenCheckbox = styled(Checkbox)(({ theme }) => ({
    "&.Mui-checked": {
      color: theme.palette.custom.benefitCardImg, // Green when checked
    },
  }));

  return (
    <Stack direction="row">
      <Box
        flex={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          py: { xs: 4, lg: 8 },
        }}
      >
        <Stack
          direction="column"
          sx={{ alignItems: "center", width: "60%", gap: 2 }}
        >
          <img
            src={RegistrationLogo}
            alt="RegistrationLogo Logo"
            style={{ width: "98px", height: "75px", objectFit: "cover" }}
          />
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "16px", lg: "24px", xl: "32px" },
            }}
          >
            Create your account
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "10px", lg: "14px", xl: "16px" },
              textAlign: "center",
              color: theme.palette.custom.signInColor,
            }}
          >
            Credentials are only used to authenticates the user to use our
            services. All data will be stored in your database.{" "}
          </Typography>

          <FormField
            label={"Full Name"}
            type={"text"}
            defaultValue={"Hamza Yaseen"}
            formControlStyle={{ marginTop: 3 }}
          />

          <FormField
            label={"Email"}
            type={"email"}
            defaultValue={"hamzayasin499@gmail.com"}
            formControlStyle={{ marginTop: 3 }}
          />

          <PasswordField
            label={"Password"}
            type={"password"}
            defaultValue={"hamzayasin499@gmail.com"}
            formControlStyle={{ marginTop: 1 }}
          />

          <PasswordField
            label={"Confirm Password"}
            type={"password"}
            defaultValue={"hamzayasin499@gmail.com"}
            formControlStyle={{ marginTop: 1 }}
          />

          <Stack
            direction={"row"}
            sx={{
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <FormControlLabel
              control={<GreenCheckbox defaultChecked />}
              label="I agree with Terms and Conditions."
              sx={{
                fontSize: {
                  xs: "10px",
                  md: "14px",
                  fontWeight: 400,
                  marginLeft: 3,
                },
              }}
            />
            <div />
          </Stack>
          <Button
            sx={{
              backgroundColor: theme.palette.custom.benefitCardImg,
              color: theme.palette.custom.white,
              width: "100%",
              textTransform: "none",
              py: 1.2,
            }}
          >
            Register
          </Button>
        </Stack>

        <Typography
          sx={{
            color: theme.palette.custom.signInColor,
            fontSize: { xs: "10px", lg: "14px", xl: "16px" },
          }}
        >
          Have an account?
          <span
            style={{
              color: theme.palette.custom.benefitCardImg,
              fontWeight: 600,
            }}
          >
            {" "}
            Sign in!
          </span>
        </Typography>
      </Box>
      <Box
        flex={1}
        sx={{
          display: { xs: "none", lg: "flex" },
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
        }}
      >
        <img
          src={RightSide}
          alt="right-side"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
    </Stack>
  );
};

export default Registration;
