import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    addCartItem,
    updateCartItem,
    deleteCartItem,
    fetchCartItems,
} from '/src/api/cart.api.js';

export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
    return await fetchCartItems();
});

export const addToCart = createAsyncThunk('cart/addToCart', async (item) => {
    return await addCartItem(item);
});

export const updateCart = createAsyncThunk(
    'cart/updateCart',
    async ({ id, changes }) => {
        return await updateCartItem(id, changes);
    }
);

export const removeFromCart = createAsyncThunk(
    'cart/removeFromCart',
    async (id) => {
        return await deleteCartItem(id);
    }
);
