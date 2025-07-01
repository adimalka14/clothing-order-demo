import React from 'react';
import PropTypes from 'prop-types';

import { default as MuiButton } from '@mui/material/Button';

export default function Button({
    onClick,
    disabled = false,
    startIcon,
    endIcon,
    variant = 'contained',
    children,
    ...props
}) {
    return (
        <MuiButton
            onClick={onClick}
            disabled={disabled}
            startIcon={startIcon}
            endIcon={endIcon}
            variant={variant}
            {...props}
        >
            {children}
        </MuiButton>
    );
}

Button.propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    startIcon: PropTypes.node,
    endIcon: PropTypes.node,
    variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
};
