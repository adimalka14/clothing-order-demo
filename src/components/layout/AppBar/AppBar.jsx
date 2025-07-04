import React from 'react';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useCart } from '../../../services/useCart.js';
import {
    AppBar as BaseAppBar,
    IconButton,
    Button,
    Tooltip,
} from '/src/base-components';

export default function AppBar() {
    const { count } = useCart();
    const navigate = useNavigate();

    const handleTitleClick = () => {
        navigate('/');
    };
    const handleCartClick = () => {
        navigate('/cart');
    };

    return (
        <BaseAppBar
            title={
                <Tooltip title={'Pass to the home page'}>
                    <Button onClick={handleTitleClick}>
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
        />
    );
}
