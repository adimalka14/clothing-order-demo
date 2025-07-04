import { createSlice } from '@reduxjs/toolkit';
import { fetchCart, addToCart, updateCart, removeFromCart } from './cartThunk';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            .addCase(addToCart.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })

            .addCase(updateCart.fulfilled, (state, action) => {
                const index = state.items.findIndex(
                    (i) => i.id === action.payload.id
                );
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })

            .addCase(removeFromCart.fulfilled, (state, action) => {
                state.items = state.items.filter(
                    (i) => i.id !== action.payload
                );
            });
    },
});

export default cartSlice.reducer;
