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
            fontSize: "32px",
          }}
        >
          Get in Touch
        </Typography>
        <Typography
          sx={{
            color: theme.palette.custom.getInTouchDescription,
            fontWeight: 400,
            fontSize: "20px",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. At consectetur duis enim
          isculi donec. Morbi nunc eget suspendisse amet habitasse{" "}
        </Typography>
      </Stack>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: theme.palette.custom.white,
          p: 2,
        }}
      >
        <ContactInformation />
        <ContactForm />
      </Box>
    </Stack>
  );
};

export default ContactUs;
