import { createTheme } from '@mui/material/styles';

export const getLightTheme = (direction) =>
    createTheme({
        direction,
        palette: {
            mode: 'light',
            primary: {
                main: '#222222',
            },
        },
    });
