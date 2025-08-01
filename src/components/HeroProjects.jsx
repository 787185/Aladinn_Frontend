import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme'; // Path relative to src/components/

const HeroProjects = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            sx={{
                height: { xs: 200, sm: 250, md: 300 }, // Responsive height
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '20px',
                mb: '40px', // Margin bottom to separate from content below
                boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.2)', // More pronounced shadow

                // Background styling
                // Option 1: Solid color from theme
                backgroundColor: '#005197', 
                
                // Option 2: Gradient (uncomment and replace Option 1 if preferred)
                // background: `linear-gradient(45deg, ${colors.blueAccent[700]} 30%, ${colors.greenAccent[700]} 90%)`,
                
                // Option 3: Image (uncomment and replace Option 1/2 if preferred)
                // backgroundImage: 'url("https://example.com/your-project-hero-image.jpg")', // Replace with your image URL
                // backgroundSize: 'cover',
                // backgroundPosition: 'center',
                // backgroundAttachment: 'fixed', // For parallax effect
                // filter: 'brightness(0.8)', // Optional: darken image for text readability
            }}
        >
            <Typography 
                variant="h2" 
                fontWeight="bold" 
                gutterBottom 
                sx={{ 
                    color: '#d6d6d6', // Light color for contrast
                    textShadow: '2px 2px 4px rgba(0,0,0,0.7)', // Text shadow for readability
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' } // Responsive font size
                }}
            >
                Our Portfolio
            </Typography>
            <Typography 
                variant="h5" 
                sx={{ 
                    color: '#d6d6d6', // Slightly darker light color
                    maxWidth: '80%', 
                    textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
                    fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' } // Responsive font size
                }}
            >
                Explore our innovative projects and successful client collaborations.
            </Typography>
        </Box>
    );
};

export default HeroProjects;