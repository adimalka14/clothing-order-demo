import React from 'react';
import PropTypes from 'prop-types';
import {
    Favorite as FavoriteIcon,
    FavoriteBorder as FavoriteBorderIcon,
    ShoppingCart as ShoppingCartIcon,
} from '@mui/icons-material';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';

import SlidingImages from '/src/components/product/SlidingImages/SlidingImages';
import {
    IconButton,
    Button,
    Box,
    Typography,
    Stack,
} from '/src/base-components';

export default function ProductPageDisplay({
    name,
    description,
    price,
    priceCurrency = '$',
    images,
    onAddToCart,
    onToggleLike,
    isLiked,
    actions,
    addLoading,
    status,
    children,
}) {
    return (
        <Box
            styles={{
                mx: 'auto',
                p: { xs: 2, md: '5em' },
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: 2, md: 5 },
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <SlidingImages images={images} height="400px" width="400px" />

            <Box styles={{ marginTop: 2 }}>
                <Typography
                    type="title"
                    styles={{ fontWeight: 'bold' }}
                    gutterBottom
                >
                    {name}
                </Typography>

                <Typography
                    type="body"
                    styles={{ color: 'text.secondary' }}
                    gutterBottom
                >
                    {description}
                </Typography>

                <Typography
                    type="subtitle"
                    styles={{
                        fontWeight: 'bold',
                        color: 'primary',
                        fontSize: 24,
                    }}
                    gutterBottom
                    marginTop={2}
                >
                    {priceCurrency}
                    {price}
                </Typography>

                {children}

                {actions}

                <Stack
                    direction="row"
                    spacing={2}
                    marginTop={2}
                    styles={{ justifyContent: 'center' }}
                >
                    <Button
                        variant="contained"
                        onClick={onAddToCart}
                        loading={addLoading}
                    >
                        Add to Cart <ShoppingCartIcon />
                    </Button>
                    <IconButton onClick={onToggleLike}>
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                </Stack>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={!!status}
                    message={status?.msg}
                    TransitionComponent={Slide}
                />
            </Box>
        </Box>
    );
}

ProductPageDisplay.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    priceCurrency: PropTypes.string,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string,
        })
    ).isRequired,
    onAddToCart: PropTypes.func,
    onToggleLike: PropTypes.func,
    isLiked: PropTypes.bool,
    actions: PropTypes.node,
    children: PropTypes.node,
};
