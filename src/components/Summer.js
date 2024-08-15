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

const Summer = () => {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const products = [
    { title: 'Summer T-Shirt', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT81kjK9uf5dky9ICGxSt168HQcXAabY1vS3Q&s', price: '₹399' },
    { title: 'Summer Shorts', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDJoLMJHru7uF-PlCrvAK8Hh3f3RPHbhNllw&s', price: '₹499' },
    { title: 'Sunglasses', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPJGXgNDIYVt6D7RZvSVnFX2CKViGqnS8Zow&s', price: '₹799' },
    { title: 'Beach Hat', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwFsuesV5rLNQMv2BK60rOt6axRUChwe3Xw&s', price: '₹599' },
    { title: 'Summer Dress', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU8gxYdHJT8RvZY11fQSN5n41uX6g86RI_3A&s', price: '₹899' },
    { title: 'Flip Flops', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYBvIFJhq_XT8lFr2F5kmo5nW52IY2ACr-Ew&s', price: '₹299' },
  ];

  return (
    <div>
      <StyledAppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back" component={Link} to="/">
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 'bold' }}>
            Summer Collection
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <Container maxWidth="lg" style={{ marginTop: '32px' }}>
        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', marginBottom: '32px' }}>
          Summer Collection
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

export default Summer;
