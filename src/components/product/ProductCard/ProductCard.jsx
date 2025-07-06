import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import {
    Card,
    CardActions,
    CardContent,
    Typography,
    IconButton,
} from '/src/base-components';
import SlidingImages from '../SlidingImages/SlidingImages.jsx';

export default function ProductCard({
    images,
    title,
    description,
    specification,
    price,
    onClick,
    maxWidth = 250,
    isLiked = false,
    height,
    onClickLike,
    priceCurrency = '$',
}) {
    const [liked, setLiked] = useState(isLiked);

    const handleLikeClick = (e) => {
        e.stopPropagation();
        setLiked(!liked);
        onClickLike?.(e);
    };

    return (
        <Card styles={{ maxWidth }}>
            <div onClick={onClick} style={{ cursor: 'pointer' }}>
                <SlidingImages images={images} height={height} />
                <CardContent styles={{ position: 'relative' }}>
                    <CardActions
                        styles={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            padding: 0,
                            position: 'absolute',
                            top: 0,
                            right: 0,
                        }}
                    >
                        <IconButton onClick={handleLikeClick}>
                            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                        </IconButton>
                    </CardActions>

                    <Typography
                        type="title"
                        styles={{ fontWeight: 'bold' }}
                        gutterBottom
                    >
                        {title}
                    </Typography>

                    {description && (
                        <Typography
                            type="body"
                            styles={{ color: 'text.secondary' }}
                        >
                            {description}
                        </Typography>
                    )}

                    {specification && (
                        <Typography
                            type="body"
                            styles={{ color: 'text.secondary' }}
                        >
                            {specification}
                        </Typography>
                    )}

                    {price && (
                        <Typography
                            type="subtitle"
                            styles={{ fontWeight: 'bold', color: 'primary' }}
                        >
                            {priceCurrency}
                            {price}
                        </Typography>
                    )}
                </CardContent>
            </div>
        </Card>
    );
}

ProductCard.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string,
        })
    ).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    specification: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onClick: PropTypes.func,
    onClickLike: PropTypes.func,
    isLiked: PropTypes.bool,
    priceCurrency: PropTypes.string,
    maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
