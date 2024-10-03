import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  styled,
  Typography,
  useTheme,
} from "@mui/material";

const NotificationSetting = () => {
  const theme = useTheme();

  const Container = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.custom.historyLayoutBackgroundColor,
    padding: theme.spacing(4),
    borderTopLeftRadius: "13px",
    borderTopRightRadius: "13px",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  }));

  const FormGroup = styled("div")(({ theme }) => ({
    marginBottom: theme.spacing(3),
  }));

  const UpdateButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.custom.benefitCardImg,
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.custom.green,
    },
  }));

  const GreenCheckbox = styled(Checkbox)(({ theme }) => ({
    color: theme.palette.custom.benefitCardImg, // Custom green color for the checkbox
    "&.Mui-checked": {
      color: theme.palette.custom.benefitCardImg, // Green when checked
    },
  }));

  const BlackRadio = styled(Radio)(({ theme }) => ({
    color: theme.palette.custom.black, // Black color for the radio button
    "&.Mui-checked": {
      color: theme.palette.custom.black, // Black when checked
    },
  }));

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh", pb: 5 }}
    >
      <Grid item xs={11.5}>
        <Container>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              mb: { xs: 2, md: 4 },
              fontSize: { xs: "24px", md: "32px" }, // Responsive font size
              textAlign: { xs: "center", md: "left" }, // Center on small screens
            }}
          >
            Notification Setting
          </Typography>

          {/* Get Notifications */}
          <FormGroup sx={{ marginLeft: { xs: 0, md: 7 } }}>
            <FormControl component="fieldset">
              <FormLabel
                component="legend"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.custom.black,
                  fontSize: { xs: "13px", md: "16px " },
                  "&.Mui-focused, &.MuiFormLabel-filled": {
                    color: theme.palette.custom.black, // Maintain color on focus
                  },
                }}
              >
                Get Notifications
              </FormLabel>
              <FormControlLabel
                control={<GreenCheckbox defaultChecked />}
                label="Send me notifications by email."
                sx={{
                  fontSize: {
                    xs: "10px",
                    md: "14px",
                    fontWeight: 400,
                    marginLeft: 3,
                  },
                }}
              />
              <FormControlLabel
                control={<GreenCheckbox defaultChecked />}
                label="Send me notifications by number."
                sx={{
                  fontSize: {
                    xs: "10px",
                    md: "14px",
                    fontWeight: 400,
                    marginLeft: 3,
                  },
                }}
              />
            </FormControl>
          </FormGroup>

          {/* Invites and requests */}
          <FormGroup sx={{ marginLeft: { xs: 0, md: 7 } }}>
            <FormControl component="fieldset">
              <FormLabel
                component="legend"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.custom.black,
                  fontSize: { xs: "13px", md: "16px " },
                  "&.Mui-focused, &.MuiFormLabel-filled": {
                    color: theme.palette.custom.black, // Maintain color on focus
                  },
                }}
              >
                Invites and requests
              </FormLabel>
              <RadioGroup defaultValue="all">
                <FormControlLabel
                  value="all"
                  control={<BlackRadio />}
                  label="All types of invites and requests"
                  sx={{
                    fontSize: {
                      xs: "10px",
                      md: "14px",
                      fontWeight: 400,
                      marginLeft: 3,
                    },
                  }}
                />
                <FormControlLabel
                  value="only"
                  control={<BlackRadio />}
                  label="Only invites and requests that need my response"
                  sx={{
                    fontSize: {
                      xs: "10px",
                      md: "14px",
                      fontWeight: 400,
                      marginLeft: 3,
                    },
                  }}
                />
                <FormControlLabel
                  value="none"
                  control={<BlackRadio />}
                  label="None"
                  sx={{
                    fontSize: {
                      xs: "10px",
                      md: "14px",
                      fontWeight: 400,
                      marginLeft: 3,
                    },
                  }}
                />
              </RadioGroup>
            </FormControl>
          </FormGroup>

          {/* Community Comments */}
          <FormGroup sx={{ marginLeft: { xs: 0, md: 7 } }}>
            <FormControl component="fieldset">
              <FormLabel
                component="legend"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.custom.black,
                  fontSize: { xs: "13px", md: "16px " },
                  "&.Mui-focused, &.MuiFormLabel-filled": {
                    color: theme.palette.custom.black, // Maintain color on focus
                  },
                }}
              >
                Community Comments
              </FormLabel>
              <RadioGroup defaultValue="all">
                <FormControlLabel
                  value="all"
                  control={<BlackRadio />}
                  label="All comments on my published resources"
                  sx={{
                    fontSize: {
                      xs: "10px",
                      md: "14px",
                      fontWeight: 400,
                      marginLeft: 3,
                    },
                  }}
                />
                <FormControlLabel
                  value="mentions"
                  control={<BlackRadio />}
                  label="Only mentions and replies"
                  sx={{
                    fontSize: {
                      xs: "10px",
                      md: "14px",
                      fontWeight: 400,
                      marginLeft: 3,
                    },
                  }}
                />
                <FormControlLabel
                  value="none"
                  control={<BlackRadio />}
                  label="None"
                  sx={{
                    fontSize: {
                      xs: "10px",
                      md: "14px",
                      fontWeight: 400,
                      marginLeft: 3,
                    },
                  }}
                />
              </RadioGroup>
            </FormControl>
          </FormGroup>

          {/* Summary of community activity */}
          <FormGroup sx={{ marginLeft: { xs: 0, md: 7 } }}>
            <FormLabel
              component="legend"
              sx={{
                fontWeight: 600,
                color: theme.palette.custom.black,
                fontSize: { xs: "13px", md: "16px " },
                "&.Mui-focused, &.MuiFormLabel-filled": {
                  color: theme.palette.custom.black, // Maintain color on focus
                },
              }}
            >
              Community Comments
            </FormLabel>
            <FormControlLabel
              control={<GreenCheckbox defaultChecked />}
              label="Summary of community activity on my resources (once a week)"
              sx={{
                fontSize: {
                  xs: "10px",
                  md: "14px",
                  fontWeight: 400,
                  marginLeft: 3,
                },
              }}
            />
          </FormGroup>

          {/* Action Buttons */}
          <Grid container justifyContent="center" sx={{ gap: 3, mt: 2 }}>
            <Button
              variant="text"
              sx={{
                fontWeight: 500,
                fontSize: { xs: "13px", md: "18px" },
                textTransform: "none",
                color: theme.palette.custom.accountSettingCancel,
              }}
            >
              Cancel
            </Button>
            <UpdateButton
              variant="contained"
              sx={{
                boxShadow: "none",
                textTransform: "none",
                color: theme.palette.custom.black,
              }}
            >
              Update
            </UpdateButton>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default NotificationSetting;
