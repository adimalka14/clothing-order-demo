import React from 'react';
import PropTypes from 'prop-types';
import {
    MenuItem as MuiMenuItem,
    Select as MuiSelect,
    FormControl,
    InputLabel,
    FormHelperText,
} from '@mui/material';

export default function Select({
                                   id,
                                   label,
                                   placeholder,
                                   variant = 'outlined',
                                   selected,
                                   fullWidth = true,
                                   error,
                                   helperText,
                                   disabled,
                                   required,
                                   size = 'medium',
                                   options = [],
                                   onChange,
                                   startCmp,
                                   endCmp,
                               }) {
    return (
        <FormControl fullWidth={fullWidth} variant={variant} size={size} error={error}>
            {label && <InputLabel id={`${id}-label`}>{label}</InputLabel>}
            <MuiSelect
                labelId={`${id}-label`}
                id={id}
                label={label}
                variant={variant}
                placeholder={placeholder}
                value={selected}
                onChange={onChange}
                disabled={disabled}
                required={required}
                startAdornment={startCmp}
                endAdornment={endCmp}
            >
                {options.map(({ value, label }) => (
                    <MuiMenuItem key={value} value={value}>
                        {label}
                    </MuiMenuItem>
                ))}
            </MuiSelect>
            {helperText && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
    );
}

Select.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    variant: PropTypes.oneOf(['outlined', 'filled', 'standard']),
    selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fullWidth: PropTypes.bool,
    error: PropTypes.bool,
    helperText: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium']),
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            label: PropTypes.string.isRequired,
        })
    ),
    onChange: PropTypes.func.isRequired,
    startCmp: PropTypes.node,
    endCmp: PropTypes.node,
};
