import React, { useState } from 'react';

import SlidingImages from '../SlidingImages';

export default {
    title: 'components/SlidingImages',
    component: SlidingImages,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {},
};

export const Default = () => {
    return <SlidingImages />;
};

export const WithImages = () => {
    return (
        <SlidingImages
            width={200}
            height={300}
            images={[
                { src: '/src/assets/t-shirt/white-1.png', alt: 'Image 1' },
                { src: '/src/assets/t-shirt/white-2.png', alt: 'Image 2' },
            ]}
        />
    );
};
