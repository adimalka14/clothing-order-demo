import { API_BASE_URL } from '/src/utils/env';

export async function getProducts() {
    const res = await fetch(`${API_BASE_URL}/products`);
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
}

export async function getProductById(id) {
    const res = await fetch(`${API_BASE_URL}/productDetails/${id}`);
    if (!res.ok) throw new Error('Failed to fetch product');
    return res.json();
}
