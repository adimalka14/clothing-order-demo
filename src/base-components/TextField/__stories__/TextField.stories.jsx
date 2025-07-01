import React, { useState } from 'react';
import {
    Search as SearchIcon,
    Visibility as VisibilityIcon,
    VisibilityOff as VisibilityOffIcon,
    Info as InfoIcon,
} from '@mui/icons-material';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';

import TextField from '../TextField';
import { TEXT_FIELD_TYPES } from '../textField.constants.js';

export default {
    title: 'base-component/TextField',
    component: TextField,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: TEXT_FIELD_TYPES,
        },
        value: { control: 'text' },
        label: { control: 'text' },
        placeholder: { control: 'text' },
        variant: {
            control: 'radio',
            options: ['outlined', 'filled', 'standard'],
        },
        fullWidth: { control: 'boolean' },
        error: { control: 'boolean' },
        helperText: { control: 'text' },
        disabled: { control: 'boolean' },
        readOnly: { control: 'boolean' },
        required: { control: 'boolean' },
        size: {
            control: 'radio',
            options: ['small', 'medium'],
        },
        multiline: { control: 'boolean' },
        startCmp: { control: 'text' },
        endCmp: { control: 'text' },
    },
    args: {
        value: '',
    },
};

const InteractiveTemplate = () => {
    const [{ value, ...args }, updateArgs] = useArgs();

    const handleChange = (e) => {
        updateArgs({ value: e.target.value });
    };

    return <TextField {...args} value={value} onChange={fn(handleChange)} />;
};

// 🟢 Default
export const Default = InteractiveTemplate.bind({});
Default.parameters = {
    docs: {
        description: {
            story: 'The default TextField wrapper with MUI, supports adornments, error states, select mode, and fullWidth behavior.',
        },
    },
};

export const Types = () => {
    return (
        <div style={{ gap: '1rem', display: 'flex', flexDirection: 'column' }}>
            <TextField id="text" label="Text" type="text" />
            <TextField id="email" label="Email" type="email" />
            <TextField id="password" label="Password" type="password" />
            <TextField id="number" label="Number" type="number" />
            <TextField id="search" label="Search" type="search" />
            <TextField id="tel" label="Tel" type="tel" />
            <TextField id="url" label="URL" type="url" />
        </div>
    );
};

export const Multiline = InteractiveTemplate.bind({});
Multiline.args = {
    label: 'Multiline',
    multiline: true,
    rows: 4,
};

export const WithStartIcon = InteractiveTemplate.bind({});
WithStartIcon.args = {
    label: 'Search',
    startCmp: <SearchIcon />,
    placeholder: 'Type something...',
};
WithStartIcon.storyName = '🔍 With Start Icon';

export const WithCustomEndIcon = InteractiveTemplate.bind({});
WithCustomEndIcon.args = {
    label: 'Info field',
    endCmp: <InfoIcon />,
};
WithCustomEndIcon.storyName = '🧠 With Custom End Icon';

export const TogglePassword = (args) => {
    const [value, setValue] = useState();
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <TextField
            {...args}
            value={value}
            label="Password"
            onChange={fn(handleChange)}
            type={passwordVisible ? 'text' : 'password'}
            endCmp={
                passwordVisible ? (
                    <VisibilityIcon onClick={() => setPasswordVisible(false)} />
                ) : (
                    <VisibilityOffIcon
                        onClick={() => setPasswordVisible(true)}
                    />
                )
            }
        />
    );
};
TogglePassword.storyName = '👁️ Toggle Password Visibility';

export const SelectInteractive = InteractiveTemplate.bind({});
SelectInteractive.args = {
    label: 'Select option',
    select: true,
    value: '2',
    options: [
        { value: '1', label: 'Option One' },
        { value: '2', label: 'Option Two' },
        { value: '3', label: 'Option Three' },
    ],
};
SelectInteractive.storyName = '🔄 Interactive Select';

export const ErrorState = InteractiveTemplate.bind({});
ErrorState.args = {
    label: 'Email',
    value: 'invalid@email',
    error: true,
    helperText: 'Invalid email address',
};
ErrorState.storyName = '❌ Error State';

export const DisabledField = InteractiveTemplate.bind({});
DisabledField.args = {
    label: 'Disabled Field',
    value: 'Cannot edit this',
    disabled: true,
};
DisabledField.storyName = '🚫 Disabled Field';

export const Variants = () => {
    const [{ label, ...args }, updateArgs] = useArgs();
    const handleChange = (e) => updateArgs({ value: e.target.value });

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                width: '100%',
            }}
        >
            {['outlined', 'filled', 'standard'].map((variant) => (
                <TextField
                    key={variant}
                    {...args}
                    label={`${label || 'Field'} (${variant})`}
                    variant={variant}
                    onChange={fn(handleChange)}
                />
            ))}
        </div>
    );
};
Variants.args = {
    label: 'Demo',
    value: '',
};
Variants.storyName = '🎨 Variants Comparison';

export const Sizes = () => {
    const [{ label, ...args }, updateArgs] = useArgs();
    const handleChange = (e) => updateArgs({ value: e.target.value });

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                width: '100%',
            }}
        >
            {['small', 'medium'].map((size) => (
                <TextField
                    key={size}
                    {...args}
                    label={`${label || 'Size'} (${size})`}
                    size={size}
                    onChange={fn(handleChange)}
                />
            ))}
        </div>
    );
};
Sizes.args = {
    label: 'Size',
    value: '',
};
Sizes.storyName = '📏 Sizes Comparison';
