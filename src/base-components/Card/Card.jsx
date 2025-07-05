import React from 'react';
import PropTypes from 'prop-types';
import { Card as MuiCard } from '@mui/material';

export default function Card({
    children,
    styles = {},
    className = '',
    onClick,
}) {
    return (
        <MuiCard sx={styles} className={className} onClick={onClick}>
            {children}
        </MuiCard>
    );
}

Card.propTypes = {
    children: PropTypes.node,
    styles: PropTypes.object,
    className: PropTypes.string,
    onClick: PropTypes.func,
};
