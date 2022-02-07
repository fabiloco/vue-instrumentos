import { API_URL, headers } from '../config/config.js';

// ADDRESS

export const getCountries = async (token) => {
	const res = await fetch(`${API_URL}/api/countries`, {
		method: 'GET',
		headers: { ...headers, Authorization: `Bearer ${token}` },
	});
	const data = await res.json();
	return data.data;
};

export const getStates = async (id, token) => {
	const res = await fetch(`${API_URL}/api/states/${id}`, {
		method: 'GET',
		headers: { ...headers, Authorization: `Bearer ${token}` },
	});
	const data = await res.json();
	return data.data;
};

export const getAddresses = async (token) => {
	const res = await fetch(`${API_URL}/api/address`, {
		method: 'GET',
		headers: { ...headers, Authorization: `Bearer ${token}` },
	});
	const data = await res.json();
	return data.data;
};

export const updateAddress = async (id, token, body) => {
	const res = await fetch(`${API_URL}/api/address/${id}`, {
		method: 'PUT',
		headers: { ...headers, Authorization: `Bearer ${token}` },
		body: JSON.stringify(body),
	});
	if (res.status == 200) {
		const data = await res.json();
		return data.data;
	} else {
		const data = await res.json();
		console.log(data);
		return false;
	}
};

export const storeAddress = async (token, body) => {
	const res = await fetch(`${API_URL}/api/address`, {
		method: 'POST',
		headers: { ...headers, Authorization: `Bearer ${token}` },
		body: JSON.stringify(body),
	});
	if (res.status == 200) {
		const data = await res.json();
		return data;
	} else {
		const data = await res.json();
		console.log(data);
		return false;
	}
};

export const deleteAddress = async (id, token) => {
	const res = await fetch(`${API_URL}/api/address/${id}`, {
		method: 'DELETE',
		headers: { ...headers, Authorization: `Bearer ${token}` },
	});
	if (res.status == 200) {
		const data = await res.json();
		return data.data;
	} else {
		const data = await res.json();
		console.log(data);
		return false;
	}
};
