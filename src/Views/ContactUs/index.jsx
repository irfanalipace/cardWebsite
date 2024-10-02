import { Box, Stack, Typography, useTheme } from "@mui/material";
import ContactInformation from "./ContactInformation";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  const theme = useTheme();
  return (
    <Stack
      sx={{ p: 5, gap: 5, backgroundColor: theme.palette.custom.whiteShadow }}
    >
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
            fontSize: { xs: "16px", md: "32px" },
            textAlign: { xs: "center" },
          }}
        >
          Get in Touch
        </Typography>
        <Typography
          sx={{
            color: theme.palette.custom.getInTouchDescription,
            fontWeight: 400,
            fontSize: { xs: "13px", md: "20px" },
            textAlign: { xs: "center" },
          }}
        >
          Lorem ipsum dolor sit amet consectetur. At consectetur duis enim
          isculi donec. Morbi nunc eget suspendisse amet habitasse{" "}
        </Typography>
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          backgroundColor: theme.palette.custom.white,
          p: 2,
          gap: 2,
          borderRadius: "10px",
        }}
      >
        <ContactInformation />
        <ContactForm />
      </Box>
    </Stack>
  );
};

export default ContactUs;
