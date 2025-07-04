import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '/src/base-components';
import CartItem from '../CartItem/CartItem';

export default function CartList({ items, onUpdateQuantity, onRemoveItem }) {
    return (
        <Box
            display="flex"
            styles={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '1rem',
            }}
        >
            {items.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={onUpdateQuantity}
                    onRemoveItem={onRemoveItem}
                />
            ))}
        </Box>
    );
}

CartList.propTypes = {
    items: PropTypes.array.isRequired,
    onUpdateQuantity: PropTypes.func.isRequired,
    onRemoveItem: PropTypes.func.isRequired,
};
