import { useState } from "react";
import {
  Grid,
  Typography,
  Box,
  Button,
  MenuItem,
  FormControl,
} from "@mui/material";

import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

import { CustomSelect, IconComponent, StyledInput } from "./styles";
import PurchaseCards from "../../../../OrderHistory&PurchaseCards/PurchaseCards";

const PrepaidCard = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [type, setType] = useState("");
  const [currency, setCurrency] = useState("");
  const [cards, setCards] = useState([]);

  const handleCancel = () => {
    setType("");
    setCurrency("");
    setIsFilterOpen(false);
  };

  const filterCards = () => {
    if (!isFilterOpen) {
      setIsFilterOpen(true);
    }

    const filtered = cards.filter((card) => {
      const matchesType = type ? card.type === type : true;
      const matchesCurrency = currency ? card.currency === currency : true;

      return matchesType && matchesCurrency;
    });

    setCards(filtered);
  };

  return (
    <Box
      sx={{
        padding: { xs: "1rem", sm: "2rem" },
        textAlign: "center",
        background: "#3453071A",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          marginBottom: "1rem",
          fontFamily: "Poppins",
          fontSize: { xs: "24px", sm: "28px" },
        }}
      >
        VIRTUAL PREPAID CREDIT HOURS
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: "2rem",
          fontFamily: "Poppins",
          fontSize: { xs: "14px", sm: "16px" },
        }}
      >
        Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet
        consectetur lorem ipsum dolor sit amet consectetur.
        <br />
        consectetur lorem ipsum dolor sit amet consectetur.
      </Typography>
      <Box sx={{ paddingBottom: "1rem" }}>
        <Grid
          container
          spacing={2}
          justifyContent="flex-end"
          alignItems="center"
        >
          {isFilterOpen && (
            <>
              <Grid item xs={6} sm={4}>
                <FormControl fullWidth>
                  <CustomSelect
                    value={type}
                    onChange={(event) => setType(event.target.value)}
                    input={<StyledInput />}
                    IconComponent={IconComponent}
                    displayEmpty
                  >
                    <MenuItem value="" disabled>
                      Select MasterCard
                    </MenuItem>
                    <MenuItem value={"Visa"}>Visa</MenuItem>
                    <MenuItem value={"Master"}>Master</MenuItem>
                  </CustomSelect>
                </FormControl>
              </Grid>

              <Grid item xs={6} sm={4}>
                <FormControl fullWidth>
                  <CustomSelect
                    value={currency}
                    onChange={(event) => setCurrency(event.target.value)}
                    input={<StyledInput />}
                    IconComponent={IconComponent}
                    displayEmpty
                  >
                    <MenuItem value="" disabled>
                      Select Currency
                    </MenuItem>
                    <MenuItem value="usd">USD</MenuItem>
                    <MenuItem value="eur">EUR</MenuItem>
                    <MenuItem value="pkr">PKR</MenuItem>
                  </CustomSelect>
                </FormControl>
              </Grid>

              <Grid item xs={6} sm={2}>
                <Button
                  variant="outlined"
                  onClick={handleCancel}
                  sx={{
                    marginRight: "1rem",
                    padding: "12px",
                    width: "100%",
                    borderColor: "#8AE700",
                    color: "black",
                    textTransform: "none",
                  }}
                >
                  Cancel
                </Button>
              </Grid>
            </>
          )}

          <Grid item xs={6} sm={2}>
            <Button
              variant="contained"
              onClick={filterCards}
              sx={{
                backgroundColor: "#8AE700",
                color: "black",
                padding: "12px",
                width: "100%",
                textTransform: "none",
              }}
              endIcon={<FilterAltOutlinedIcon />}
            >
              {isFilterOpen ? "Apply Filter" : "Filter"}
            </Button>
          </Grid>
        </Grid>
      </Box>
      <PurchaseCards cards={cards} setCards={setCards} />
    </Box>
  );
};

export default PrepaidCard;
