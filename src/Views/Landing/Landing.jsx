import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Box, styled } from "@mui/material";
import Discount from "./components/Content/Discount";
import KeyBenefits from "./components/Content/KeyBenefits";
import HowToBuy from "./components/Content/HowToBuy";

const StyledRoot = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
}));

const MainContent = styled(Box)(({ theme }) => ({
  flex: 1,
}));

const Landing = () => {
  return (
    <StyledRoot>
      <Header />

      <MainContent>
        <Discount />
        <KeyBenefits />
        <HowToBuy />
      </MainContent>
      <Footer />
    </StyledRoot>
  );
};

export default Landing;
