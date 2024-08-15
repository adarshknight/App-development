import React, { useState, useContext } from 'react';
import { Container, TextField, Button, Typography, Box, Snackbar, Alert, Paper } from '@mui/material';
import { Lock as LockIcon } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import UserContext from './UserContext';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const { signIn } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/user/login/${email}/${password}`);
      if (response.ok) {
        const user = await response.json();
        setOpen(true);
        signIn(user); // Update the user context
        setTimeout(() => {
          navigate('/homepage');
        }, 2000); // Navigate after 2 seconds
      } else {
        console.log('Invalid credentials');
        alert('Invalid credentials, please try again.');
      }
    } catch (error) {
      console.error('There was an error signing in!', error);
      alert('Error signing in, please try again later.');
    }
  };

  const handleGoogleSignin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = {
        name: result.user.displayName,
        email: result.user.email,
        // Add more fields as needed
      };
      signIn(user); // Update the user context
      setOpen(true);
      setTimeout(() => {
        navigate('/homepage');
      }, 2000); // Navigate after 2 seconds
    } catch (error) {
      console.error('Error signing in with Google:', error);
      alert('Error signing in with Google, please try again later.');
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '50px' }}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          component="form"
          onSubmit={handleSignin}
        >
          <LockIcon fontSize="large" color="primary" />
          <Typography variant="h4" gutterBottom>
            Sign In
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: '20px' }}
          >
            Sign In
          </Button>
          <Button
            component={Link}
            to="/reg"
            fullWidth
            variant="text"
            color="primary"
            style={{ marginTop: '10px' }}
          >
            Don't have an account? Sign Up
          </Button>
          <Button
            onClick={handleGoogleSignin}
            fullWidth
            variant="contained"
            color="secondary"
            style={{ marginTop: '20px' }}
          >
            Sign In with Google
          </Button>
        </Box>
      </Paper>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Sign in Successful!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Signin;
