import { createSlice } from '@reduxjs/toolkit';

import { fetchProducts, fetchProductById } from './productsThunk';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        productsById: {},
        listIds: [],
        listLoading: false,
        listError: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.listLoading = true;
                state.listError = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.listLoading = false;
                state.listIds = action.payload.map((p) => p.variantId);
                action.payload.forEach((p) => {
                    state.productsById[p.variantId] = {
                        ...p,
                        id: p.variantId,
                        isFull: false,
                    };
                });
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.listLoading = false;
                state.listError = action.error.message;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                const product = action.payload;
                state.productsById[product.id] = {
                    ...product,
                    isFull: true,
                };
            });
    },
});

export default productsSlice.reducer;
