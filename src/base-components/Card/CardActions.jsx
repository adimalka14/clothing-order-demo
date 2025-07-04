import React from 'react';
import PropTypes from 'prop-types';
import { CardActions as MuiCardActions } from '@mui/material';

export default function CardActions({ children, styles = {}, className = '' }) {
    return (
        <MuiCardActions sx={styles} className={className}>
            {children}
        </MuiCardActions>
    );
}

CardActions.propTypes = {
    children: PropTypes.node,
    styles: PropTypes.object,
    className: PropTypes.string,
};
