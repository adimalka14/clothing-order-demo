import React, { useEffect, useState } from 'react';

import { Box } from '/src/base-components';
import { CartList, CartSummary } from '/src/components/cart';
import { useCart, useAddToCart } from '/src/services/useCart.js';

export default function CartPage() {
    const { items, count, total, loading, error, remove, update } = useCart();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <Box padding={2}>
            <CartList
                items={items}
                onUpdateQuantity={update}
                onRemoveItem={remove}
            />
            <CartSummary total={total} />
        </Box>
    );
}
