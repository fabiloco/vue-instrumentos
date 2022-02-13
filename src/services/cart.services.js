import { API_URL, headers } from '../config/config.js';

export const addToCart = async (token, body) => {
	const res = await fetch(`${API_URL}/api/cart`, {
		method: 'POST',
		headers: { ...headers, Authorization: `Bearer ${token}` },
		body: JSON.stringify(body),
	});
	if (res.status == 200) {
		const data = await res.json();
		return data.data;
	} else {
		const data = await res.json();
		return data;
	}
};

export const getCartData = async (token) => {
	const res = await fetch(`${API_URL}/api/cart`, {
		method: 'GET',
		headers: { ...headers, Authorization: `Bearer ${token}` },
	});
	if (res.status == 200) {
		const data = await res.json();
		return data.data;
	} else {
		const data = await res.json();
		return data;
	}
};

export const deleteCartItem = async (id, token) => {
	const res = await fetch(`${API_URL}/api/cart/${id}`, {
		method: 'DELETE',
		headers: { ...headers, Authorization: `Bearer ${token}` },
	});
	if (res.status == 200) {
		const data = await res.json();
		return data.data;
	} else {
		const data = await res.json();
		return data;
	}
};
