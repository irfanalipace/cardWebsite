import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { truncateString } from "../../utils/helper";

const HelpCard = ({ title, img, description }) => {
  const theme = useTheme();

  return (
    <Grid item xs={12} lg={4}>
      <Card
        sx={{
          height: { xs: "300px", md: "260px" },
          border: `1px solid ${theme.palette.custom.helpCardBorder}`,
          borderRadius: "10px",
          boxShadow: "none",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "none",
          }}
        >
          <Box
            sx={{
              width: 60,
              height: 60,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "none",
            }}
          >
            <img src={img} alt="feature" style={{ mx: "auto" }} />
          </Box>
          <Typography
            variant="h6"
            sx={{
              mt: 2,
              fontFamily: "poppins",
              fontSize: "18px",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            {truncateString(title, 15)}
          </Typography>
          <Typography
            sx={{
              mt: 1.5,
              fontWeight: 500,
              fontSize: { xs: "8px", md: "12px" },
              color: theme.palette.custom.benefitCardDescription,
              textAlign: "center",
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default HelpCard;
