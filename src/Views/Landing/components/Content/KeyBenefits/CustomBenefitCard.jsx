import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import { truncateString } from "../../../../../utils/helper";

const CustomBenefitCard = ({ img, title, description }) => {
  const theme = useTheme();
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ boxShadow: 2, height: "260px" }}>
        <CardContent>
          <Box
            sx={{
              backgroundColor: theme.palette.custom.benefitCardImg, // Use your custom green color
              width: 60,
              height: 60,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "none",
            }}
          >
            <img src={img} alt="feature" />
          </Box>
          <Typography
            variant="h6"
            sx={{
              mt: 2,
              fontFamily: "poppins",
              fontSize: "18px",
              fontWeight: 700,
            }}
          >
            {truncateString(title, 15)}
          </Typography>
          <Typography
            sx={{
              mt: 1.5,
              fontWeight: 500,
              fontSize: "12px",
              color: theme.palette.custom.benefitCardDescription,
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CustomBenefitCard;
