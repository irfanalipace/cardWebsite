import { useTheme } from "@emotion/react";
import { Stack, Typography, Box } from "@mui/material";
import DeleteIcon from "../../../../assets/images/Delete-icon.svg";

const CheckYourCart = () => {
  const theme = useTheme();
  return (
    <Stack direction="column" sx={{ justifyContent: "center", width: "100%" }}>
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
          width: "50%",
          backgroundColor: theme.palette.custom.cartTextBackground,
          p: 1.4,
          borderRadius: "7px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "poppins",
            fontWeight: 500,
            color: theme.palette.custom.black,
            fontSize: "16px",
          }}
        >
          100 CAD Brown Mastercard
        </Typography>
        <Typography
          component={"Box"}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Typography
            component={"span"}
            sx={{
              color: theme.palette.custom.cartTextGray,
              fontWeight: 500,
              fontSize: "16px",
            }}
          >
            $10999 X 5
          </Typography>
          <Typography
            component={"span"}
            sx={{
              color: theme.palette.custom.cartTextPurple,
              fontWeight: 700,
              fontSize: "16px",
            }}
          >
            $4554
          </Typography>
          <img src={DeleteIcon} alt="delete-icon" />
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "50%",
          p: 1.4,
        }}
      >
        <Typography
          component={"span"}
          sx={{
            color: theme.palette.custom.black,
            fontWeight: 700,
            fontSize: "18px",
            fontFamily: "poppins",
          }}
        >
          TOTAL
        </Typography>
        <Typography
          component={"span"}
          sx={{
            color: theme.palette.custom.cartTextPurple,
            fontWeight: 700,
            fontSize: "22px",
          }}
        >
          $4554
        </Typography>
      </Box>
    </Stack>
  );
};

export default CheckYourCart;
