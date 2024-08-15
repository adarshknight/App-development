import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import { useLocation } from 'react-router-dom'; // Import useLocation

const PaymentContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const Payment = () => {
  const location = useLocation();
  const total = location.state?.total || 0; 

  const [paymentMethod, setPaymentMethod] = useState('razorpay');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePayNowClick = (e) => {
    e.preventDefault();
    if (total === 0) {
      alert('Total amount is zero');
    } else {
      if (window.Razorpay) {
        var options = {
          key: 'rzp_test_AWrlyaXOO9ncih',
          key_secret: 'iExGzM7nCvTIo41Rk4iV9kye',
          amount: total * 100,
          currency: 'INR',
          name: 'Decathlon 2.O',
          description: 'for testing purpose',
          handler: function (response) {
            alert('Payment Successful. Payment ID: ' + response.razorpay_payment_id);
          },
          prefill: {
            name: 'Adarsh',
            email: 'adarsh@gmail.com',
            contact: '9021266644',
          },
          notes: {
            address: 'Razorpay Corporate office',
          },
          theme: {
            color: '#3399cc',
          },
        };
        var pay = new window.Razorpay(options);
        pay.open();
      } else {
        alert('Razorpay SDK not loaded. Make sure to include the Razorpay script.');
      }
    }
  };

  return (
    <PaymentContainer maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Payment Methods
      </Typography>
      <FormControl component="fieldset">
        <FormLabel component="legend">Select a payment method</FormLabel>
        <RadioGroup
          value={paymentMethod}
          onChange={handlePaymentMethodChange}
          name="payment-method"
        >
          <FormControlLabel value="razorpay" control={<Radio />} label="Razorpay" />
          
        </RadioGroup>
      </FormControl>
      <Card variant="outlined" style={{ marginTop: '24px' }}>
        <CardContent>
          <Typography variant="h5">Total Amount: ₹{total}</Typography>
        </CardContent>
      </Card>
      <Box display="flex" justifyContent="flex-end" mt={4}>
        <Button variant="contained" color="primary" size="large" onClick={handlePayNowClick}>
          Pay Now
        </Button>
      </Box>
    </PaymentContainer>
  );
};

export default Payment;
