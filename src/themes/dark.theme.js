import { createTheme } from '@mui/material/styles';

export const getDarkTheme = (direction) =>
    createTheme({
        direction,
        palette: {
            mode: 'dark',
            background: {
                paper: 'rgba(251,224,157,0.63)',
            },
        },
    });
