import React from 'react';
import PropTypes from 'prop-types';
import { Stack as MuiStack } from '@mui/material';

export default function Stack({
    children,
    styles = {},
    className = '',
    direction = 'column',
    alignItems = 'center',
    justifyContent = 'center',
    spacing = 0,
}) {
    return (
        <MuiStack
            sx={styles}
            className={className}
            direction={direction}
            spacing={spacing}
            alignItems={alignItems}
            justifyContent={justifyContent}
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
    alignItems: PropTypes.oneOf([
        'flex-start',
        'center',
        'flex-end',
        'stretch',
        'baseline',
    ]),
    justifyContent: PropTypes.oneOf([
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
    ]),
};
