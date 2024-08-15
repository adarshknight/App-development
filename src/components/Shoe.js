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

const Shoe = () => {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const products = [
    { title: 'Running Shoes', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAT4BX0dOJNRcYGU9CdT7XatcF6EQkOgoJuw&s', price: '₹1999' },
    { title: 'Casual Sneakers', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQktZZgUgFzfuw5_3cHznewdiW3hEVlSozkdw&s', price: '₹2499' },
    { title: 'Hiking Boots', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ323UnbxQI3sWDZ0Gl15ImuDt6Fs3Oqd5eHQ&s', price: '₹3499' },
    { title: 'Sports Sandals', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyYTlfsmHBu0N9m0NBGpG6X8xCCmHX0_s0eA&s', price: '₹1299' },
    { title: 'Formal Shoes', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3KQQB14rktqMNHSW0UPgGWWuI7IqvkzVE2A&s', price: '₹2999' },
    { title: 'Slip-Ons', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQudP_h1pJ-RUeTQVwACaCnmvLnNOO2EruQ&s', price: '₹1599' },
  ];

  return (
    <div>
      <StyledAppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back" component={Link} to="/">
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 'bold' }}>
            Shoes
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <Container maxWidth="lg" style={{ marginTop: '32px' }}>
        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', marginBottom: '32px' }}>
          Shoes Collection
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

export default Shoe;
