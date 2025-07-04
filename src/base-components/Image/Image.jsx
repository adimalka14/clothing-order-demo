import React from 'react';
import PropTypes from 'prop-types';

import { CardMedia } from '@mui/material';

export default function Image({ src, alt }) {
    return (
        <CardMedia
            component="img"
            height="140"
            image={src}
            alt={alt}
            sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
            }}
        />
    );
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
};
