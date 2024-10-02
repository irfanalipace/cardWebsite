import { useTheme } from "@emotion/react";
import BenefitCard from "../../../../../assets/images/benefit-card.svg";
import BenefitOnlineSupport from "../../../../../assets/images/benefit-online-support.svg";
import BenefitPurchasing from "../../../../../assets/images/benefit-purchasing.svg";
import BenefitRefund from "../../../../../assets/images/benefit-refund.svg";
import BenefitInstant from "../../../../../assets/images/benefit-24-delivery.svg";
import BenefitGreatSelection from "../../../../../assets/images/benefit-great-selection.svg";
import BenefitWorldWide from "../../../../../assets/images/benefit-world-wide.svg";
import BenefitDiscount from "../../../../../assets/images/benefit-discount.svg";

import { Grid, Stack, Card, CardContent, Typography, Box } from "@mui/material";
import CustomBenefitCard from "./CustomBenefitCard";

const KeyBenefits = () => {
  const theme = useTheme();

  const features = [
    {
      title: "Card Anonymity",
      description:
        "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet lorem ipsum dolor sit amet consectetur amet ipsum dolor sit amet lorem ipsum dolor sit.",
      img: BenefitCard,
    },
    {
      title: "Online Support",
      description:
        "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet lorem ipsum dolor sit amet consectetur amet ipsum dolor sit amet lorem ipsum dolor sit..",
      img: BenefitOnlineSupport,
    },
    {
      title: "Purchasing Process Secrecy",
      description:
        "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet lorem ipsum dolor sit amet consectetur amet ipsum dolor sit amet lorem ipsum dolor sit.",
      img: BenefitPurchasing,
    },
    {
      title: "Possibility of Refund",
      description:
        "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet lorem ipsum dolor sit amet consectetur amet ipsum dolor sit amet lorem ipsum dolor sit.",
      img: BenefitRefund,
    },
    {
      title: "Instant 24/7 Delivery",
      description:
        "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet lorem ipsum dolor sit amet consectetur amet ipsum dolor sit amet lorem ipsum dolor sit.",
      img: BenefitInstant,
    },
    {
      title: "Great Selection",
      description:
        "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet lorem ipsum dolor sit amet consectetur amet ipsum dolor sit amet lorem ipsum dolor sit.",
      img: BenefitGreatSelection,
    },
    {
      title: "Worldwide Access",
      description:
        "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet lorem ipsum dolor sit amet consectetur amet ipsum dolor sit amet lorem ipsum dolor sit..",
      img: BenefitWorldWide,
    },
    {
      title: "Discount",
      description:
        "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet lorem ipsum dolor sit amet consectetur amet ipsum dolor sit amet lorem ipsum dolor sit.",
      img: BenefitDiscount,
    },
  ];

  return (
    <Stack
      sx={{
        backgroundColor: theme.palette.custom.KeyBenefitsBackground,
        direction: "column",
        justifyContent: "center",
        alignItems: "center",
        py: 10,
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
          sx={{ fontWeight: 700, fontSize: {md:"35px", sm:"20px"}, fontFamily: "poppins" }}
        >
          KEY BENEFITS OF OUR FINANCIAL PRODUCTS
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
          fontSize: {md:"17px", sm:"15px"},
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

      <Box sx={{ py: {md:5, sm:1}, px:{md:10, sm:5} }}>
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <CustomBenefitCard
              key={index}
              img={feature.img}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};

export default KeyBenefits;
