import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";

export default function HistoryCardTabs({ selectedTab, onTabChange }) {
  const theme = useTheme();
  const [indicatorWidth, setIndicatorWidth] = React.useState(0);
  const [indicatorLeft, setIndicatorLeft] = React.useState(0);

  const handleChange = (event, newValue) => {
    onTabChange(newValue);
  };

  React.useEffect(() => {
    const selectedTabElement = document.getElementById(
      selectedTab.replace(/\s+/g, "-")
    );
    if (selectedTabElement) {
      setIndicatorWidth(selectedTabElement.offsetWidth);
      setIndicatorLeft(selectedTabElement.offsetLeft);
    }
  }, [selectedTab]);

  return (
    <Box
      sx={{
        width: "60%",
        position: "relative",
        padding: theme.spacing(4),
        [theme.breakpoints.down("sm")]: {
          padding: theme.spacing(2),
        },
      }}
    >
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        aria-label="Order and Cards Tabs"
        variant="fullWidth"
        sx={{
          "& .MuiTabs-indicator": {
            display: "none",
          },
          display: "flex",
        }}
      >
        <Tab
          id="Order-History"
          value="Order History"
          label="Order History"
          sx={{
            color: selectedTab === "Order History" ? "#8AE700" : "#000000",
            textTransform: "none",
            fontSize: { xs: "14px", sm: "16px", md: "20px" },
            fontFamily: "Poppins",
            padding: { xs: "8px 0", md: "10px 0" },
            flexGrow: 1,
            maxWidth: "50%",
            "&.Mui-selected": {
              color: "#8AE700",
            },
          }}
        />
        <Tab
          id="Available-Cards-For-Purchase"
          value="Available Cards For Purchase"
          label="Available Cards For Purchase"
          sx={{
            color:
              selectedTab === "Available Cards For Purchase"
                ? "#8AE700"
                : "#000000",
            textTransform: "none",
            fontSize: { xs: "14px", sm: "16px", md: "20px" },
            fontFamily: "Poppins",
            padding: { xs: "8px 0", md: "10px 0" },
            flexGrow: 1,
            maxWidth: "50%",
            "&.Mui-selected": {
              color: "#8AE700",
            },
          }}
        />
      </Tabs>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: indicatorLeft,
          width: indicatorWidth,
          height: "2px",
          backgroundColor: "#8AE700",
          borderRadius: "2px",
          transition: "left 0.3s ease, width 0.3s ease",
        }}
      />
    </Box>
  );
}
