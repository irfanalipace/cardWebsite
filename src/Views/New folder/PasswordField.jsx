import {
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  InputAdornment,
  TextField,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const PasswordField = ({
  label,
  placeholder,
  formControlStyle,
  value,
  onChange,
  name,
  error,
  helperText,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  return (
    <FormControl fullWidth>
      <FormLabel sx={{ mb: 1, ...formControlStyle }}>{label}</FormLabel>

      <TextField
        name={name}
        type={showPassword ? "email" : "password"}
        placeholder={placeholder}
        variant="outlined"
        value={value}
        onChange={onChange}
        error={!!error}
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
      {error && (
        <FormHelperText sx={{ color: "#e60000" }}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};

export default PasswordField;
