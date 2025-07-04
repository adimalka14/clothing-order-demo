import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { IconButton, Box, Image } from '/src/base-components/index.js';

export default function SlidingImages({
    images,
    width = '100%',
    height = '300px',
}) {
    const [index, setIndex] = useState(0);

    if (!images?.length) return null;

    const handlePrev = (e) => {
        e.stopPropagation();
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleNext = (e) => {
        e.stopPropagation();
        setIndex((prev) => (prev + 1) % images.length);
    };

    return (
        <Box
            styles={{
                position: 'relative',
                width,
                height,
            }}
        >
            <Image src={images[index].src} alt={images[index].alt} />

            <IconButton
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: 8,
                    transform: 'translateY(-50%)',
                    zIndex: 100,
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    '&:hover': {
                        backgroundColor: 'rgba(0,0,0,0.5)',
                    },
                }}
                onClick={handlePrev}
            >
                <ArrowBackIosNewIcon sx={{ color: '#fff' }} />
            </IconButton>

            <IconButton
                sx={{
                    position: 'absolute',
                    top: '50%',
                    right: 8,
                    zIndex: 100,
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    '&:hover': {
                        backgroundColor: 'rgba(0,0,0,0.5)',
                    },
                }}
                onClick={handleNext}
            >
                <ArrowForwardIosIcon sx={{ color: '#fff' }} />
            </IconButton>
        </Box>
    );
}

SlidingImages.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string,
        })
    ).isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
};
