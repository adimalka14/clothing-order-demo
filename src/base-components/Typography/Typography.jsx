import React from 'react';
import PropTypes from 'prop-types';
import { Typography as MuiTypography } from '@mui/material';

export default function Typography({
    children,
    styles = {},
    className = '',
    type = 'body',
    align = 'inherit',
    color = 'inherit',
    fontWeight,
    gutterBottom = false,
}) {
    const variantMap = {
        title: 'h6',
        subtitle: 'subtitle1',
        body: 'body1',
        caption: 'caption',
    };

    return (
        <MuiTypography
            variant={variantMap[type]}
            align={align}
            gutterBottom={gutterBottom}
            color={color}
            sx={{
                ...styles,
                ...(fontWeight !== undefined && { fontWeight }),
            }}
            className={className}
        >
            {children}
        </MuiTypography>
    );
}

Typography.propTypes = {
    children: PropTypes.node.isRequired,
    styles: PropTypes.object,
    className: PropTypes.string,
    type: PropTypes.oneOf(['title', 'subtitle', 'body', 'caption']),
    align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
    fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    color: PropTypes.string,
    gutterBottom: PropTypes.bool,
};
