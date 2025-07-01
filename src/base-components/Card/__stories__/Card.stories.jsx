import React from 'react';
import Card from '../Card';
import { Typography, Button } from '@mui/material';

export default {
    title: 'base-component/Card',
    component: Card,
    argTypes: {
        elevation: { control: 'number' },
        variant: { control: 'select', options: ['outlined', 'elevation'] },
        width: { control: 'number' },
        height: { control: 'number' },
    },
};

export const Default = (args) => (
    <Card
        {...args}
        title="Default Card"
        content={<Typography>This is a simple card content.</Typography>}
    />
);
Default.args = {
    variant: 'outlined',
};

export const FixedSize = (args) => (
    <Card
        {...args}
        title="Fixed Size Card"
        content={<Typography>This card has fixed width and height.</Typography>}
        width={300}
        height={200}
    />
);
FixedSize.args = {
    variant: 'outlined',
};

export const Elevation = (args) => (
    <Card
        title="Card with Elevation"
        content={<Typography>This card has elevation.</Typography>}
        elevation={20}
        {...args}
    />
);
Elevation.args = {
    variant: 'elevation',
};

export const FullWidth = (args) => (
    <Card
        {...args}
        title="Full Width Card"
        content={
            <Typography>
                This card takes 100% of the container width.
            </Typography>
        }
        width="100%"
    />
);
FullWidth.args = {
    variant: 'outlined',
};

export const GridExample = () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {[1, 2, 3, 4].map((num) => (
            <Card
                key={num}
                title={`Card ${num}`}
                content={<Typography>Content of card {num}</Typography>}
                width={200}
                height={150}
            />
        ))}
    </div>
);
GridExample.parameters = {
    docs: {
        description: {
            story: 'Example of multiple cards in a grid layout.',
        },
    },
};

export const WithActions = (args) => (
    <Card
        {...args}
        title="Card with Actions"
        content={
            <Typography>
                This card has action buttons below the content.
            </Typography>
        }
        actions={
            <>
                <Button size="small">Cancel</Button>
                <Button size="small">Save</Button>
            </>
        }
        width={300}
    />
);
WithActions.args = {
    variant: 'outlined',
};
