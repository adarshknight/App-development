import React, { useContext } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext'; // Adjust the import path accordingly
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { WishlistContext } from './WishlistContext'; // Ensure you have the WishlistContext

const Sportequip = () => {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const products = [
    { title: 'Cricket Bat', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUQIbg0zcQNhT1J9l1ZIiXRKSS-NTmY85d7Q&s', price: '₹1999' },
    { title: 'Football', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSES7w5740XcGTL2gTWg74t5oPSDJNVPJUAdg&s', price: '₹999' },
    { title: 'Badminton Racket', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqDf19_qG6vsUDOPZsfcx2vijjycT2R3djUQ&s', price: '₹799' },
    { title: 'Tennis Racket', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiwFxlLUgSNtiC6IGdNhkOtwVVo25ytwtkKQ&s', price: '₹1499' },
    { title: 'Basketball', image: 'https://m.media-amazon.com/images/I/51qlRlQup1L._AC_SR300,300.jpg', price: '₹499' },
    { title: 'Table Tennis Set', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr-_yKuKWGYahiZYwoh0iV6Qgdl2EqnDyIxg&s', price: '₹1299' },
  ];

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: 'black' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back" component={Link} to="/">
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Sports Equipment
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" style={{ marginTop: '16px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Sports Equipment
        </Typography>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.title}>
              <Card>
                <CardMedia
                  style={{ height: 300 }}
                  image={product.image}
                  title={product.title}
                />
                <CardContent>
                  <Typography variant="h6" component="h2">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
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
                    style={{ marginTop: '8px' }}
                    onClick={() => addToCart(product)}
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

export default Sportequip;
