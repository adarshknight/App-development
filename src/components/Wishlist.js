import React, { useContext } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { WishlistContext } from '../components/WishlistContext';
import { CartContext } from '../components/CartContext'; // Import CartContext
import { styled } from '@mui/system';

const BlackAppBar = styled(AppBar)({
  backgroundColor: 'black',
});

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext); // Use CartContext

  return (
    <div>
      <BlackAppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back" component={Link} to="/">
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Wishlist
          </Typography>
        </Toolbar>
      </BlackAppBar>
      <Container maxWidth="lg" style={{ marginTop: '16px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Your Wishlist
        </Typography>
        <Grid container spacing={3}>
          {wishlistItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.title}>
              <Card>
                <CardMedia
                  style={{ height: 140 }}
                  image={item.image}
                  title={item.title}
                />
                <CardContent>
                  <Typography variant="h6" component="h2">
                    {item.title}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => removeFromWishlist(item.title)}
                    style={{ marginRight: '8px' }}
                  >
                    Remove from Wishlist
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Wishlist;
