import React from 'react';
import PropTypes from 'prop-types';
import { Stack as MuiStack } from '@mui/material';

export default function Stack({
    children,
    styles = {},
    className = '',
    direction = 'column',
    spacing = 0,
}) {
    return (
        <MuiStack
            sx={styles}
            className={className}
            direction={direction}
            spacing={spacing}
        >
            {children}
        </MuiStack>
    );
}

Stack.propTypes = {
    children: PropTypes.node,
    styles: PropTypes.object,
    className: PropTypes.string,
    direction: PropTypes.oneOf([
        'row',
        'row-reverse',
        'column',
        'column-reverse',
    ]),
    spacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
