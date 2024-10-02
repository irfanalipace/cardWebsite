import { Box, styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import MasterCardImageBackground from "./MasterCardImageBackground";
import Footer from "../../Views/Landing/components/Footer";
import HeaderOrderSections from "../../Views/Landing/components/Header/HeaderOrderSections";

const StyledRoot = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  position: "relative",
}));

const MainContent = styled(Box)(({ theme }) => ({
  flex: 1,
  zIndex: 1,
  marginTop: "100px",
}));

const InformationLayout = () => {
  return (
    <StyledRoot>
      <HeaderOrderSections />
      <MainContent>
        <MasterCardImageBackground />
        <Outlet />
      </MainContent>
      <Footer />
    </StyledRoot>
  );
};

export default InformationLayout;
