import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Avatar, Button, TextField, Divider, Grid, IconButton } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { styled, keyframes } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { openDB } from 'idb';
import CheckIcon from '@mui/icons-material/Check';

const OrangeAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: deepOrange[500],
  width: theme.spacing(12),
  height: theme.spacing(12),
  animation: `${fadeIn} 1.5s ease-in-out`,
}));

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const EditButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  animation: `${fadeIn} 2s ease-in-out`,
}));

const PhotoUploadIcon = styled(PhotoCamera)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  right: 0,
  backgroundColor: 'white',
  borderRadius: '50%',
  padding: theme.spacing(0.5),
  cursor: 'pointer',
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  animation: `${fadeIn} 1s ease-in-out`,
}));

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    photo: ''
  });
  const [photoPreview, setPhotoPreview] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      const db = await openDB('user-db', 1, {
        upgrade(db) {
          db.createObjectStore('profile', { keyPath: 'id' });
        },
      });
      const storedUserDetails = await db.get('profile', 1);
      if (storedUserDetails) {
        setUserDetails(storedUserDetails);
        setPhotoPreview(storedUserDetails.photo || '');
      } else {
        setUserDetails({
          name: 'Adarsh',
          email: 'adarsh@gmail.com',
          phone: '90421-87321',
          address: 'Sri Krishna college of engineering and technology',
          photo: ''
        });
      }
    };
    fetchUserDetails();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        setPhotoPreview(reader.result);
        setUserDetails((prevDetails) => ({
          ...prevDetails,
          photo: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const handleSave = async () => {
    const db = await openDB('user-db', 1, {
      upgrade(db) {
        db.createObjectStore('profile', { keyPath: 'id' });
      },
    });
    await db.put('profile', { id: 1, ...userDetails });
    console.log('Saved user details:', userDetails);
    setIsEditing(false);
  };

  return (
    <StyledContainer maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        textAlign="center"
      >
        <label htmlFor="photo-upload">
          <input
            id="photo-upload"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handlePhotoChange}
          />
          <Box position="relative">
            <OrangeAvatar
              alt={userDetails.name}
              src={photoPreview || undefined}
            >
              {userDetails.name.charAt(0)}
            </OrangeAvatar>
            <PhotoUploadIcon
              onClick={() => document.getElementById('photo-upload').click()}
            />
          </Box>
        </label>
        {isEditing ? (
          <Box component="form" display="flex" flexDirection="column" alignItems="center" width="100%">
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="name"
              label="Name"
              value={userDetails.name}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="email"
              label="Email"
              value={userDetails.email}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="phone"
              label="Phone Number"
              value={userDetails.phone}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="address"
              label="Address"
              value={userDetails.address}
              onChange={handleChange}
            />
            <EditButton
              variant="contained"
              color="primary"
              startIcon={<SaveIcon />}
              onClick={handleSave}
            >
              Save
            </EditButton>
          </Box>
        ) : (
          <>
            <Typography variant="h4" gutterBottom>
              {userDetails.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Email: {userDetails.email}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Phone: {userDetails.phone}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Address: {userDetails.address}
            </Typography>
            <EditButton
              variant="contained"
              color="primary"
              startIcon={<EditIcon />}
              onClick={toggleEdit}
            >
              Edit Profile
            </EditButton>
          </>
        )}
        <Divider style={{ margin: '24px 0', width: '100%' }} />
        <Typography variant="h6" gutterBottom>
          Additional Information
        </Typography>
        <Box display="flex" justifyContent="space-around" width="100%">
          <Box>
            <Typography variant="body1" gutterBottom>
              Membership Status
            </Typography>
            <Typography variant="body2">
              Premium Member <CheckIcon color="primary" />
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" gutterBottom>
              Total Orders
            </Typography>
            <Typography variant="body2">
              25 Orders
            </Typography>
          </Box>
        </Box>
      </Box>
    </StyledContainer>
  );
};

export default MyProfile;
