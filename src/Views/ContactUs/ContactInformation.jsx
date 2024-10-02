import { Box, useTheme, Typography, Stack, IconButton } from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const ContactInformation = () => {
  const theme = useTheme();
  return (
    <Box
      flex={1}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 5,
        py: 5,
        pl: 5,
        backgroundColor: theme.palette.custom.contactInformation,
        color: theme.palette.custom.black,
        borderRadius: "10px",
      }}
    >
      <Stack gap={0.2}>
        <Typography
          sx={{ fontSize: "26px", fontWeight: 700, fontFamily: "Roboto" }}
        >
          Contact Information
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "16px",
            fontFamily: "Roboto",
          }}
        >
          Feel free to contact with us.
        </Typography>
      </Stack>

      <Stack sx={{ direction: "column", gap: 2 }}>
        <Box flex={1} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <PhoneInTalkIcon size={24} color={theme.palette.custom.black} />
          <Typography>+1012 3456 789</Typography>
        </Box>
        <Box flex={1} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <EmailIcon size={24} color={theme.palette.custom.black} />
          <Typography>demo@gmail.com</Typography>
        </Box>
        <Box flex={1} sx={{ display: "flex", alignItems: "start", gap: 2 }}>
          <LocationOnIcon size={24} color={theme.palette.custom.black} />
          <Typography
            component={"flexbox"}
            sx={{
              display: "flex",
              flexDirection: "column",
              color: theme.palette.custom.black,
              fontFamily: "Roboto",
              fontWeight: 500,
              fontSize: "16px",
            }}
          >
            <span>132 Dartmouth Street Boston </span>
            <span>Massachusetts 02156 United States</span>
          </Typography>
        </Box>
      </Stack>

      <Stack direction={"row"} sx={{ alignItems: "center", gap: 3 }}>
        <IconButton
          sx={{
            backgroundColor: theme.palette.custom.black,
            color: theme.palette.custom.white,
          }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          sx={{
            backgroundColor: theme.palette.custom.black,
            color: theme.palette.custom.white,
          }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          sx={{
            backgroundColor: theme.palette.custom.black,
            color: theme.palette.custom.white,
          }}
        >
          <SportsEsportsIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default ContactInformation;
