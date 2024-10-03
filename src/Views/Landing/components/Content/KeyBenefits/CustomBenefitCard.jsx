import PropTypes from "prop-types"; // Import PropTypes for prop validation
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import { truncateString } from "../../../../../utils/helper";

const CustomBenefitCard = ({ img, title, description }) => {
  const theme = useTheme();
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card
        sx={{
          boxShadow: 2,
          height: "auto", // Allow the card height to be dynamic
          transition: "transform 0.3s, box-shadow 0.3s", // Add transition for hover effect
          "&:hover": {
            transform: "scale(1.05)", // Scale effect on hover
            boxShadow: 6, // Increase shadow on hover
          },
        }}
      >
        <CardContent>
          <Box
            sx={{
              backgroundColor: theme.palette.custom.benefitCardImg,
              width: 60,
              height: 60,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "none",
            }}
          >
            <img
              src={img}
              alt={title} // Use title as alt text for better accessibility
              style={{ maxWidth: "100%", maxHeight: "100%" }} // Ensure image fits within the box
            />
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

CustomBenefitCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CustomBenefitCard;
