import React from 'react';
import CartList from '../CartList';
import { action } from 'storybook/actions';

export default {
    title: 'components/CartList',
    component: CartList,
};

const items = [
    {
        id: '1',
        name: 'T-shirt White',
        price: 19.99,
        quantity: 1,
        image: { src: '/src/assets/t-shirt/white-1.png', alt: 'T-shirt White' },
        values: { color: 'white', size: 'M' },
    },
    {
        id: '2',
        name: 'T-shirt Black',
        price: 24.99,
        quantity: 2,
        image: { src: '/src/assets/t-shirt/black-1.png', alt: 'T-shirt Black' },
        values: { color: 'black', size: 'L' },
    },
];

export const Default = () => (
    <CartList
        items={items}
        onUpdateQuantity={action('update quantity')}
        onRemoveItem={action('remove item')}
    />
);
