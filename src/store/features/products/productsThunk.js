import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProductById, getProducts } from '../../../api/products.api.js';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    getProducts
);

export const fetchProductById = createAsyncThunk(
    'products/fetchProductById',
    async (id) => {
        return await getProductById(id);
    }
);
