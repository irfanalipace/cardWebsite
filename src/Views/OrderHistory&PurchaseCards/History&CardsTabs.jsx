import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";

export default function HistoryCardTabs({ selectedTab, onTabChange }) {
  const theme = useTheme();
  const [indicatorWidth, setIndicatorWidth] = React.useState(0);
  const [indicatorLeft, setIndicatorLeft] = React.useState(0);

  // Handle tab change
  const handleChange = (event, newValue) => {
    onTabChange(newValue); // Call the parent function to update the selected tab
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
        width: "100%",
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
        sx={{
          "& .MuiTabs-indicator": {
            display: "none", // Hide the default indicator
          },
        }}
      >
        <Tab
          id="Order-History"
          value="Order History"
          label="Order History"
          sx={{
            color: selectedTab === "Order History" ? "#8AE700" : "#000000",
            textTransform: "none",
            fontSize: { xs: "16px", md: "20px" },
            fontFamily: "Poppins",
            padding: "10px 0",
            flexGrow: 1,
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
            fontSize: { xs: "16px", md: "20px" },
            fontFamily: "Poppins",
            padding: "10px 0",
            flexGrow: 1,
            "&.Mui-selected": {
              color: "#8AE700",
            },
          }}
        />
      </Tabs>

      {/* Custom indicator */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: indicatorLeft,
          width: indicatorWidth,
          height: "3px",
          backgroundColor: "#8AE700",
          borderRadius: "2px",
          transition: "left 0.3s ease, width 0.3s ease",
        }}
      />
    </Box>
  );
}
