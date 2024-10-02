import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
} from "@mui/material";

const ContactForm = () => {
  return (
    <Box
      flex={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <Grid container spacing={2} sx={{ px: 3, columnGap: 2, rowGap: 2 }}>
        <Grid item xs={5.5}>
          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="component-simple" shrink={true}>
              First Name
            </InputLabel>
            <Input id="component-simple" placeholder="John" />
          </FormControl>
        </Grid>
        <Grid item xs={5.5}>
          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="component-simple" shrink={true}>
              Last Name
            </InputLabel>
            <Input id="component-simple" placeholder="Doe" />
          </FormControl>
        </Grid>
        <Grid item xs={5.5}>
          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="component-simple" shrink={true}>
              Email
            </InputLabel>
            <Input id="component-simple" placeholder="abc@gmail.com" />
          </FormControl>
        </Grid>
        <Grid item xs={5.5}>
          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="component-simple" shrink={true}>
              Phone Number
            </InputLabel>
            <Input id="component-simple" placeholder="+1 012 3456 789" />
          </FormControl>
        </Grid>

        <Grid item xs={11.3}>
          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="component-simple" shrink={true}>
              Message
            </InputLabel>
            <Input id="component-simple" placeholder="Write your message.." />
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
