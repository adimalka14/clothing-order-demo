import React from 'react';
import PropTypes from 'prop-types';
import {
    ToggleButton as MuiToggleButton,
    ToggleButtonGroup as MuiToggleButtonGroup,
} from '@mui/material';

export default function ToggleButtonGroup({
    value,
    onChange,
    options = [],
    exclusive = true,
    size = 'medium',
    color = 'primary',
    fullWidth = false,
    ...rest
}) {
    return (
        <MuiToggleButtonGroup
            value={value}
            exclusive={exclusive}
            onChange={onChange}
            fullWidth={fullWidth}
            size={size}
            color={color}
            {...rest}
        >
            {options.map((option) => (
                <MuiToggleButton
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                >
                    {option.icon && (
                        <span style={{ marginRight: 4 }}>{option.icon}</span>
                    )}
                    {option.label}
                </MuiToggleButton>
            ))}
        </MuiToggleButtonGroup>
    );
}

ToggleButtonGroup.propTypes = {
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.any.isRequired,
            label: PropTypes.node.isRequired,
            icon: PropTypes.node,
            disabled: PropTypes.bool,
        })
    ).isRequired,
    exclusive: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    color: PropTypes.oneOf([
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning',
    ]),
    fullWidth: PropTypes.bool,
};
