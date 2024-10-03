import { Box, useTheme } from "@mui/material";
import HistoryCardTabs from "./History&CardsTabs";
import HistoryTable from "./HistoryTable";
import PurchaseCards from "./PurchaseCards";
import { useState } from "react";

const OrderHistoryPurchaseCard = () => {
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState("Order History"); 

 
  const handleTabChange = (newTab) => {
    setSelectedTab(newTab);
  };

  return (
    <Box
      flex={1}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        gap: 5,
        width: "90%",
        minHeight: "100vh",
        mb: 10,
        backgroundColor: theme.palette.custom.historyLayoutBackgroundColor,
        borderTopLeftRadius: "13px",
        borderTopRightRadius: "13px",
      }}
    >
      <HistoryCardTabs
        selectedTab={selectedTab}
        onTabChange={handleTabChange}
      />
      {selectedTab === "Order History" ? <HistoryTable /> : <PurchaseCards />}
    </Box>
  );
};

export default OrderHistoryPurchaseCard;
