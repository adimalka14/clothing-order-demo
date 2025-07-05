import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
    LightMode,
    DarkMode,
    ShoppingCart as ShoppingCartIcon,
} from '@mui/icons-material';

import { useCart } from '../../../services/useCart.js';
import {
    AppBar as BaseAppBar,
    IconButton,
    Button,
    Tooltip,
} from '/src/base-components';
import { useThemeContext } from '/src/themes/Provider.jsx';

export default function AppBar() {
    const { count } = useCart();
    const navigate = useNavigate();
    const { theme, handleSetTheme } = useThemeContext();

    const toggleTheme = () => {
        handleSetTheme(theme === 'light' ? 'dark' : 'light');
    };

    const handleTitleClick = () => {
        navigate('/');
    };
    const handleCartClick = () => {
        navigate('/cart');
    };

    return (
        <BaseAppBar
            color={'primary'}
            title={
                <Tooltip title={'Pass to the home page'}>
                    <Button onClick={handleTitleClick} variant={'text'}>
                        Clothing Order
                    </Button>{' '}
                </Tooltip>
            }
            titlePosition={'left'}
            titleGrow={true}
            position={'sticky'}
            rightContent={
                <Tooltip title={'Cart'}>
                    <IconButton
                        badgeContent={count}
                        color={'inherit'}
                        onClick={handleCartClick}
                    >
                        <ShoppingCartIcon />
                    </IconButton>
                </Tooltip>
            }
            leftContent={
                <IconButton color={'inherit'} onClick={toggleTheme}>
                    {theme === 'dark' ? <DarkMode /> : <LightMode />}
                </IconButton>
            }
        />
    );
}
