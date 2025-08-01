import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme'; // Path relative to src/components/

const HeroContacts = () => {
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
                mb: '40px', // Margin bottom
                
                boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.2)',

                // Background styling
                backgroundColor: '#005197', // Different color for differentiation
                
                // Option 2: Gradient
                // background: `linear-gradient(45deg, ${colors.greenAccent[700]} 30%, ${colors.tealAccent[700]} 90%)`,

                // Option 3: Image
                // backgroundImage: 'url("https://example.com/your-contact-hero-image.jpg")', // Replace with your image URL
                // backgroundSize: 'cover',
                // backgroundPosition: 'center',
                // backgroundAttachment: 'fixed',
                // filter: 'brightness(0.8)',
            }}
        >
            <Typography 
                variant="h2" 
                fontWeight="bold" 
                
                gutterBottom 
                sx={{ 
                    color: '#d6d6d6', 
                    textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' } 
                }}
            >
                Get in Touch
            </Typography>
            <Typography 
                variant="h5" 
                sx={{ 
                    color: '#d6d6d6', 
                    maxWidth: '80%', 
                    textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
                    fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' } 
                }}
            >
                We'd love to hear from you! Reach out for inquiries, collaborations, or support.
            </Typography>
        </Box>
    );
};

export default HeroContacts;