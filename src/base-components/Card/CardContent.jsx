import React from 'react';
import PropTypes from 'prop-types';
import { CardContent as MuiCardContent } from '@mui/material';

export default function CardContent({ children, ...rest }) {
    return <MuiCardContent {...rest}>{children}</MuiCardContent>;
}

CardContent.propTypes = {
    children: PropTypes.node,
};
