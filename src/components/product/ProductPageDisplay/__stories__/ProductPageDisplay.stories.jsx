import React from 'react';
import ProductPageDisplay from '../ProductPageDisplay';
import { action } from 'storybook/actions';

export default {
    title: 'components/ProductPageDisplay',
    component: ProductPageDisplay,
};

const images = [
    { src: 'assets/t-shirt/white-1.png', alt: 'White T-shirt 1' },
    { src: 'assets/t-shirt/white-2.png', alt: 'White T-shirt 2' },
];

export const Default = () => (
    <ProductPageDisplay
        name="White T-shirt"
        description="A cool white T-shirt"
        price={19.99}
        images={images}
        isLiked={false}
        onAddToCart={action('add to cart')}
        onToggleLike={action('toggle like')}
    >
        <div>Options go here</div>
    </ProductPageDisplay>
);
