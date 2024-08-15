import React, { useContext } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { CartContext } from './CartContext'; // Adjust the import path accordingly

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#000', // Sleek black AppBar
});

const CardContainer = styled(Card)({
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const Trek = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    { title: 'Trekking Backpack', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlnv8tD5XKxiThdw3WS0o5efFzkllEHPmpWg&s', price: '₹2999' },
    { title: 'Trekking Shoes', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgdq3UbLZuZzoa1y1OfikICo23nvjuPTYCrg&s', price: '₹3999' },
    { title: 'Trekking Poles', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAqLXBpHwIJUcsdqYsaB1leGWx4NHGvzz_kg&s', price: '₹1999' },
    { title: 'Trekking Tent', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDw-n6fKVBLEdIEy8tUq2V0uN7h7RmDjvWfw&s', price: '₹4999' },
    { title: 'Trekking Jacket', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRidSSVoOBfRqGYCCDN3OkcCuubIQrDGOPHlQ&s', price: '₹3499' },
    { title: 'Trekking Hat', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlN-gTvfAWXle8cr6ySJQbqmThVzQIalRcFw&s', price: '₹999' },
  ];

  return (
    <div>
      <StyledAppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back" component={Link} to="/">
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Trekking Necessities
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <Container maxWidth="lg" style={{ marginTop: '32px' }}>
        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold' }}>
          Trekking Necessities
        </Typography>
        <Grid container spacing={4} style={{ marginTop: '16px' }}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.title}>
              <CardContainer>
                <CardMedia
                  style={{ height: 300 }}
                  image={product.image}
                  title={product.title}
                />
                <CardContent>
                  <Typography variant="h6" component="h2" style={{ fontWeight: 'bold' }}>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.price}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: '16px', fontWeight: 'bold', backgroundColor: '#0071e3' }}
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </CardContainer>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Trek;
