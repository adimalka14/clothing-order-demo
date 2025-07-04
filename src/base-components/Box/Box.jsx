import React from 'react';
import PropTypes from 'prop-types';
import { Box as MuiBox } from '@mui/material';

export default function Box({
    children,
    styles = {},
    className = '',
    padding,
    margin,
    display,
}) {
    return (
        <MuiBox
            sx={{
                ...styles,
                ...(padding !== undefined && { p: padding }),
                ...(margin !== undefined && { m: margin }),
                ...(display !== undefined && { display }),
            }}
            className={className}
        >
            {children}
        </MuiBox>
    );
}

Box.propTypes = {
    children: PropTypes.node,
    styles: PropTypes.object,
    className: PropTypes.string,
    padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    display: PropTypes.string,
};
