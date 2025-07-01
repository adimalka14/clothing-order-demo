import React, { useState } from 'react';
import IconButton from '../IconButton';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';


export default {
    title: 'base-component/IconButton',
    component: IconButton,
    argTypes: {
        color: {
            control: 'select',
            options: ['default', 'inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
    },
};

export const CartWithBadge = (args) => (
    <IconButton
        badgeContent={3}
        badgeColor="primary"
        {...args}
    >
        <ShoppingCartIcon />
    </IconButton>
);
CartWithBadge.args = {
    color: 'default',
    size: 'medium',
};
CartWithBadge.parameters = {
    docs: {
        description: {
            story: 'Shopping cart icon with badge showing item count (3).',
        },
    },
};

export const PlainIcon = (args) => (
    <IconButton {...args}>
        <MenuIcon />
    </IconButton>
);
PlainIcon.args = {
    color: 'default',
    size: 'medium',
};
PlainIcon.parameters = {
    docs: {
        description: {
            story: 'A simple IconButton with a menu icon and no badge.',
        },
    },
};

export const ToggleLike = (args) => {
    const [liked, setLiked] = useState(false);

    return (
        <IconButton
            {...args}
            color={liked ? 'primary' : 'default'}
            onClick={() => setLiked(!liked)}
        >
            {liked ? <ThumbUpIcon /> : <ThumbUpOffAltIcon />}
        </IconButton>
    );
};
ToggleLike.args = {
    size: 'medium',
};
ToggleLike.parameters = {
    docs: {
        description: {
            story: 'A like button that toggles between liked and unliked states on click.',
        },
    },
};


export const NotificationsDot = (args) => (
    <IconButton
        badgeContent={true}
        badgeVariant="dot"
        badgeColor="error"
        {...args}
    >
        <NotificationsIcon />
    </IconButton>
);
NotificationsDot.args = {
    color: 'default',
    size: 'medium',
};
NotificationsDot.parameters = {
    docs: {
        description: {
            story: 'A notifications icon with a small red dot indicating new messages or alerts.',
        },
    },
};