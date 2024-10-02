import { FormControl, Input, InputLabel } from "@mui/material";

const FormField = ({ label, placeholder }) => {
  return (
    <FormControl variant="standard" fullWidth>
      <InputLabel
        htmlFor="component-simple"
        shrink={true}
        sx={{
          "&.Mui-focused": {
            color: "black", // Stop changing color when focused
          },
        }}
      >
        {label}
      </InputLabel>
      <Input
        id="component-simple"
        placeholder={placeholder}
        sx={{
          "&:before": {
            borderBottomColor: "black", // Default underline color
          },
          "&:after": {
            borderBottomColor: "transparent", // Disable primary color on focus
          },
          "&.Mui-focused:before": {
            borderBottomColor: "black", // Keep underline black when focused
          },
        }}
      />
    </FormControl>
  );
};

export default FormField;
