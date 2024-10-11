import { useTheme } from "@emotion/react";
import { Stack, Typography, Box } from "@mui/material";
import DeleteIcon from "../../../../assets/images/Delete-icon.svg";
import SelectInput from "../SelectInput";
import SubscribeGetOffer from "../Subscribe&Offer";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotalPrice } from "../../../../utils/helper";

const CheckYourCart = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const cartItems = useSelector((state) => state?.cart?.items);
  console.log(cartItems);

  const deleteCartItem = (itemId) => {
    console.log("delte functio======");

    dispatch({ type: "REMOVE_ITEM", payload: itemId });
  };

  return (
    <Stack sx={{ direction: "column", gap: 6, py: 5 }}>
      <Stack
        direction="column"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          gap: 3,
        }}
      >
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

        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            gap: 2,
          }}
        >
          {cartItems?.map((item) => (
            <Box
              key={item?.id}
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
                {item?.type}
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
                  ${item?.price} X {item?.quantity}
                </Typography>
                <Typography
                  component={"span"}
                  sx={{
                    color: theme.palette.custom.cartTextPurple,
                    fontWeight: 700,
                    fontSize: "16px",
                  }}
                >
                  ${item?.totalPrice}
                </Typography>
                <img
                  src={DeleteIcon}
                  alt="delete-icon"
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteCartItem(item?.id)}
                />
              </Typography>
            </Box>
          ))}

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
              ${calculateTotalPrice(cartItems)}
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
            <SelectInput />
          </Box>
        </Stack>
      </Stack>

      <Stack sx={{ px: 4, gap: 2 }}>
        <Typography
          sx={{ fontWeight: "bold", fontFamily: "poppins", fontSize: "32px" }}
        >
          What will you get after the payment?
        </Typography>
        <Typography component={"Box"}>
          Once you have paid, your card number, expiration date and CVV2/CVC2
          will be provided to you. If you have opted for a manual payment
          method, your card data will be sent to your email address. For payment
          methods in automatic mode, the card data will be provided to you
          immediately after payment is received and right on the website. Please
          refer to our{" "}
          <Typography
            component={"span"}
            sx={{
              textDecoration: "underline",
              textUnderlineOffset: "3px",
              color: theme.palette.custom.cartTextPurple,
            }}
          >
            Terms and Conditions
          </Typography>{" "}
          section to learn more about the legitimate use of Ezzocard cards. In
          case of an overpayment or an underpayment, please read{" "}
          <Typography
            component={"span"}
            sx={{
              textDecoration: "underline",
              textUnderlineOffset: "3px",
              color: theme.palette.custom.cartTextPurple,
            }}
          >
            here.
          </Typography>
        </Typography>
      </Stack>
      <SubscribeGetOffer />
    </Stack>
  );
};

export default CheckYourCart;
