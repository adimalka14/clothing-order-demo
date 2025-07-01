import React from 'react';
import PropTypes from 'prop-types';
import { default as MuiTooltip } from '@mui/material/Tooltip';

import { TOOLTIP_PLACEMENTS } from './tooltip.constants';

export default function Tooltip({
    title = '',
    arrow = true,
    placement = 'bottom',
    children,
}) {
    return (
        <MuiTooltip title={title} arrow={arrow} placement={placement}>
            <span style={{ display: 'inline-block' }}>{children}</span>
        </MuiTooltip>
    );
}

Tooltip.propTypes = {
    title: PropTypes.string,
    arrow: PropTypes.bool,
    placement: PropTypes.oneOf(TOOLTIP_PLACEMENTS),
    children: PropTypes.node,
};
