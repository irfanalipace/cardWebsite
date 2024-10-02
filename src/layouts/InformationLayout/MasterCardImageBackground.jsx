import { Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DiscountBackgound from "../../assets/images/DiscountBackground.jpg";
import BackNavigation from "../../assets/images/WhiteBackNavigation.svg";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MasterCardImageBackground = () => {
  const theme = useTheme();
  const location = useLocation();
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (location.pathname.includes("contact-us")) {
      setTitle("Contact Us");
    } else if (location.pathname.includes("help-center")) {
      setTitle("Help Center");
    } else if (location.pathname.includes("refund-policy")) {
      setTitle("Refund Policy");
    } else {
      setTitle(""); // Default or fallback title, if needed
    }

    return () => {
      setTitle(""); // Reset the title on unmount
    };
  }, [location]);

  return (
    <Stack
      sx={{
        backgroundImage: `url(${DiscountBackgound})`,
        backgroundSize: "cover", // Makes sure the image covers the entire area
        backgroundPosition: "center", // Centers the image
        height: "250px", // Example height, you can adjust this based on your layout
        width: "100%", // Full width
        direction: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        position: "relative",
      }}
    >
      <img
        src={BackNavigation}
        alt="White-Back-Navigation"
        style={{
          objectFit: "cover",
          position: "absolute",
          top: 50,
          left: 30,
        }}
      />
      <Typography
        sx={{
          color: theme.palette.custom.white,
          fontWeight: 700,
          fontSize: "42px",
          textAlign: "center",
          fontFamily: "poppins",
        }}
      >
        {title}
      </Typography>
    </Stack>
  );
};

export default MasterCardImageBackground;
