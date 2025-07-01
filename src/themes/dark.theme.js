import { createTheme } from '@mui/material/styles';

export const getDarkTheme = (direction) =>
    createTheme({
        direction,
        palette: {
            mode: 'dark',
        },
    });
