import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { CircularProgress } from '@mui/material';

import { useProductDetails } from '/src/services/useProducts';
import { ProductPageDisplay } from '/src/components/product';
import {
    ToggleButtonGroup,
    Select,
    Typography,
    Box,
} from '/src/base-components';
import { useAddToCart } from '/src/services/useCart.js';

export default function ProductPage() {
    const { id, variantId } = useParams();
    const { product, loading, error } = useProductDetails(id);
    const [isLiked, setIsLiked] = useState(false);
    const { addOrUpdate } = useAddToCart();
    let images;

    if (loading) {
        return (
            <Box
                display="flex"
                styles={{ justifyContent: 'center' }}
                padding={0}
            >
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box
                display="flex"
                styles={{ justifyContent: 'center' }}
                padding={5}
            >
                <Typography type="body" color="error">
                    Error: {error}
                </Typography>
            </Box>
        );
    }

    if (!product) {
        return (
            <Box
                display="flex"
                styles={{ justifyContent: 'center' }}
                padding={5}
            >
                <Typography type="body">No product found</Typography>
            </Box>
        );
    }

    const variant =
        product.variants.find((v) => v.variantId === variantId) ||
        product.variants[0];

    const productOptionsKeys = Object.keys(product.options);

    const validationSchema = Yup.object().shape({
        ...productOptionsKeys.reduce((acc, key) => {
            acc[key] = Yup.mixed()
                .oneOf(product.options[key])
                .required('Required');
            return acc;
        }, {}),
        quantity: Yup.number().min(1).max(5).required('Required'),
    });

    const initialValues = productOptionsKeys.reduce((acc, key) => {
        acc[key] = variant[key];
        return acc;
    }, {});

    const findVariant = (values) => {
        return product.variants.find((v) =>
            productOptionsKeys.every((k) => v[k] === values[k])
        );
    };

    const onSubmit = async ({ quantity, ...values }, { setStatus }) => {
        setStatus(null);
        try {
            const selectedVariant = findVariant(values);

            await addOrUpdate({
                productId: id,
                variantId: selectedVariant.variantId,
                name: product.name,
                description: product.description,
                image: images[0],
                price: selectedVariant.price,
                quantity,
                values,
            });

            await new Promise((resolve) => setTimeout(resolve, 1000));

            setStatus({
                type: 'success',
                msg: 'Added to cart successfully!',
            });

            setTimeout(() => {
                setStatus(null);
            }, 5000);
        } catch (error) {
            setStatus({ type: 'error', msg: 'Failed to add to cart.', error });
        }
    };

    return (
        <Formik
            initialValues={{ ...initialValues, quantity: 1 }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({
                values,
                setFieldValue,
                handleSubmit,
                isSubmitting,
                status,
            }) => {
                const selectedVariant =
                    product.variants.find((v) =>
                        productOptionsKeys.every((k) => v[k] === values[k])
                    ) || product.variants[0];

                images =
                    product.imageSets.find(
                        (s) => s.imageSetId === selectedVariant.imageSetId
                    )?.images || [];

                return (
                    <ProductPageDisplay
                        name={product.name}
                        description={product.description}
                        price={selectedVariant.price}
                        images={images}
                        isLiked={isLiked}
                        onAddToCart={handleSubmit}
                        onToggleLike={() => setIsLiked(!isLiked)}
                        stock={selectedVariant.stock}
                        addLoading={isSubmitting}
                        status={status}
                    >
                        <Form>
                            <Box
                                display="flex"
                                styles={{
                                    justifyContent: 'center',
                                    gap: 2,
                                    flexDirection: 'column',
                                }}
                                padding={2}
                            >
                                {productOptionsKeys.map((key) => (
                                    <ToggleButtonGroup
                                        key={key}
                                        name={key}
                                        options={product.options[key].map(
                                            (o) => ({ value: o, label: o })
                                        )}
                                        value={values[key]}
                                        onChange={(e, newValue) => {
                                            if (newValue !== null) {
                                                setFieldValue(key, newValue);
                                            }
                                        }}
                                    />
                                ))}

                                <Select
                                    variant={'standard'}
                                    id="quantity"
                                    name="quantity"
                                    label="Quantity"
                                    selected={values.quantity}
                                    onChange={(e) =>
                                        setFieldValue(
                                            'quantity',
                                            e.target.value
                                        )
                                    }
                                    options={[
                                        { value: 1, label: '1' },
                                        { value: 2, label: '2' },
                                        { value: 3, label: '3' },
                                        { value: 4, label: '4' },
                                        { value: 5, label: '5' },
                                    ]}
                                />
                            </Box>
                        </Form>
                    </ProductPageDisplay>
                );
            }}
        </Formik>
    );
}
