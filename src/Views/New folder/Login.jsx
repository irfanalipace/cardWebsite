import {
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
  styled,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import Logo from "../../assets/images/Logo.svg";
import RightSide from "../../assets/images/Right-Side.svg";
import FormField from "./FormField";
import PasswordField from "./PasswordField";
import { theme } from "../../Theme";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginSchema } from "../../utils/ValidationsSchemas/LoginSchema";
import { login } from "../../store/actions/authActions";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const GreenCheckbox = styled(Checkbox)(({ theme }) => ({
    "&.Mui-checked": {
      color: theme.palette.custom.benefitCardImg, // Green when checked
    },
  }));

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      loginSchema.parse(formValues);

      const isSuccess = await dispatch(login(formValues));
      if (isSuccess) {
        setFormValues({
          email: "",
          password: "",
        });
        setLoader(false);
        setFormErrors({});
        navigate("/history");
      }
    } catch (error) {
      const formattedErrors = {};
      setLoader(false);
      error.errors.forEach((err) => {
        formattedErrors[err.path[0]] = err.message;
      });
      setFormErrors(formattedErrors);
    }
  };

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
            placeholder={"hamzayasin499@gmail.com"}
            formControlStyle={{ marginTop: 3 }}
            name={"email"}
            value={formValues.email}
            onChange={handleInputChange}
            error={!!formErrors.email}
            helperText={formErrors.email}
          />

          <PasswordField
            label={"Password"}
            type={"password"}
            placeholder={"*************"}
            formControlStyle={{ marginTop: 1 }}
            name={"password"}
            value={formValues.password}
            onChange={handleInputChange}
            error={!!formErrors.password}
            helperText={formErrors.password}
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
            <Link
              to="/forget-password"
              style={{
                color: theme.palette.custom.benefitCardImg,
                textDecoration: "none",
              }}
            >
              Forgot Password?
            </Link>
          </Stack>
          <Button
            sx={{
              backgroundColor: theme.palette.custom.benefitCardImg,
              color: theme.palette.custom.white,
              width: "100%",
              textTransform: "none",
              py: 1.2,
            }}
            onClick={handleSubmit}
          >
            {loader ? (
              <CircularProgress size={24} sx={{ color: "white" }} />
            ) : (
              "Sign in"
            )}
          </Button>
        </Stack>

        <Typography sx={{ color: theme.palette.custom.signInColor }}>
          Don’t have an account?
          <Link
            to="/registration"
            style={{
              color: theme.palette.custom.benefitCardImg,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            {" "}
            Sign up!
          </Link>
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
