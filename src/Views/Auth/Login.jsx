import {
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
  styled,
  Typography,
  Button,
} from "@mui/material";
import Logo from "../../assets/images/Logo.svg";
import RightSide from "../../assets/images/Right-Side.svg";
import FormField from "./FormField";
import PasswordField from "./PasswordField";
import { theme } from "../../Theme";

const Login = () => {
  const GreenCheckbox = styled(Checkbox)(({ theme }) => ({
    "&.Mui-checked": {
      color: theme.palette.custom.benefitCardImg, // Green when checked
    },
  }));

  return (
    <Stack direction="row" sx={{ height: "100vh" }}>
      <Box
        flex={1}
        paddingY={{ xs: 4, lg: 8 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Stack
          direction="column"
          sx={{ alignItems: "center", width: "60%", gap: 2 }}
        >
          <img
            src={Logo}
            alt="logo"
            style={{ width: "98px", height: "75px", objectFit: "cover" }}
          />
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "16px", lg: "24px", xl: "32px" },
            }}
          >
            Welcome back!
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "10px", lg: "14px", xl: "16px" },
              textAlign: "center",
              color: theme.palette.custom.signInColor,
            }}
          >
            Please input your information in the fields below to enter your
            Journey platform.{" "}
          </Typography>

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
              label="Remember me"
              sx={{
                fontSize: {
                  xs: "10px",
                  md: "14px",
                  fontWeight: 400,
                  marginLeft: 3,
                },
              }}
            />
            <Typography sx={{ color: theme.palette.custom.benefitCardImg }}>
              Forgot Password?
            </Typography>
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
            Sign in
          </Button>
        </Stack>

        <Typography sx={{ color: theme.palette.custom.signInColor }}>
          Don’t have an account?
          <span
            style={{
              color: theme.palette.custom.benefitCardImg,
              fontWeight: 600,
            }}
          >
            {" "}
            Sign up!
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
          width: "100%",
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

export default Login;
