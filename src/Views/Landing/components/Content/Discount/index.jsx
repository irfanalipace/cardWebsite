import {
  Stack,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import DiscountBackgound from "../../../../../assets/images/DiscountBackground.jpg";
import { styled, useTheme } from "@mui/material/styles";

const Discount = () => {
  const theme = useTheme();
  const ApplyButton = styled(Button)({
    backgroundColor: theme.palette.custom.green, // Bright green background similar to your image
    color: "#fff", // White text color
    height: "50px", // Height adjustment to match text field
    position: "relative",
    top: "-3px",
    left: "14px",
    textTransform: "none",
    fontFamily: "poppins",
    fontWeight: 700,
    fontSize: "18px",
    "&:hover": {
      backgroundColor: "#33cc00", // Darker green on hover
    },
  });

  return (
    <Stack
      sx={{
        backgroundImage: `url(${DiscountBackgound})`,
        backgroundSize: "cover", // Makes sure the image covers the entire area
        backgroundPosition: "center", // Centers the image
        height: "250px", // Example height, you can adjust this based on your layout
        width: "100%", // Full width
        direction: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Typography
        sx={{
          color: theme.palette.custom.white,
          fontWeight: 700,
          fontSize: "36px",
          textAlign: "center",
        }}
      >
        Enter a Discount Code
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        {/* TextField with placeholder */}
        <TextField
          variant="outlined"
          placeholder="XXX - XXX - XXX"
          sx={{
            width: "648px",
            height: "50px",
            backgroundColor: "#ffff",
            borderRadius: "3px",
            "& fieldset": { border: "none" },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <ApplyButton variant="contained">Apply</ApplyButton>
              </InputAdornment>
            ),
          }}
        />
        {/* Apply button */}
      </Stack>
    </Stack>
  );
};

export default Discount;
