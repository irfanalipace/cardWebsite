import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";

import ChatUs from "../../assets/images/Chat'Us.svg";
import FAQS from "../../assets/images/Faq's.svg";
import SupportTicket from "../../assets/images/Support'Tickets.svg";
import HelpCard from "./HelpCard";

const HelpCenter = () => {
  const helps = [
    {
      title: "Chat With Us",
      description:
        "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet lorem ipsum dolor sit amet consectetur amet ipsum dolor sit amet lorem ipsum dolor sit.",
      img: ChatUs,
    },
    {
      title: "FAQ’S",
      description:
        "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet lorem ipsum dolor sit amet consectetur amet ipsum dolor sit amet lorem ipsum dolor sit..",
      img: FAQS,
    },
    {
      title: "Support Tickets",
      description:
        "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet lorem ipsum dolor sit amet consectetur amet ipsum dolor sit amet lorem ipsum dolor sit.",
      img: SupportTicket,
    },
  ];

  const theme = useTheme();
  return (
    <Stack sx={{ p: 5, gap: 5, backgroundColor: theme.palette.custom.white }}>
      <Stack
        sx={{
          direction: "column",
          gap: 0.7,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: theme.palette.custom.black2,
            fontWeight: 700,
            fontSize: "32px",
            textAlign: { xs: "center" },
          }}
        >
          Can’t Find What You’re Looking For ?
        </Typography>
        <Typography
          sx={{
            color: theme.palette.custom.getInTouchDescription,
            fontWeight: 400,
            fontSize: "20px",
            textAlign: { xs: "center" },
          }}
        >
          Lorem ipsum dolor sit amet consectetur. At consectetur duis enim
          isculi donec. Morbi nunc eget suspendisse amet habitasse{" "}
        </Typography>
      </Stack>

      <Box sx={{ py: 5, px: 10 }}>
        <Grid container spacing={3}>
          {helps.map((help, index) => (
            <HelpCard
              key={index}
              img={help.img}
              title={help.title}
              description={help.description}
            />
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};

export default HelpCenter;
