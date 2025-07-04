import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@mui/material';
import { Delete } from '@mui/icons-material';

import {
    Button,
    TextField,
    Typography,
    Box,
    Stack,
    Image,
    IconButton,
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
        <Box
            styles={{ border: '1px solid #ccc', padding: '1rem', width: '50%' }}
        >
            <Stack direction="row" spacing={2} alignItems="center">
                <Box
                    styles={{
                        width: '100px',
                        height: '100px',
                        background: '#eee',
                    }}
                >
                    <Image src={item.image.src} alt={item.image.alt} />
                </Box>
                <Box styles={{ flexGrow: 1 }}>
                    <Typography type="title">{item.name}</Typography>
                    <Typography type="title">Price: ${item.price}</Typography>
                </Box>
                <Stack spacing={2}>
                    {Object.keys(item.values).map(
                        (key) =>
                            key !== 'quantity' && (
                                <Typography type="body" key={key}>
                                    {key}: {item.values[key]}
                                </Typography>
                            )
                    )}
                    <TextField
                        id={`quantity-${item.id}`}
                        type="number"
                        label="Quantity"
                        value={String(item.quantity)}
                        onChange={handleChange}
                        size="small"
                        fullWidth={false}
                        disabled={isLoadingUpdate}
                    />
                </Stack>
                <Box display={'flex'} styles={{ justifyContent: 'center' }}>
                    <Button
                        color="error"
                        loading={isLoadingRemove}
                        onClick={handleRemove}
                        variant={'outlined'}
                        size={'small'}
                    >
                        <Delete />
                    </Button>
                </Box>
            </Stack>
        </Box>
    );
}

CartItem.propTypes = {
    item: PropTypes.object.isRequired,
    onUpdateQuantity: PropTypes.func.isRequired,
    onRemoveItem: PropTypes.func.isRequired,
};
