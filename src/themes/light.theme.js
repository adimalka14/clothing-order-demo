import { createTheme } from '@mui/material/styles';

export const getLightTheme = (direction) =>
    createTheme({
        direction,
        palette: {
            mode: 'light',
            primary: {
                main: '#373737',
            },
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
