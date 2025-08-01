import React, { useState } from 'react';
import { Box, TextField, Button, Typography, useTheme, Snackbar, Alert } from '@mui/material';
import { tokens } from '../../theme.js';
import HeroContacts from '../components/HeroContacts.jsx';
import { supabase } from '../../supabaseClient.js';

const Contact = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSnackbarOpen(false);

        if (!Name || !Email || !subject || !message) {
            setSnackbarMessage('Please fill in all fields.');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
            setLoading(false);
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(Email)) {
            setSnackbarMessage('Please enter a valid email address.');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
            setLoading(false);
            return;
        }

        try {
            const { data, error } = await supabase
                .from('enquiries')
                .insert([
                    {
                        name: Name,
                        email: Email,
                        subject: subject,
                        message: message,
                    },
                ]);

            if (error) {
                console.error("Error submitting enquiry:", error);
                setSnackbarMessage(`Failed to submit enquiry: ${error.message}`);
                setSnackbarSeverity('error');
            } else {
                console.log("Enquiry submitted successfully:", data);
                setSnackbarMessage('Your enquiry has been submitted successfully!');
                setSnackbarSeverity('success');
                setName('');
                setEmail('');
                setSubject('');
                setMessage(''); 
            }
        } catch (err) {
            console.error("Unexpected error:", err);
            setSnackbarMessage('An unexpected error occurred. Please try again.');
            setSnackbarSeverity('error');
        } finally {
            setLoading(false);
            setSnackbarOpen(true);
        }
    };

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    return (
        
        <Box >
            {/* Main container for form and map */}
            <HeroContacts />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' }, // Stacks on small, side-by-side on medium+
                    gap: '30px',
                    justifyContent: 'center',
                    alignItems: { xs: 'center', md: 'stretch' }, // Stretch vertically to match height
                    padding: '5px',
                    paddingLeft: '40px',
                    paddingRight: '40px',
                    
                    // --- MODIFIED: Allow this container to take full width ---
                    width: '100%', 
                    margin: '40px auto', // Centers the whole section
                }}
            >
                {/* Contact Form Box */}
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        flex: '1', // Takes equal available space
                        // --- MODIFIED: Removed specific maxWidth for md ---
                        // On xs, it takes 100% of its parent (which is now also 100% width)
                        maxWidth: { xs: '100%' }, 
                        padding: '30px',
                        borderRadius: '30px',
                        backgroundColor: '#005197',
                        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <Typography variant="h4" gutterBottom sx={{ color: '#D6D6D6',
                    textAlign: 'center',
                    fontWeight: 'bold',
                     }}>
                        Send Us a Message
                    </Typography>

                    <TextField
                        label="Your Name"
                        variant="filled"
                        fullWidth
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        sx={{
                            '& .MuiInputBase-input': { color: '#333' },
                            '& .MuiInputLabel-root': { color: '#D6D6D6' },
                            '& .MuiFilledInput-root': { backgroundColor: '#029cc3' }
                        }}
                    />
                    <TextField
                        label="Your Email"
                        variant="filled"
                        fullWidth
                        type="email"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        sx={{
                            '& .MuiInputBase-input': { color: '#333' },
                            '& .MuiInputLabel-root': { color: '#D6D6D6' },
                            '& .MuiFilledInput-root': { backgroundColor: '#029cc3' }
                        }}
                    />
                    <TextField
                        label="Subject"
                        variant="filled"
                        fullWidth
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        sx={{
                            '& .MuiInputBase-input': { color: '#333' },
                            '& .MuiInputLabel-root': { color: '#D6D6D6' },
                            '& .MuiFilledInput-root': { backgroundColor: '#029cc3' }
                        }}
                    />
                    <TextField
                        label="Your Message"
                        variant="filled"
                        fullWidth
                        multiline
                        rows={6}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        sx={{
                            '& .MuiInputBase-input': { color: '#333' },
                            '& .MuiInputLabel-root': { color: '#D6D6D6' },
                            '& .MuiFilledInput-root': { backgroundColor: '#029cc3' }
                        }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        disabled={loading}
                        sx={{
                            padding: '10px 20px',
                            fontSize: '16px',
                            backgroundColor: '#d6d6d6',
                            color: '#005197',
                            borderRadius: '30px',
                            '&:hover': {
                                backgroundColor: '#027a9c',
                                color: '#d6d6d6'
                            },
                        }}
                    >
                        {loading ? 'Submitting...' : 'Submit Enquiry'}
                    </Button>
                </Box>

                {/* Google Map Box */}
                <Box
                    sx={{
                        flex: '1', // Takes equal available space
                        // --- MODIFIED: Removed specific maxWidth for md ---
                        maxWidth: { xs: '100%' }, 
                        minHeight: { xs: '300px', md: '500px' }, // Minimum height, stretches with content if taller
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    {/* Remember to replace the 'src' with your actual Google Maps embed URL */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15878.718501235123!2d9.2238478!3d4.1534954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105f27c3c545f743%3A0x6b8a21e78c8a14b1!2sBuea%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1628182016480!5m2!1sen!2sus9" 
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map of Buea, Cameroon" 
                    ></iframe>
                </Box>
            </Box>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>

            <Box>
            {/* <h1 className='text-center text-4xl '>Follow us </h1> */}

            </Box>

            {/* <Footer title="Contact Us" subtitle="Send us your questions or feedback" /> */}
        </Box>
    );
};

export default Contact;