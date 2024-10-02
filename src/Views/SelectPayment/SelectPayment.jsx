import { Box, styled } from "@mui/material";
import Discount from "../Landing/components/Content/Discount";
import KeyBenefits from "../Landing/components/Content/KeyBenefits";
import HowToBuy from "../Landing/components/Content/HowToBuy";
import HeroSections from "../Landing/components/Content/HomePage/HeroSections";
import heroimage from "../../assets/images/vector.png";
import OfferSections from "../Landing/components/Content/HomePage/OfferSections";
import PrepaidCard from "../Landing/components/Content/HomePage/PrepaidCard";
import Header from "../Landing/components/Header";
import Footer from "../Landing/components/Footer";
import CheckYourCart from "./components/CheckYourCart";

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
  height: "10%",
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

const SelectPayment = () => {
  return (
    <StyledRoot>
      <BackgroundImage />
      <Header />
      <MainContent>
        <HeroSections />
        <OfferSections />
        <PrepaidCard />
        <Discount />
        <CheckYourCart />

        <KeyBenefits />
        <HowToBuy />
      </MainContent>
      <Footer />
    </StyledRoot>
  );
};

export default SelectPayment;
