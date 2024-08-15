import React, { useContext } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { WishlistContext } from './WishlistContext'; // Ensure you have the WishlistContext
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#000', // Apple-like black AppBar
}));

const ProductCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  boxShadow: 'none',
  border: '1px solid #e0e0e0',
  borderRadius: 0,
}));

const ProductMedia = styled(CardMedia)(({ theme }) => ({
  height: 300,
}));

const Sportaccess = () => {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const products = [
    { title: 'Sports Bottle', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2yakwIAmjKGZ_jqYOg3oXVP9U8_J06AiOaQ&s', price: '₹199' },
    { title: 'Yoga Mat', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs3L3jxWLnxG38GTGuZBDUbyzWq3TbFTKQ-Q&s', price: '₹999' },
    { title: 'Fitness Band', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqpnhSHFysmGByCadDPbVe1rMLGcr-9xCRvg&s', price: '₹499' },
    { title: 'Gym Gloves', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-jlVAnNKnexe68Ou4t9Fsfy65jkdF8D-pEA&s', price: '₹299' },
    { title: 'Skipping Rope', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFjPg-ahTTe3DRFedORi7Ns8xOxt_SGXDlFA&s', price: '₹149' },
    { title: 'Dumbbells', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Up7B1ae1Kixn9rcpWvw0B_dDBLfKuXH_bw&s', price: '₹799' },
  ];

  return (
    <div>
      <StyledAppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back" component={Link} to="/">
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 'bold' }}>
            Sports Accessories
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <Container maxWidth="lg" style={{ marginTop: '32px' }}>
        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', marginBottom: '32px' }}>
          Sports Accessories
        </Typography>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.title}>
              <ProductCard>
                <ProductMedia
                  image={product.image}
                  title={product.title}
                />
                <CardContent>
                  <Typography variant="h6" component="h2" style={{ fontWeight: 'bold' }}>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="textPrimary" style={{ fontWeight: 'bold', marginTop: '4px' }}>
                    {product.price}
                  </Typography>
                  <IconButton
                    color="secondary"
                    onClick={() => addToWishlist(product)}
                    style={{ float: 'right' }}
                  >
                    <FavoriteBorderIcon />
                  </IconButton>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: '8px', fontWeight: 'bold' }}
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </ProductCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Sportaccess;
