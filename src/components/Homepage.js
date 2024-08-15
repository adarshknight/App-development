import React, { useContext, useEffect, useRef } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardMedia, CardContent, Box, IconButton } from '@mui/material';
import { AccountCircle, ShoppingCart, Support, FavoriteBorder, Store } from '@mui/icons-material';
import { styled } from '@mui/system';
import { keyframes } from '@emotion/react';
import { Link, useNavigate } from 'react-router-dom';
import Typed from 'typed.js';
import Banner from './Banner';
import Chat from './Chat';
import UserContext from './UserContext';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeInBox = styled(Box)`
  animation: ${fadeIn} 2s ease-in;
`;

const CardContainer = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  textDecoration: 'none',
  color: 'inherit',
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#000', // Apple-like black AppBar
}));

const Homepage = () => {
  const navigate = useNavigate();
  const { user, signOut } = useContext(UserContext);
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Enjoy ₹200/- Off on your first purchase. T&C apply'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <StyledAppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 'bold' }}>
            Decathlon 2.O
          </Typography>
          {user ? (
            <>
              <Typography variant="h6" style={{ marginRight: '16px' }}>
                {user.name}
              </Typography>
              <IconButton color="inherit" onClick={signOut}>
                <AccountCircle />
              </IconButton>
            </>
          ) : (
            <Button color="inherit" startIcon={<AccountCircle />} component={Link} to="/signin">Sign In</Button>
          )}
          <IconButton color="inherit" component={Link} to="/cart">
            <ShoppingCart />
          </IconButton>
          <IconButton color="inherit" component={Link} to="/support">
            <Support />
          </IconButton>
          <IconButton color="inherit" component={Link} to="/wishlist">
            <FavoriteBorder />
          </IconButton>
          <IconButton color="inherit" onClick={() => navigate('/myprofile')}>
            <Store />
          </IconButton>
        </Toolbar>
      </StyledAppBar>
      <Banner />
      <Container maxWidth="lg" style={{ marginTop: '32px' }}>
        <FadeInBox>
          <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold' }}>
            <span ref={typedElement}></span>
          </Typography>
          <Grid container spacing={3} style={{ marginTop: '16px' }}>
            {[
              { title: 'Men', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYX1rZpWJ7-7SCjYwhZPgyz9m3pdbO7DG34g&s', link: '/men' },
              { title: 'Women', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbIBAKCLdf6Z_6sBF09csPqlqNyHGKYq6tjw&s', link: '/women' },
              { title: 'Kids', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQunScNiCTrxOl0PVQkrFmUx8Q6KZMVH_njpg&s', link: '/kids' },
              { title: 'Shoes', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvvUGuxo8hDVHeGUaoKOyLqWISEF4IWfCiGQ&s', link: '/shoes' },
              { title: 'Summer Collection', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7er67repJV3L3R5LtN5DxfuSVUAf7bckDqg&s', link: '/summer' },
              { title: 'Sale', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbw3e_xvnPXb9Qm8xv0JrcegKv2DJX4t0Rw&s', link: '/sale' },
              { title: 'Sports Accessories', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQycWKOQ7Ktyet3i7PpjVqyeD5RoIcw1KspbA&s', link: '/accessories' },
              { title: 'Sports Equipment', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgpOLcY9h8zjiBAhUe6_QDylzYRcx4Nfd2Gg&s', link: '/equipment' },
            ].map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.title}>
                <CardContainer component={Link} to={item.link}>
                  <CardMedia
                    style={{ height: 140 }}
                    image={item.image}
                    title={item.title}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div" style={{ fontWeight: 'bold' }}>
                      {item.title}
                    </Typography>
                  </CardContent>
                </CardContainer>
              </Grid>
            ))}
          </Grid>
        </FadeInBox>
        <FadeInBox mt={4}>
          <Card>
            <CardMedia
              style={{ height: 140 }}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBew8H4JHS2RJceldymGNOckHY2y4uj7RHFw&s"
              title="Trekking Collection"
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Ready For Your Favourite Treks?
              </Typography>
              <Button variant="contained" color="primary" component={Link} to="/trek" style={{ fontWeight: 'bold' }}>
                Shop Now
              </Button>
            </CardContent>
          </Card>
        </FadeInBox>
      </Container>
      <Chat />
    </div>
  );
};

export default Homepage;
