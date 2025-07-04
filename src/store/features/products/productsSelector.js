import { createSelector } from '@reduxjs/toolkit';

export const selectProductsList = createSelector(
    (state) => state.products.listIds,
    (state) => state.products.productsById,
    (listIds, productsById) => listIds.map((id) => productsById[id])
);

export const selectProductById = (id) => (state) => {
    return state?.products?.productsById[id] ?? undefined;
};

export const selectProductsLoading = (state) => state.products.listLoading;

export const selectProductsError = (state) => state.products.listError;
