import { API_URL, headers, headers2 } from '../config/config.js';

// PRODUCTS
export const getProducts = async (url = `${API_URL}/api/products`) => {
	const res = await fetch(url, { method: 'GET', headers });
	const data = await res.json();
	return { data: data.data, links: data.meta.links, meta: data.meta };
};

export const getProduct = async (id) => {
	const res = await fetch(`${API_URL}/api/products/${id}`, {
		method: 'GET',
		headers,
	});
	const data = await res.json();
	return data.data;
};

export const updateProduct = async (id, product, token) => {
	const body = new FormData();

	console.log(product);

	body.append('name', product.name);
	body.append('price', product.price);
	body.append('weight', product.weight);
	body.append('stock', product.stock);
	body.append('description', product.description);
	body.append('thumbnail', product.thumbnail);

	const res = await fetch(`${API_URL}/api/products/${id}`, {
		method: 'POST',
		headers: { ...headers2, Authorization: `Bearer ${token}` },
		body,
	});
	const data = await res.json();
	return data;
};

export const storeProduct = async (product, token) => {
	const body = new FormData();

	body.append('name', product.name);
	body.append('price', product.price);
	body.append('weight', product.weight);
	body.append('stock', product.stock);
	body.append('description', product.description);
	body.append('thumbnail', product.thumbnail);

	for (const image of product.images) {
		body.append('images[]', image);
	}

	const res = await fetch(`${API_URL}/api/products`, {
		method: 'POST',
		headers: { ...headers2, Authorization: `Bearer ${token}` },
		body,
	});

	const data = await res.json();
	return data;
};

export const deteleProduct = async (id, token) => {
	const res = await fetch(`${API_URL}/api/products/${id}`, {
		method: 'DELETE',
		headers: { ...headers, Authorization: `Bearer ${token}` },
	});

	const data = await res.json();
	return data;
};
