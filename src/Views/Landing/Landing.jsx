import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Box, styled } from "@mui/material";

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

      <MainContent></MainContent>
      <Footer />
    </StyledRoot>
  );
};

export default Landing;
