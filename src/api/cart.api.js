import { API_BASE_URL } from '/src/utils/env';

export async function addCartItem(item) {
    const res = await fetch(`${API_BASE_URL}/cart`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
    });
    if (!res.ok) throw new Error('Failed to add item to cart');
    return res.json();
}

export async function updateCartItem(id, changes) {
    const res = await fetch(`${API_BASE_URL}/cart/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(changes),
    });
    if (!res.ok) throw new Error('Failed to update cart item');
    return res.json();
}

export async function deleteCartItem(id) {
    const res = await fetch(`${API_BASE_URL}/cart/${id}`, {
        method: 'DELETE',
    });
    if (!res.ok) throw new Error('Failed to delete cart item');
    return id;
}

export async function fetchCartItems() {
    const res = await fetch(`${API_BASE_URL}/cart`);
    if (!res.ok) throw new Error('Failed to fetch cart items');
    return res.json();
}
