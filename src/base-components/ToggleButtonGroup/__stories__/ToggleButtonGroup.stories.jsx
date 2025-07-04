import React, { useState } from 'react';
import ToggleButtonGroup from '../ToggleButtonGroup';
import { Box } from '@mui/material';

export default {
    title: 'base-component/ToggleButtonGroup',
    component: ToggleButtonGroup,
};

const Template = (args) => {
    const [value, setValue] = useState(args.value || '');

    const handleChange = (event, newValue) => {
        if (newValue !== null) {
            setValue(newValue);
        }
    };

    return (
        <Box width="300px">
            <ToggleButtonGroup
                {...args}
                value={value}
                onChange={handleChange}
            />
        </Box>
    );
};

export const Default = Template.bind({});
Default.args = {
    value: 'left',
    options: [
        { value: 'left', label: 'Left' },
        { value: 'center', label: 'Center' },
        { value: 'right', label: 'Right' },
    ],
    exclusive: true,
    size: 'medium',
    color: 'primary',
    fullWidth: true,
};

export const WithIcons = Template.bind({});
WithIcons.args = {
    value: 'bold',
    options: [
        { value: 'bold', label: 'Bold', icon: <strong>B</strong> },
        { value: 'italic', label: 'Italic', icon: <em>I</em> },
        { value: 'underlined', label: 'Underline', icon: <u>U</u> },
    ],
    exclusive: true,
    size: 'large',
    color: 'secondary',
    fullWidth: true,
};

export const DisabledOption = Template.bind({});
DisabledOption.args = {
    value: 'a',
    options: [
        { value: 'a', label: 'Option A' },
        { value: 'b', label: 'Option B', disabled: true },
        { value: 'c', label: 'Option C' },
    ],
    exclusive: true,
    size: 'small',
    color: 'success',
    fullWidth: false,
};
