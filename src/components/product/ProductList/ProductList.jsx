import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useProductsList } from '/src/services/useProducts';
import ProductCard from '../ProductCard/ProductCard';
import { Box, Typography } from '/src/base-components';

export default function ProductList() {
    const { list, loading, error } = useProductsList();
    const navigate = useNavigate();

    return (
        <Box
            styles={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap',
            }}
        >
            {loading && <Typography>Loading...</Typography>}
            {error && <Typography>{error}</Typography>}
            {list.map((product) => (
                <ProductCard
                    {...product}
                    key={product.id}
                    title={product.name}
                    description={product.description}
                    specification={`color: ${product.color}`}
                    images={product.images}
                    priceCurrency={'$'}
                    onClick={() =>
                        navigate(
                            `/product/${product.productId}/${product.variantId}`
                        )
                    }
                />
            ))}
        </Box>
    );
}
