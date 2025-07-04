import React, { useState } from 'react';
import { IconButton, Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

import AppBar from '../AppBar';

export default {
    title: 'base-component/AppBar',
    component: AppBar,
    parameters: {
        docs: {
            description: {
                component:
                    'Reusable AppBar component wrapping MUI AppBar. Supports flexible left and right content, customizable title position, and growth.',
            },
        },
    },
    argTypes: {
        title: {
            control: 'text',
            description: 'The title text or node to display in the AppBar',
        },
        position: {
            control: 'select',
            options: ['fixed', 'static', 'absolute'],
            description: 'The position of the AppBar in the layout',
        },
        titleGrow: {
            control: 'boolean',
            description:
                'If true, the title will take up remaining space (flexGrow = 1)',
        },
        titlePosition: {
            control: 'select',
            options: ['left', 'center', 'right'],
            description: 'Text alignment of the title',
        },
    },
};

export const Default = (args) => <AppBar {...args} />;
Default.args = {
    title: 'My App',
    titleGrow: false,
    titlePosition: 'left',
};
Default.parameters = {
    docs: {
        description: {
            story: 'A basic AppBar with just a title.',
        },
    },
};

export const WithLeftIcon = (args) => (
    <AppBar
        {...args}
        leftContent={
            <IconButton color="inherit">
                <MenuIcon />
            </IconButton>
        }
    />
);
WithLeftIcon.args = {
    title: 'App with Left Icon',
    titleGrow: false,
    titlePosition: 'left',
};
WithLeftIcon.parameters = {
    docs: {
        description: {
            story: 'AppBar with a left-side icon button (e.g., menu icon).',
        },
    },
};

export const WithRightButton = (args) => (
    <AppBar {...args} rightContent={<Button color="inherit">Login</Button>} />
);
WithRightButton.args = {
    title: 'App with Right Button',
    titleGrow: false,
    titlePosition: 'left',
};
WithRightButton.parameters = {
    docs: {
        description: {
            story: 'AppBar with a right-side login button.',
        },
    },
};

export const WithRightMenu = (args) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            {...args}
            rightContent={
                <>
                    <IconButton color="inherit" onClick={handleMenu}>
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </>
            }
        />
    );
};
WithRightMenu.args = {
    title: 'App with Right Menu',
    titleGrow: false,
    titlePosition: 'left',
};
WithRightMenu.parameters = {
    docs: {
        description: {
            story: 'AppBar with a right-side menu (e.g., user profile).',
        },
    },
};

export const LeftAndRightContent = (args) => (
    <AppBar
        {...args}
        leftContent={
            <IconButton color="inherit">
                <MenuIcon />
            </IconButton>
        }
        rightContent={
            <>
                <Button color="inherit">Login</Button>
                <IconButton color="inherit">
                    <AccountCircle />
                </IconButton>
            </>
        }
    />
);
LeftAndRightContent.args = {
    title: 'Full AppBar',
    titleGrow: false,
    titlePosition: 'left',
};
LeftAndRightContent.parameters = {
    docs: {
        description: {
            story: 'AppBar with both left and right content.',
        },
    },
};
