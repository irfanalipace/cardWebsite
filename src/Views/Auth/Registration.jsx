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
import RegistrationLogo from "../../assets/images/registrationLogo.svg";
import RightSide from "../../assets/images/Right-Side.svg";
import FormField from "./FormField";
import PasswordField from "./PasswordField";
import { theme } from "../../Theme";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registrationSchema } from "../../utils/ValidationsSchemas/RegisrationSchema";
import { register } from "../../store/actions/authActions";
import { useDispatch } from "react-redux";

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const GreenCheckbox = styled(Checkbox)(({ theme }) => ({
    "&.Mui-checked": {
      color: theme.palette.custom.benefitCardImg,
    },
  }));

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
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
      registrationSchema.parse(formValues);

      const isSuccess = await dispatch(register(formValues));
      if (isSuccess) {
        setFormValues({
          name: "",
          email: "",
          password: "",
        });
        setFormErrors({});
        navigate("/otp-authentication", { state: { type: "register" } });
      }
      setLoader(false);
    } catch (error) {
      const formattedErrors = {};
      error.errors.forEach((err) => {
        formattedErrors[err.path[0]] = err.message;
      });
      setLoader(false);
      setFormErrors(formattedErrors);
    }
  };

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
            name={"name"}
            label={"Full Name"}
            type={"text"}
            placeholder={"Hamza Yaseen"}
            formControlStyle={{ marginTop: 3 }}
            value={formValues.name}
            onChange={handleInputChange}
            error={!!formErrors.name}
            helperText={formErrors.name}
          />

          <FormField
            name={"email"}
            label={"Email"}
            type={"email"}
            placeholder={"hamzayasin499@gmail.com"}
            formControlStyle={{ marginTop: 3 }}
            value={formValues.email}
            onChange={handleInputChange}
            error={!!formErrors.email}
            helperText={formErrors.email}
          />

          <PasswordField
            name={"password"}
            label={"Password"}
            type={"password"}
            defaultValue={"**************"}
            formControlStyle={{ marginTop: 1 }}
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
            onClick={handleSubmit}
          >
            {loader ? (
              <CircularProgress size={24} sx={{ color: "white" }} />
            ) : (
              "Register"
            )}
          </Button>
        </Stack>

        <Typography
          sx={{
            color: theme.palette.custom.signInColor,
            fontSize: { xs: "10px", lg: "14px", xl: "16px" },
          }}
        >
          Have an account?
          <Link
            to={"/login"}
            style={{
              color: theme.palette.custom.benefitCardImg,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            {" "}
            Sign in!
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
