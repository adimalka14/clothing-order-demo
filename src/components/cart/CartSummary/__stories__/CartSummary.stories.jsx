import React from 'react';
import CartSummary from '../CartSummary';

export default {
    title: 'components/CartSummary',
    component: CartSummary,
};

export const Default = () => <CartSummary total={49.98} />;
