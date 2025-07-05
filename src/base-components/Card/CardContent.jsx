import React from 'react';
import PropTypes from 'prop-types';
import { CardContent as MuiCardContent } from '@mui/material';

export default function CardContent({
    styles = {},
    className = '',
    children,
    ...rest
}) {
    return (
        <MuiCardContent sx={styles} className={className} {...rest}>
            {children}
        </MuiCardContent>
    );
}

CardContent.propTypes = {
    children: PropTypes.node,
    styles: PropTypes.object,
    className: PropTypes.string,
};
