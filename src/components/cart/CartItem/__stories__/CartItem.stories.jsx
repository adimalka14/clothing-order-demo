import React from 'react';
import CartItem from '../CartItem';
import { action } from 'storybook/actions';

export default {
    title: 'components/CartItem',
    component: CartItem,
};

const sampleItem = {
    id: '1',
    name: 'Sample T-shirt',
    price: 19.99,
    quantity: 2,
    image: { src: '/src/assets/t-shirt/white-1.png', alt: 'Sample T-shirt' },
    values: { color: 'white', size: 'M' },
};

export const Default = () => (
    <CartItem
        item={sampleItem}
        onUpdateQuantity={action('update quantity')}
        onRemoveItem={action('remove item')}
    />
);
