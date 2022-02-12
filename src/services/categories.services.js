import { API_URL, headers } from '../config/config.js';

// CATEGORIES
export const getCategories = async (url = `${API_URL}/api/categories`) => {
	const res = await fetch(url, { method: 'GET', headers });
	const data = await res.json();

	return { data: data.data, links: data.links };
};

export const getCategory = async (id) => {
	const res = await fetch(`${API_URL}/api/categories/${id}`, {
		method: 'GET',
		headers,
	});
	const data = await res.json();
	return data.data;
};

export const updateCategory = async (id, category, token) => {
	const body = new FormData();

	body.append('name', category.name);
	body.append('description', category.description);
	body.append('_method', 'PUT');

	const res = await fetch(`${API_URL}/api/categories/${id}`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body,
	});
	const data = await res.json();
	return data.data;
};

export const storeCategory = async (category, token) => {
	const body = new FormData();

	body.append('name', category.name);
	body.append('description', category.description);

	const res = await fetch(`${API_URL}/api/categories`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body,
	});

	const data = await res.json();
	return data.data;
};

export const deteleCategory = async (id, token) => {
	const res = await fetch(`${API_URL}/api/categories/${id}`, {
		method: 'DELETE',
		headers: { ...headers, Authorization: `Bearer ${token}` },
	});

	const data = await res.json();
	return data;
};
