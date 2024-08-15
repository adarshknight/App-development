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

const Kids = () => {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const products = [
    { title: 'Kids T-Shirt', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTthka4tbGnyhKMHSezFLeWC8HDM49xZTj7VA&s', price: '₹299' },
    { title: 'Kids Shorts', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrOf2M1pSSkkLduSK5WLPgThiqkhEHLCv19A&s', price: '₹399' },
    { title: 'Kids Jacket', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmMRPYeVXv_QWjVJCQfB15gh-2IUIMbpXafA&s', price: '₹799' },
    { title: 'Kids Shoes', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuPNPBD3N2UTSKf9rlwScDGadvfpES1-p5qg&s', price: '₹1199' },
    { title: 'Kids Track Pants', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnFCDiV48u5WZb569OwxGF7mjS5hgzmmixvA&s', price: '₹599' },
    { title: 'Kids Hoodie', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7hQvfN0ldnj9iEAiMm1AnKowMgetvPcuJow&s', price: '₹999' },
  ];

  return (
    <div>
      <StyledAppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back" component={Link} to="/">
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 'bold' }}>
            Kids' Clothing
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <Container maxWidth="lg" style={{ marginTop: '32px' }}>
        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', marginBottom: '32px' }}>
          Kids' Clothing
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

export default Kids;
