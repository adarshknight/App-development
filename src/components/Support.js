import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box, TextField, Snackbar } from '@mui/material';
import { SupportAgent } from '@mui/icons-material';
import { styled } from '@mui/system';
import MuiAlert from '@mui/material/Alert';
import emailjs from 'emailjs-com'; // Import EmailJS

const SupportContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const SupportCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Support = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    // EmailJS send function
    emailjs.send('service_nf5rs0i', 'template_zgj901g', {
      name: name,
      email: email,
      message: message,
    }, 'K9sHQooFe2b4a2SMt')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setOpen(true); // Show success snackbar
    }, (err) => {
      console.error('FAILED...', err);
    });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <SupportContainer maxWidth="lg">
      <Box display="flex" alignItems="center" mb={4}>
        <SupportAgent fontSize="large" />
        <Typography variant="h4" component="h1" ml={2}>
          Support
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <SupportCard>
            <Typography variant="h6">Contact Us</Typography>
            <Typography variant="body2" color="textSecondary">
              If you have any questions, feel free to reach out to us.
            </Typography>
            <Box mt={2}>
              <TextField fullWidth label="Name" margin="normal" value={name} onChange={(e) => setName(e.target.value)} />
              <TextField fullWidth label="Email" margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
              <TextField fullWidth label="Message" margin="normal" multiline rows={4} value={message} onChange={(e) => setMessage(e.target.value)} />
              <Button variant="contained" color="primary" fullWidth onClick={handleClick}>Send Message</Button>
            </Box>
          </SupportCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <SupportCard>
            <Typography variant="h6">Frequently Asked Questions</Typography>
            {[
              { question: 'How can I track my order?', answer: 'You can track your order using the tracking link provided in the confirmation email.' },
              { question: 'What is the return policy?', answer: 'You can return any item within 30 days of purchase. Please visit our return policy page for more details.' },
              { question: 'How do I contact customer service?', answer: 'You can contact our customer service through the contact form or call us at (123) 456-7890.' },
            ].map((faq, index) => (
              <Box key={index} mt={2}>
                <Typography variant="body1"><strong>{faq.question}</strong></Typography>
                <Typography variant="body2" color="textSecondary">{faq.answer}</Typography>
              </Box>
            ))}
          </SupportCard>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Message sent successfully!
        </Alert>
      </Snackbar>
    </SupportContainer>
  );
};

export default Support;
