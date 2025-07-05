import React from 'react';
import PropTypes from 'prop-types';
import { Delete } from '@mui/icons-material';

import {
    Button,
    Typography,
    Box,
    Stack,
    Image,
    Select,
} from '/src/base-components';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function CartItem({ item, onUpdateQuantity, onRemoveItem }) {
    const [isLoadingUpdate, setIsLoadingUpdate] = React.useState(false);
    const [isLoadingRemove, setIsLoadingRemove] = React.useState(false);

    const handleChange = async (e) => {
        const qty = parseInt(e.target.value, 10);
        if (qty >= 1) {
            setIsLoadingUpdate(true);
            await onUpdateQuantity(item.id, { quantity: qty });
            setIsLoadingUpdate(false);
        }
    };

    const handleRemove = async () => {
        setIsLoadingRemove(true);
        await sleep(1000);
        await onRemoveItem(item.id);
        setIsLoadingRemove(false);
    };

    return (
        <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent={'space-between'}
            styles={{
                border: '1px solid #ccc',
                padding: '1rem',
                width: { xs: '100%', sm: '80%', md: '60%' },
                boxSizing: 'border-box',
            }}
        >
            <Box
                styles={{
                    width: { xs: '100px', sm: '150px', md: '200px' },
                    height: { xs: '100px', sm: '150px', md: '200px' },
                    background: '#eee',
                }}
            >
                <Image src={item.image.src} alt={item.image.alt} />
            </Box>
            <Stack spacing={2} alignItems={'flex-start'}>
                <Typography type="title" fontWeight={'bold'}>
                    ${item.price}
                </Typography>
                <Typography type="subtitle">{item.name}</Typography>
                {Object.keys(item.values).map(
                    (key) =>
                        key !== 'quantity' && (
                            <Typography type="body" key={key}>
                                {key}: {item.values[key]}
                            </Typography>
                        )
                )}
            </Stack>
            <Stack
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'flex-start'}
                direction={'column'}
                spacing={4}
            >
                <Select
                    disabled={isLoadingUpdate}
                    variant={'standard'}
                    id={`quantity-${item.id}`}
                    name="quantity"
                    label="Quantity"
                    selected={String(item.quantity)}
                    onChange={handleChange}
                    options={[
                        { value: 1, label: '1' },
                        { value: 2, label: '2' },
                        { value: 3, label: '3' },
                        { value: 4, label: '4' },
                        { value: 5, label: '5' },
                    ]}
                />
                <Button
                    color="error"
                    loading={isLoadingRemove}
                    onClick={handleRemove}
                    variant={'outlined'}
                    size={'small'}
                    styles={{ width: '10%' }}
                >
                    <Delete />
                </Button>
            </Stack>
        </Stack>
    );
}

CartItem.propTypes = {
    item: PropTypes.object.isRequired,
    onUpdateQuantity: PropTypes.func.isRequired,
    onRemoveItem: PropTypes.func.isRequired,
};
