import { useTheme } from "@emotion/react";
import { Stack, Typography, Box } from "@mui/material";
import DeleteIcon from "../../../../assets/images/Delete-icon.svg";

const CheckYourCart = () => {
  const theme = useTheme();
  return (
    <Stack direction="column">
      <Typography
        sx={{
          color: theme.palette.custom.black,
          fontWeight: 700,
          fontSize: "34px",
          fontFamily: "poppins",
        }}
      >
        Check Your Cart
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography>100 CAD Brown Mastercard</Typography>
        <Typography
          component={"Box"}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <span>$10999 X 5</span>
          <Typography component={"span"}>$4554</Typography>
          <img src={DeleteIcon} alt="delete-icon" />
        </Typography>
      </Box>
    </Stack>
  );
};

export default CheckYourCart;
