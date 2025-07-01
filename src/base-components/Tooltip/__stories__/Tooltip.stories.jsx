import React, { useState } from 'react';

import Tooltip from '../Tooltip';
import { TOOLTIP_PLACEMENTS } from '../tooltip.constants';

export default {
    title: 'base-component/Tooltip',
    component: Tooltip,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        arrow: { control: 'boolean' },
        placement: {
            control: 'select',
            options: TOOLTIP_PLACEMENTS,
        },
    },
    args: {
        title: 'Tooltip',
    },
};

const DivElement = ({ text = 'Element', height = '100px' }) => (
    <div
        style={{
            height: height,
            width: '100px',
            backgroundColor: '#97e6ff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid #000000',
            borderRadius: '4px',
        }}
    >
        {text}
    </div>
);

const Template = (args) => (
    <Tooltip title={'Default Tooltip'} {...args}>
        <DivElement text={args.title || 'Default'} />
    </Tooltip>
);

export const Default = Template.bind({});

export const WithoutChildren = (args) => (
    <Tooltip {...args} title={'Default Tooltip'} />
);

export const ArrowProp = (args) => (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '3rem' }}>
        <div>
            <Tooltip {...args} title={`With Arrow`}>
                <DivElement text={'With Arrow'} />
            </Tooltip>
        </div>
        <div>
            <Tooltip {...args} title={`Without Arrow`} arrow={false}>
                <DivElement text={'Without Arrow'} />
            </Tooltip>
        </div>
    </div>
);

export const AllPlacements = (args) => {
    const groupedPlacements = {
        top: ['top-start', 'top', 'top-end'],
        right: ['right-start', 'right', 'right-end'],
        bottom: ['bottom-start', 'bottom', 'bottom-end'],
        left: ['left-start', 'left', 'left-end'],
    };

    const renderPlacementGroup = ({
        placements,
        direction = 'row',
        align = 'center',
    }) => (
        <div
            style={{
                display: 'flex',
                flexDirection: direction,
                gap: '1rem',
                alignItems: align,
                justifyContent: direction === 'row' ? 'center' : undefined,
            }}
        >
            {placements.map((placement) => (
                <Tooltip
                    key={placement}
                    placement={placement}
                    title={placement}
                    arrow
                >
                    <span style={{ display: 'inline-block' }}>
                        <DivElement text={placement} height="50px" />
                    </span>
                </Tooltip>
            ))}
        </div>
    );

    return (
        <div
            style={{
                width: '600px',
                margin: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2rem',
                padding: '2rem',
            }}
        >
            <p style={{ fontWeight: 'bold', fontSize: '2rem' }}>
                ALL PLACEMENTS
            </p>

            {/* Top */}
            {renderPlacementGroup({ placements: groupedPlacements.top })}

            {/* Middle: Left & Right */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                }}
            >
                {renderPlacementGroup({
                    placements: groupedPlacements.left,
                    direction: 'column',
                    align: 'flex-start',
                })}
                {renderPlacementGroup({
                    placements: groupedPlacements.right,
                    direction: 'column',
                    align: 'flex-end',
                })}
            </div>

            {/* Bottom */}
            {renderPlacementGroup({ placements: groupedPlacements.bottom })}
        </div>
    );
};
