import React, { useContext, useState, useEffect, createContext } from 'react';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { DirectionWrapper } from '../wrappers/direction.wrapper.jsx';
import { getLightTheme } from './light.theme';
import { getDarkTheme } from './dark.theme';

const ThemeContext = createContext(null);

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ initialDir, initialTheme, children }) => {
    const [dir, setDir] = useState(
        localStorage.getItem('dir') || initialDir || 'ltr'
    );
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || initialTheme || 'light'
    );

    useEffect(() => {
        if (initialDir && initialDir !== dir) {
            setDir(initialDir);
        }
    }, [initialDir]);

    useEffect(() => {
        if (initialTheme && initialTheme !== theme) {
            setTheme(initialTheme);
        }
    }, [initialTheme]);

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    let muiTheme;

    switch (theme) {
        case 'dark':
            muiTheme = getDarkTheme(dir);
            break;
        case 'light':
            muiTheme = getLightTheme(dir);
            break;
        default:
            muiTheme = getLightTheme(dir);
            break;
    }

    const handleSetDir = (dir) => {
        setDir(dir);
    };

    const handleSetTheme = (theme) => {
        setTheme(theme);
    };

    return (
        <ThemeContext.Provider
            value={{ dir, theme, handleSetDir, handleSetTheme }}
        >
            <DirectionWrapper direction={dir}>
                <MuiThemeProvider theme={muiTheme}>
                    <CssBaseline />
                    {children}
                </MuiThemeProvider>
            </DirectionWrapper>
        </ThemeContext.Provider>
    );
};
