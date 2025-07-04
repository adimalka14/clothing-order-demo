import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '/src/base-components';

export default function CartSummary({ total }) {
    return (
        <Box styles={{ marginTop: '2rem', textAlign: 'right' }}>
            <Typography type="title">Total: ${total.toFixed(2)}</Typography>
        </Box>
    );
}

CartSummary.propTypes = {
    total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
