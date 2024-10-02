import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import { useTheme } from "@emotion/react";

const SelectInput = () => {
  const theme = useTheme();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        gap: 2,
      }}
    >
      <FormControl sx={{ width: "70%", height: "50px" }}>
        <InputLabel id="demo-simple-select-label">
          Select your payment method
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label=" Select your payment method"
          placeholder=" Select your payment method"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Button
        sx={{
          width: "30%",
          mt: 0.5,
          height: "55px",
          backgroundColor: theme.palette.custom.cartTextPurple,
          fontSize: "14px",
          fontFamily: "poppins",
          color: theme.palette.custom.white,
        }}
      >
        BUY NOW
      </Button>
    </Box>
  );
};

export default SelectInput;
