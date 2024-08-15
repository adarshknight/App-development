import React, { useContext } from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button, Divider, Box } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { CartContext } from '../components/CartContext'; // Adjusted import path

const CartContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate(); // Initialize useNavigate

  const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace('₹', '')), 0);

  const handleCheckout = () => {
    navigate('/payment', { state: { total } }); // Navigate to payment page with total amount
  };

  return (
    <CartContainer maxWidth="lg">
      <Box display="flex" alignItems="center" mb={4}>
        <ShoppingCart fontSize="large" />
        <Typography variant="h4" component="h1" ml={2}>
          Your Cart
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {cartItems.map((item, index) => (
          <Grid item xs={12} key={index}>
            <Card>
              <Grid container>
                <Grid item xs={12} sm={4}>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt="Product Image"
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <CardContent>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Flexible shoes with superior comfort.
                    </Typography>
                    <Box display="flex" justifyContent="space-between" mt={2}>
                      <Typography variant="h6">{item.price}</Typography>
                      <Button variant="contained" color="secondary" onClick={() => removeFromCart(item.title)}>Remove</Button>
                    </Box>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Divider style={{ margin: '24px 0' }} />
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5">Total: ₹{total}</Typography>
        <Button variant="contained" color="primary" size="large" onClick={handleCheckout}>Proceed to Checkout</Button>
      </Box>
    </CartContainer>
  );
};

export default Cart;
