import {
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  TextField,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const PasswordField = ({ label, defaultValue, formControlStyle }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  return (
    <FormControl fullWidth>
      <FormLabel sx={{ mb: 1, ...formControlStyle }}>{label}</FormLabel>

      <TextField
        type={showPassword ? "email" : "password"}
        defaultValue={defaultValue}
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
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
