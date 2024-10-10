import {
  FormControl,
  FormHelperText,
  FormLabel,
  TextField,
} from "@mui/material";

const FormField = ({
  name,
  label,
  type,
  formControlStyle,
  placeholder,
  value,
  onChange,
  error,
  helperText,
}) => {
  return (
    <FormControl fullWidth>
      <FormLabel sx={{ mb: 1, ...formControlStyle }}>{label}</FormLabel>
      <TextField
        name={name}
        type={type}
        variant="outlined"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={!!error}
        InputLabelProps={{
          shrink: false,
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: error ? "red" : "rgba(0, 0, 0, 0.23)", // Change border color (default)
            },
            "&:hover fieldset": {
              borderColor: error ? "red" : "rgba(0, 0, 0, 0.23)", // Change border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: error ? "red" : "rgba(0, 0, 0, 0.23)", // Change border color when focused
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

export default FormField;
