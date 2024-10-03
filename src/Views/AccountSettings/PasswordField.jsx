import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  TextField,
  useTheme,
} from "@mui/material";
import React from "react";

const PasswordField = ({ label, defaultValue }) => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  return (
    <FormControl fullWidth>
      <FormLabel sx={{ mb: 1 }}>{label}</FormLabel>
      <TextField
        type={showPassword ? "text" : "password"}
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? (
                  <VisibilityOff
                    sx={{
                      color: theme.palette.custom.benefitCardImg,
                    }}
                  />
                ) : (
                  <Visibility
                    sx={{
                      color: theme.palette.custom.benefitCardImg,
                    }}
                  />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
        InputLabelProps={{
          shrink: false,
        }}
        defaultValue={defaultValue}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgba(0, 0, 0, 0.23)", // Change border color (default)
            },
            "&:hover fieldset": {
              borderColor: "rgba(0, 0, 0, 0.23)", // Change border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "rgba(0, 0, 0, 0.23)", // Change border color when focused
            },
          },
        }}
      />
    </FormControl>
  );
};

export default PasswordField;
