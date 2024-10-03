import { FormControl, FormLabel, TextField } from "@mui/material";

const FormField = ({ label, type, defaultValue }) => {
  return (
    <FormControl fullWidth>
      <FormLabel sx={{ mb: 1 }}>{label}</FormLabel>
      <TextField
        variant="outlined"
        defaultValue={defaultValue}
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
    </FormControl>
  );
};

export default FormField;
