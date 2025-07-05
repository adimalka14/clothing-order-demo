import React from 'react';
import PropTypes from 'prop-types';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { styled } from '@mui/material/styles';

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
                    <Button variant="contained" onClick={onAddToCart}>
                        Add to Cart
                    </Button>

                    <IconButton onClick={onToggleLike}>
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                </Stack>
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
