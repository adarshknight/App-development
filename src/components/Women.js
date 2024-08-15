import React, { useContext } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext'; // Adjust the import path accordingly
import { WishlistContext } from './WishlistContext'; // Ensure you have the WishlistContext
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
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

const Women = () => {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const products = [
    { title: 'Women\'s Dress', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnYjgvx_CAplugRXVBf3VouhVpm_ELlNnERg&s', price: '₹999' },
    { title: 'Women\'s Skirt', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGtCezP_wIpBhzGwWMQ6tHRklpI_IPp54KxQ&s', price: '₹699' },
    { title: 'Women\'s Top', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSmOB7J8Vqy86LBNWfRaTefQpzPOUz74AvKg&s', price: '₹499' },
    { title: 'Women\'s Jacket', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9PM14qSIhR1m3Y5NkE5xu29K0C2fuvm793w&s', price: '₹1299' },
    { title: 'Women\'s Shoes', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXi4bH_40E-HhxvNEQNFK7bk6BLN0rEwRZtg&s', price: '₹1499' },
    { title: 'Women\'s Leggings', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_EYRDSlsCguc5dcLH7xtqI2tqHrz09vYxQQ&s', price: '₹799' },
  ];

  return (
    <div>
      <StyledAppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back" component={Link} to="/">
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 'bold' }}>
            Women's Clothing
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <Container maxWidth="lg" style={{ marginTop: '32px' }}>
        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', marginBottom: '32px' }}>
          Women's Clothing
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

export default Women;
