import { Outlet } from "react-router-dom";
import { Box, Stack, styled } from "@mui/material";
import HeaderOrderSections from "../../Views/Landing/components/Header/HeaderOrderSections";

const HistoryLayout = () => {
  const StyledRoot = styled(Box)(({ theme }) => ({
    minHeight: "100vh",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  }));

  return (
    <StyledRoot>
      <HeaderOrderSections />
      <Stack
        direction="column"
        sx={{
          width: "100%",
          zIndex: 1,
          marginTop: "100px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Outlet />
      </Stack>
    </StyledRoot>
  );
};

export default HistoryLayout;
