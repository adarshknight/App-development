import React, { useContext } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { ArrowBack as ArrowBackIcon, FavoriteBorder } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/CartContext';
import { WishlistContext } from '../components/WishlistContext'; // Import WishlistContext
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

const Men = () => {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext); // Get addToWishlist function

  const products = [
    { title: 'Men\'s T-Shirt', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfgHwkFPQ6wRg6je0fp7JceBNwJcIZcUh1nA&s', price: '₹499' },
    { title: 'Men\'s Shorts', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ZDF64CPh9j-jcoq_GZyHxaF4WnqIhFlDQA&s', price: '₹599' },
    { title: 'Men\'s Jacket', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAm0M8tn-1_v9oBT-YxNI33sMwakBO0xc9aQ&s', price: '₹999' },
    { title: 'Men\'s Shoes', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT11T9buClb8XEzA1ezxhnR1LDuuUXuXyEFg&s', price: '₹1499' },
    { title: 'Men\'s Track Pants', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLbyUICPCGBiXmByDUsxxq3lujLTM4CMuchg&s', price: '₹799' },
    { title: 'Men\'s Hoodie', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvwRKjT5d1mi8N70nNMSASOtzWdxNRFNJIgg&s', price: '₹1299' },
  ];

  return (
    <div>
      <StyledAppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back" component={Link} to="/">
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 'bold' }}>
            Men's Clothing
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <Container maxWidth="lg" style={{ marginTop: '32px' }}>
        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', marginBottom: '32px' }}>
          Men's Clothing
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
                  <Typography variant="body2" color="textSecondary" style={{ margin: '8px 0' }}>
                    {product.price}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: '8px', fontWeight: 'bold' }}
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </Button>
                  <IconButton
                    color="secondary"
                    style={{ marginTop: '8px' }}
                    onClick={() => addToWishlist(product)}
                  >
                    <FavoriteBorder />
                  </IconButton>
                </CardContent>
              </ProductCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Men;
