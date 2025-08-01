import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import { Box, Button, Textfield, Typography, useTheme } from '@mui/material';
import { tokens } from './theme';

const Cookie = () => {
    const theme = useTheme();
    const colors = tokens(theme.pallete.mode);

    const [cookieValue, setCookieValue] = useState('');
    const [inputKey, setInputKey] =useState('');
    const [inputValue, setInputValue] = useState('');
    const [readKey, setReadKey] = useState('');
    const [readResult, setReadResult] = useState('');

    //On component mount, try to read a default cookie
    useEffect(() => {
        const myDefaultCookie = Cookies.get('myDefaultData');
        if(myDefaultCookie) {
            setCookieValue(myDefaultCookie);
        } else {
            setCookieValue('No "myDefaultData" cookie found.');
        }
    }, []);

    const handleSetCookie = () => {
        if (inputKey && inputValue) {
            Cookies.set(inputKey, inputValue, { expires: 7, secure: true, sameSite: 'Lax' });
            alert(`Cookie "${inputKey}" set to "${inputValue}"!`);
            if (inputKey === 'myDefaultData'){
                setCookieValue(inputValue);
            }
        } else {
            alert('Please enter both a key and a value to set the cookie');
        }
    };

    return (
        <Box m="20px">
            <Typograpgy variant="h4" color={colors.grey[100]} mb="20px">
                Cookies
            </Typograpgy>

            <Box mb="30px">
                <Typography variant="h6" color={colors.greenAccent[300]}>
                    Current "myDefaultData" cookie value:
                </Typography>
                <Typography variant="body1" color={colors.grey[300]}>
                    {cookieValue}
                </Typography>
            </Box>

            {/*Set Cookie Section */}
            <Box mb="30px" p="20px" borderRadius="8px" sx={{ backgroundColor: colors.primary[400] }}>
                <Typography variant="h5" color={colors.greenAccent[400]} mb="15px">
                    Set a Cookie
                </Typography>
                <TextField
                    label="Cookie Key"
                    variant="filled"
                    fullWidth
                    value={inputKey}
                    onChange={(e) => setInputKey(e.target.value)}
                    sx={{ mb: 2, '& .MuiInputBase-input': { color: colors.grey[100] }, '& .MuiInputLabel-root': { color: colors.greenAccent[300] }, '& .MuiFilledInput-root': { backgroundColor: colors.primary[500] } }}
                />
                <TextField
                    label="Cookie Value"
                    variant="filled"
                    fullWidth
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    sx={{ mb: 2, '& .MuiInputBase-input': { color: colors.grey[100] }, '& .MuiInputLabel-root': { color: colors.greenAccent[300] }, '& .MuiFilledInput-root': { backgroundColor: colors.primary[500] } }}
                />
                <Button
                    onClick={handleSetCookie}
                    sx={{
                        backgroundColor: colors.blueAccent[700],
                        color: colors.grey[100],
                        padding: "10px 20px",
                        '&:hover': { backgroundColor: colors.blueAccent[800] }
                    }}
                >
                    Set Cookie
                </Button>
            </Box>

            {/* Get/Remove Cookie Section */}
            <Box p="20px" borderRadius="8px" sx={{ backgroundColor: colors.primary[400] }}>
                <Typography variant="h5" color={colors.greenAccent[400]} mb="15px">
                    Get or Remove a Cookie
                </Typography>
                <TextField
                    label="Cookie Key to Read/Remove"
                    variant="filled"
                    fullWidth
                    value={readKey}
                    onChange={(e) => setReadKey(e.target.value)}
                    sx={{ mb: 2, '& .MuiInputBase-input': { color: colors.grey[100] }, '& .MuiInputLabel-root': { color: colors.greenAccent[300] }, '& .MuiFilledInput-root': { backgroundColor: colors.primary[500] } }}
                />
                <Box display="flex" gap="10px">
                    <Button
                        onClick={handleGetCookie}
                        sx={{
                            backgroundColor: colors.greenAccent[700],
                            color: colors.grey[100],
                            padding: "10px 20px",
                            '&:hover': { backgroundColor: colors.greenAccent[800] }
                        }}
                    >
                        Get Cookie
                    </Button>
                    <Button
                        onClick={handleRemoveCookie}
                        sx={{
                            backgroundColor: colors.redAccent[700],
                            color: colors.grey[100],
                            padding: "10px 20px",
                            '&:hover': { backgroundColor: colors.redAccent[800] }
                        }}
                    >
                        Remove Cookie
                    </Button>
                </Box>
                {readResult && (
                    <Typography variant="body2" color={colors.grey[300]} mt="15px">
                        Result: {readResult}
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

export default Cookie;