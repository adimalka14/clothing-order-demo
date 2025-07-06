import { useDispatch, useSelector } from 'react-redux';
import {
    fetchCart,
    addToCart,
    updateCart,
    removeFromCart,
} from '/src/store/features/cart/cartThunk';
import {
    selectCartItems,
    selectCartCount,
    selectCartTotal,
} from '/src/store/features/cart/cartSelector';
import { useEffect } from 'react';

export function useCart() {
    const dispatch = useDispatch();
    const items = useSelector(selectCartItems);
    const count = useSelector(selectCartCount);
    const total = useSelector(selectCartTotal);
    const loading = useSelector((state) => state.cart.loading);
    const error = useSelector((state) => state.cart.error);

    useEffect(() => {
        dispatch(fetchCart());
    }, [dispatch]);

    const update = (id, changes) => dispatch(updateCart({ id, changes }));
    const remove = (id) => dispatch(removeFromCart(id));

    return { items, count, total, loading, error, remove, update };
}

export function useAddToCart() {
    const dispatch = useDispatch();
    const items = useSelector(selectCartItems);

    const add = (item) => dispatch(addToCart(item)).unwrap();
    const update = (id, changes) =>
        dispatch(updateCart({ id, changes })).unwrap();

    const addOrUpdate = async (newItem) => {
        const existingItem = items?.find(
            (item) =>
                item.productId === newItem.productId &&
                item.variantId === newItem.variantId
        );

        if (existingItem) {
            await update(existingItem.id, {
                quantity: existingItem.quantity + newItem.quantity,
            });
        } else {
            await add(newItem);
        }
    };

    return { addOrUpdate };
}
