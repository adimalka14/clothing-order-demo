import { fn } from 'storybook/test';

import Button from '../Button.jsx';
import { Send as SendIcon, Delete as DeleteIcon } from '@mui/icons-material';

export default {
    title: 'base-component/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        disabled: {
            control: 'boolean',
        },
        variant: {
            control: 'radio',
            options: ['Text', 'outlined', 'contained'],
        },
        children: {
            control: 'text',
        },
        backgroundColor: { control: 'color' },
    },
    args: {
        onClick: fn(),
    },
};

export const Default = {};

export const StartIcon = {
    args: {
        startIcon: <SendIcon />,
        children: ['Start Icon'],
    },
};

export const EndIcon = {
    args: {
        endIcon: <DeleteIcon />,
        children: ['End Icon'],
    },
};

export const Disabled = {
    args: {
        disabled: true,
        children: ['Disabled'],
    },
};

export const TextVariant = {
    args: {
        variant: 'Text',
        children: ['Text'],
    },
};

export const OutlinedVariant = {
    args: {
        variant: 'outlined',
        children: ['Outlined'],
    },
};

export const ContainedVariant = {
    args: {
        variant: 'contained',
        children: ['Contained'],
    },
};
