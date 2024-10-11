import { createTheme } from "@mui/material";
import RefundPolicy from "./Views/RefundPolicy";

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
      accountSettingCancel: "#4C535F",
      black: "#000000",
      black2: " #0C0507",
      benefitDescription: "#575757",
      benefitCardDescription: "#8B8B8B",
      benefitCardImg: " #8AE700",
      cartTextPurple: "#5656F2",
      cartTextGray: "#848484",
      cartTextBackground: "#4747471A",
      contactInformation: "#7ED300",
      delete: "#FF0000",
      deleteHover: "#e60000",
      green: "#39e600",
      headerGreen: "#345307",
      getInTouchDescription: "#929292",
      howToBuyAccordion: "#EAF0EF",
      helpCardBorder: "#00000040",
      KeyBenefitsBackground: "#FBFBFF",
      refundPolicyText: "#A4A4A4",
      RefundPolicyAccordion: "#444444",
      subscribeOfferBackground: "#E3E3E3",
      subscribeTextField: "#8A8A8A",
      tableCellText: "#999999",
      tableBodyBackground: "#F8F9FB",
      white: "#ffffff",
      whiteShadow: "#F7F7F7",
      historyLayoutBackgroundColor: "#F7F8FA",
      signInColor: "#666687",
    },
  },
});
