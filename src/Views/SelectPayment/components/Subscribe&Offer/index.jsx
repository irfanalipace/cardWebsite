import { useTheme } from "@emotion/react";
import {
  Button,
  InputAdornment,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";

const SubscribeGetOffer = () => {
  const theme = useTheme();

  const ApplyButton = styled(Button)({
    backgroundColor: theme.palette.custom.cartTextPurple, // Bright green background similar to your image
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
      backgroundColor: theme.palette.custom.cartTextPurple, // Darker green on hover
    },
  });

  return (
    <Stack
      direction="row"
      sx={{
        gap: 3,
        justifyContent: "center",
        alignItems: "center",
        px: 4,
        py: 5,
        backgroundColor: theme.palette.custom.subscribeOfferBackground,
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "27px",
          fontFamily: "poppins",
          color: theme.palette.custom.black,
        }}
      >
        SUBSCRIBE AND GET SPECIAL OFFERS AND NEWS
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        {/* TextField with placeholder */}
        <TextField
          variant="outlined"
          placeholder="Enter your email"
          sx={{
            color: theme.palette.custom.subscribeTextField,
            width: "648px",
            height: "50px",
            backgroundColor: "#ffff",
            borderRadius: "3px",
            "& fieldset": { border: "none" },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <ApplyButton variant="contained">Subscribe</ApplyButton>
              </InputAdornment>
            ),
          }}
        />
        {/* Apply button */}
      </Stack>
    </Stack>
  );
};

export default SubscribeGetOffer;
