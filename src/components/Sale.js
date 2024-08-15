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

const Sale = () => {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const products = [
    { title: 'Discounted T-Shirt', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxldzlvgZg2ZRVUdVyAS8RpkFE828pb9vljA&s', price: '₹299', originalPrice: '₹499' },
    { title: 'Trending Sneakers', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7bDsy1_ya8oXfMOKGxrGyeNcp0zEFl86G7w&s', price: '₹1499', originalPrice: '₹1999' },
    { title: 'Summer Hat', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmZzcNyT2licnb44dYbV3NHDXf4i2OVbyaRw&s', price: '₹399', originalPrice: '₹599' },
    { title: 'Sale on Jackets', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_J9K30IDfAomuHApZQUq1k9hOQCoL4h8Hgw&s', price: '₹899', originalPrice: '₹1299' },
    { title: 'Discounted Shorts', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEtwe79q9vqXPc2kon1syAnuODFLsLcLDfQg&s', price: '₹499', originalPrice: '₹799' },
    { title: 'Trending Sunglasses', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBaZdQpqEPp3vaYmS9wpAlFpI9qgJtN7BpaA&s', price: '₹499', originalPrice: '₹799' },
  ];

  return (
    <div>
      <StyledAppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back" component={Link} to="/">
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 'bold' }}>
            Sale
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <Container maxWidth="lg" style={{ marginTop: '32px' }}>
        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', marginBottom: '32px' }}>
          Trending and Discounted Items
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
                  <Typography variant="body2" color="textSecondary" style={{ textDecoration: 'line-through' }}>
                    {product.originalPrice}
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

export default Sale;
