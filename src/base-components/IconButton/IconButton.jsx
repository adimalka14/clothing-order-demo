import React from 'react';
import PropTypes from 'prop-types';
import {
    IconButton as MuiIconButton,
    Badge,
    badgeClasses,
    styled,
} from '@mui/material';

const IconButtonBadge = styled(Badge)`
    & .${badgeClasses.badge} {
        top: -12px;
        right: -6px;
    }
`;

export default function IconButton({
    children,
    color = 'default',
    edge,
    size = 'medium',
    disabled = false,
    onClick,
    badgeContent,
    badgeColor = 'error',
    badgeVariant = 'standard',
    ...rest
}) {
    return (
        <MuiIconButton
            color={color}
            edge={edge}
            size={size}
            disabled={disabled}
            onClick={onClick}
            {...rest}
        >
            {children}
            {badgeContent !== undefined && badgeContent !== null && (
                <IconButtonBadge
                    badgeContent={badgeContent}
                    color={badgeColor}
                    variant={badgeVariant}
                />
            )}
        </MuiIconButton>
    );
}

IconButton.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf([
        'default',
        'inherit',
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning',
    ]),
    edge: PropTypes.oneOf(['start', 'end', false]),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    badgeContent: PropTypes.node,
    badgeColor: PropTypes.oneOf([
        'default',
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning',
    ]),
    badgeVariant: PropTypes.oneOf(['standard', 'dot']),
};
