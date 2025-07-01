import React, { useState } from 'react';
import Select from '../Select';

export default {
    title: 'Base-Component/Select',
    component: Select,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        selected: { control: 'text' },
        label: { control: 'text' },
        placeholder: { control: 'text' },
        helperText: { control: 'text' },
        error: { control: 'boolean' },
        disabled: { control: 'boolean' },
        required: { control: 'boolean' },
        size: {
            control: 'radio',
            options: ['small', 'medium'],
        },
        fullWidth: { control: 'boolean' },
        variant: {
            control: 'radio',
            options: ['outlined', 'filled', 'standard'],
        },
        startCmp: { control: 'text' },
        endCmp: { control: 'text' },
    },
    args: {
        selected: '',
    },
};

const options = [
    { value: 'a', label: 'Option A' },
    { value: 'b', label: 'Option B' },
    { value: 'c', label: 'Option C' },
];

export const Default = (props) => {
    const [value, setValue] = useState('');
    return (
        <Select
            {...props}
            id="default-select"
            label="Default Select"
            selected={value}
            onChange={(e) => setValue(e.target.value)}
            options={options}
            helperText="Choose an option"
        />
    );
};

export const WithPlaceholder = (props) => {
    const [value, setValue] = useState('');
    return (
        <Select
            {...props}
            id="placeholder-select"
            label="Select with Placeholder"
            placeholder="Select one"
            selected={value}
            onChange={(e) => setValue(e.target.value)}
            options={options}
        />
    );
};

export const ErrorState = (props) => {
    const [value, setValue] = useState('');
    return (
        <Select
            {...props}
            id="error-select"
            label="Error Select"
            selected={value}
            onChange={(e) => setValue(e.target.value)}
            options={options}
            error
            helperText="This field is required"
        />
    );
};

export const Disabled = (props) => (
    <Select
        {...props}
        id="disabled-select"
        label="Disabled Select"
        selected=""
        onChange={() => {}}
        options={options}
        disabled
        helperText="Cannot select an option"
    />
);

export const SmallSize = (props) => {
    const [value, setValue] = useState('');
    return (
        <Select
            {...props}
            id="small-select"
            label="Small Select"
            size="small"
            selected={value}
            onChange={(e) => setValue(e.target.value)}
            options={options}
        />
    );
};

export const WithStartEndCmp = (props) => {
    const [value, setValue] = useState('');
    return (
        <Select
            {...props}
            id="adornment-select"
            label="Select with Adornments"
            selected={value}
            onChange={(e) => setValue(e.target.value)}
            options={options}
            startCmp={<span>👈</span>}
            endCmp={<span>👉</span>}
        />
    );
};
