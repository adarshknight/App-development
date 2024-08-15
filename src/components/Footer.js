import React, { useState } from 'react';
import { Container, Grid, Typography, Link, Box, Divider, Snackbar, IconButton, TextField, Button } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, Close as CloseIcon } from '@mui/icons-material';
import { styled } from '@mui/system';
import emailjs from 'emailjs-com';

const FooterContainer = styled(Box)`
  background-color: #f5f5f5;
  padding: 40px 0;
`;

const FooterSection = styled(Box)`
  margin-bottom: 20px;
`;

const FooterLink = styled(Link)`
  color: #333;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  const [email, setEmail] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubscribeClick = async () => {
    try {
      const templateParams = {
        to_email: '727722euit006@skcet.ac.in',
        from_email: email,
      };

      await emailjs.send(
        'service_nf5rs0i',   
        'template_slbhqfq',  
        templateParams,
        'K9sHQooFe2b4a2SMt'       
      );

      setOpenSnackbar(true);
    } catch (error) {
      console.error('Failed to subscribe:', error);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <FooterContainer>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <FooterSection>
              <Typography variant="h6" gutterBottom>
                Company
              </Typography>
              <FooterLink href="#">About Us</FooterLink><br />
              <FooterLink href="#">Careers</FooterLink><br />
              <FooterLink href="#">Press</FooterLink><br />
              <FooterLink href="#">Investors</FooterLink>
            </FooterSection>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FooterSection>
              <Typography variant="h6" gutterBottom>
                Customer Service
              </Typography>
              <FooterLink href="#">Contact Us</FooterLink><br />
              <FooterLink href="#">Returns</FooterLink><br />
              <FooterLink href="#">Order Tracking</FooterLink><br />
              <FooterLink href="#">FAQ</FooterLink>
            </FooterSection>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FooterSection>
              <Typography variant="h6" gutterBottom>
                Follow Us
              </Typography>
              <FooterLink href="#" color="inherit">
                <Facebook />
              </FooterLink>
              <FooterLink href="#" color="inherit" style={{ marginLeft: 10 }}>
                <Twitter />
              </FooterLink>
              <FooterLink href="#" color="inherit" style={{ marginLeft: 10 }}>
                <Instagram />
              </FooterLink>
              <FooterLink href="#" color="inherit" style={{ marginLeft: 10 }}>
                <LinkedIn />
              </FooterLink>
            </FooterSection>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FooterSection>
              <Typography variant="h6" gutterBottom>
                Newsletter
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Subscribe to our newsletter for the latest updates and offers.
              </Typography>
              <Box mt={2}>
                <TextField
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  variant="outlined"
                  size="small"
                />
                <Button
                  onClick={handleSubscribeClick}
                  style={{
                    marginTop: '10px',
                    padding: '10px 15px',
                    border: 'none',
                    borderRadius: '4px',
                    backgroundColor: '#A0522D',
                    color: '#fff',
                    cursor: 'pointer',
                    width: '100%',
                    marginTop: '10px'
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </FooterSection>
          </Grid>
        </Grid>
        <Divider style={{ margin: '20px 0' }} />
        <Typography variant="body2" align="center" color="textSecondary">
          © {new Date().getFullYear()} Decathlon 2.O. All rights reserved.
        </Typography>
      </Container>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="You have successfully subscribed to our Newsletter"
        action={
          <>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </FooterContainer>
  );
};

export default Footer;
