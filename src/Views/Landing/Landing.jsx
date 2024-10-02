import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Box, styled } from "@mui/material";
import HeroSections from "./components/Content/HomePage/HeroSections";
import heroimage from "../../assets/images/vector.png";
import OfferSections from "./components/Content/HomePage/OfferSections";
import PrepaidCard from "./components/Content/HomePage/PrepaidCard";

const StyledRoot = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  position: "relative",
}));

const BackgroundImage = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "20%",
  backgroundImage: `url(${heroimage})`,
  backgroundSize: "cover",
  backgroundPosition: "top",
  zIndex: -1,
}));

const MainContent = styled(Box)(({ theme }) => ({
  flex: 1,
  zIndex: 1,
  paddingTop: "80px",
}));

const Landing = () => {
  return (
    <StyledRoot>
      <BackgroundImage />
      <Header />

      <MainContent>
        <HeroSections />
        <OfferSections />
        <PrepaidCard />
      </MainContent>
      <Footer />
    </StyledRoot>
  );
};

export default Landing;
