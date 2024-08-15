// src/components/Banner.js
import React from 'react';
import Slider from 'react-slick';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '0',
  overflow: 'hidden',
}));

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    { title: 'Summer Collection', image: 'https://www.shutterstock.com/image-vector/soccer-players-playing-ball-stadium-260nw-2284654671.jpg' },
    { title: 'Sale', image: 'https://img.freepik.com/premium-photo/football-player-with-sport-ball-modern-football-pitch-sunset-banner-panorama-generative-ai_699690-18718.jpg' },
    { title: 'Sports Equipment', image: 'https://image.made-in-china.com/2f0j00ycilkIjFlzGs/Great-Quality-Hot-Sale-Paddle-Tennis-Court-Panoramic-Sport-Padel-Court.webp' },
  ];

  return (
    <Box mt={4}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <StyledCard key={index}>
            <CardMedia
              component="img"
              image={slide.image}
              alt={slide.title}
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="h4" align="center" color="white">
                {slide.title}
              </Typography>
            </CardContent>
          </StyledCard>
        ))}
      </Slider>
    </Box>
  );
};

export default Banner;
