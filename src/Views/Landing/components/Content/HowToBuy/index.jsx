import { useTheme } from "@emotion/react";
import {
  Stack,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

const HowToBuy = () => {
  const theme = useTheme();

  const faqItems = [
    { title: "How to pay with cryptocurrencies?" },
    { title: "How to pay with Perfect Money?" },
    { title: "Tips and recommendations for trouble-free payments?" },
    { title: "What to do if you have not received or lost your card?" },
    { title: "Overpayment or Underpayment: What to Do?" },
  ];
  return (
    <Stack
      sx={{
        backgroundColor: theme.palette.custom.white,
        direction: "column",
        justifyContent: "center",
        alignItems: "center",
        py: 5,
        gap: 3,
      }}
    >
      <Stack
        direction={"column"}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          width: "70%",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{ fontWeight: 700, fontSize: "40px", fontFamily: "poppins" }}
        >
          HOW TO BUY
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "20px",
            fontFamily: "poppins",
            m: 0,
            p: 0,
            color: theme.palette.custom.benefitDescription,
          }}
        >
          Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet
          consectetur lorem ipsum dolor sit amet consectetur lorem ipsum dolor
          sit amet consectetur .
        </Typography>
      </Stack>

      <Box sx={{ width: "90%", mx: "auto", mt: 4 }}>
        {faqItems.map((item, index) => (
          <Accordion
            key={index}
            sx={{
              backgroundColor: theme.palette.custom.howToBuyAccordion,
              mb: 2.5,
              boxShadow: "none",

              "&:before": {
                display: "none", // Remove default shadow line above accordion
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                <AddIcon
                  sx={{
                    backgroundColor: theme.palette.custom.green,
                    color: "#fff",
                    fontSize: "28px",
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    p: 0.3,
                  }}
                />
              }
              sx={{
                "& .MuiAccordionSummary-content": {
                  justifyContent: "space-between",
                  alignItems: "center",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  fontSize: "16px",
                  fontFamily: "poppins",
                  color: theme.palette.custom.black,
                }}
              >
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                pulvinar lorem vitae ex ultricies, vel tempor libero
                sollicitudin.
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Stack>
  );
};

export default HowToBuy;
