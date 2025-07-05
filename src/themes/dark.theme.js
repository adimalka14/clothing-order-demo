import { createTheme } from '@mui/material/styles';

export const getDarkTheme = (direction) =>
    createTheme({
        direction,
        palette: {
            mode: 'dark',
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    text: {
                        color: '#ffffff',
                    },
                },
            },
        },
    });
