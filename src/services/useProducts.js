import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProducts } from '../store/features/products/productsThunk';
import {
    selectProductsList,
    selectProductsLoading,
    selectProductsError,
} from '../store/features/products/productsSelector';
import { getProductById } from '../api/products.api.js';

export function useProductsList() {
    const dispatch = useDispatch();
    const list = useSelector(selectProductsList);
    const loading = useSelector(selectProductsLoading);
    const error = useSelector(selectProductsError);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return { list, loading, error };
}

export function useProductDetails(productId) {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProduct() {
            try {
                setLoading(true);
                const res = await getProductById(productId);
                setProduct(res);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchProduct();
    }, [productId]);

    return { product, loading, error };
}
