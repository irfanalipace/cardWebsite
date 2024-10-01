import { Box, Button, Stack, styled } from "@mui/material";
import React from "react";
import ToastComp from "../../../../components/toast/ToastComp";
import { request } from "../../../../services/axios";
import Discount from "./Discount";
import KeyBenefits from "./KeyBenefits";
import HowToBuy from "./HowToBuy";

const StyledRoot = styled(Box)(({ theme }) => ({
  minHeight: "80vh",
}));
const Content = () => {
  const handleToast = () => {
    ToastComp({
      variant: "success",
      message: "This is success message",
    });
  };
  const handleRequest = async () => {
    const resp = await request({
      url: `/sport/coaches/id`,
      method: "post",
    });
  };
  return (
    <Stack>
      <StyledRoot>
        <Button variant="contained" onClick={handleToast}>
          Success Toast
        </Button>
        <Button onClick={handleRequest}>Hit API REQ</Button>
      </StyledRoot>
      <Discount />
      <KeyBenefits />
      <HowToBuy />
    </Stack>
  );
};

export default Content;
