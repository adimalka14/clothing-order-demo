import React, { useState } from 'react';
import { action } from 'storybook/actions';
import ProductCard from '../ProductCard';

export default {
    title: 'components/ProductCard',
    component: ProductCard,
    args: {
        images: [
            { src: 'assets/t-shirt/white-1.png', alt: 'Image 1' },
            { src: 'assets/t-shirt/white-2.png', alt: 'Image 2' },
        ],
        onClick: action('ProductCard clicked'),
    },
};

export const Default = (args) => <ProductCard {...args} />;

export const RealProduct = (args) => {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <ProductCard
            {...args}
            isLiked={isLiked}
            onClickLike={(e) => {
                action('Like clicked')(e);
                setIsLiked(!isLiked);
            }}
        />
    );
};

RealProduct.args = {
    title: 'Product title',
    description: 'Product description',
    price: '19.99',
};
