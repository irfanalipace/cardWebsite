import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Stack,
} from "@mui/material";
import { theme } from "../../Theme";
import FormField from "./FormField";

const ContactForm = () => {
  return (
    <Box
      flex={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 6,
      }}
    >
      <Grid container spacing={2} sx={{ px: 3, columnGap: 2, rowGap: 2 }}>
        <Grid item xs={11.8} md={5.8}>
          <FormField label={"First Name"} placeholder={"John"} />
        </Grid>
        <Grid item xs={11.8} md={5.8}>
          <FormField label={"Last Name"} placeholder={"Doe"} />
        </Grid>
        <Grid item xs={11.8} md={5.8}>
          <FormField label={"Email"} placeholder={"abc@gmail.com"} />
        </Grid>
        <Grid item xs={11.8} md={5.8}>
          <FormField label={"Phone Number"} placeholder={"+1 012 3456 789"} />
        </Grid>

        <Grid item xs={11.8}>
          <FormField label={"Message"} placeholder={"Write your message.."} />
        </Grid>
      </Grid>

      <Stack
        direction="row"
        sx={{ alignItems: "center", justifyContent: "space-between", pr: 4 }}
      >
        <div></div>
        <Button
          sx={{
            backgroundColor: theme.palette.custom.benefitCardImg,
            textTransform: "none",
            color: theme.palette.common.white,
            px: 2.5,
            py: 1.3,
          }}
        >
          Send Message
        </Button>
      </Stack>
    </Box>
  );
};

export default ContactForm;
