import { createTheme } from "@mui/material";
import KeyBenefits from "./Views/Landing/components/Content/KeyBenefits";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#007bff",
    },
    secondary: {
      main: "#f50057",
    },
    fontFamily: {
      poppins: "Poppins, sans-serif",
    },
    custom: {
      white: "#ffffff",
      green: "#39e600",
      black: "#000000",
      KeyBenefitsBackground: "#FBFBFF",
      benefitDescription: "#575757",
      benefitCardDescription: "#8B8B8B",
      benefitCardImg: " #8AE700",
      howToBuyAccordion:"#EAF0EF"
    },
  },
});
