import React from 'react';
import { Box, Card, Typography, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#f0f0f0',
  padding: theme.spacing(3),
  marginTop: theme.spacing(3),
  width: '100%',

}));

const ConfirmOrderCards = () => {
  return (
    <Box sx={{ padding: '20px', textAlign: 'center', }}>
      {/* Title Section */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Step 2: Confirm Your Order
      </Typography>
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit. Suspendisse varius enim in eros elementum tristique. <br></br>Suspendisse varius enim in eros elementum tristique.
      </Typography>

      {/* Card Section */}
      <StyledCard elevation={2}>
        {/* Amounts Section */}
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography variant="body1">100 CAD</Typography>
          <Typography variant="body1">MASTERCARD</Typography>
          <Typography variant="body1">$1983.44 * 45</Typography>
          <Typography variant="body1">$43732.89</Typography>
        </Box>

        {/* Divider */}
        <Divider />

        {/* Total USD */}
        <Box display="flex" justifyContent="space-between" mt={2}>
        <Typography variant="body1" >
       Payment:
      </Typography>
      <Typography variant="body1">
      <Box component="span" display="flex" alignItems="center">
        <CurrencyBitcoinIcon style={{ fontSize: '20px', marginRight: '5px' }} /> BTC
      </Box>
    </Typography>
        
        </Box>

        {/* Total BTC */}
        <Box display="flex" justifyContent="space-between" mt={1}>
          <Typography variant="body1" fontWeight="bold">
            Total USD:
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            $78.99
          </Typography>
        </Box>


        <Box display="flex" justifyContent="space-between" mt={1}>
        <Typography variant="body1" fontWeight="bold">
          Total BTC:
        </Typography>
        <Typography variant="body1" fontWeight="bold">
          0000000000.45 BTC
        </Typography>
      </Box>
      </StyledCard>
    </Box>
  );
};

export default ConfirmOrderCards;
