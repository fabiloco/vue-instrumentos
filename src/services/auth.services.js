import { API_URL, headers } from '../config/config.js';

// get

// AUTH
export const login = async (user) => {
	const res = await fetch(`${API_URL}/api/auth/login`, {
		method: 'POST',
		headers,
		body: JSON.stringify(user),
	});
	const data = await res.json();
	if (res.status === 200) {
		return data.access_token;
	} else {
		return false;
	}
};

export const register = async (user) => {
	console.log(user);
	const res = await fetch(`${API_URL}/api/auth/register`, {
		method: 'POST',
		headers,
		body: JSON.stringify(user),
	});
	const data = await res.json();
	if (res.status === 200) {
		return data.access_token;
	} else {
		return false;
	}
};

// USER DATA

export const getUserData = async (token) => {
	const res = await fetch(`${API_URL}/api/user`, {
		method: 'GET',
		headers: { ...headers, Authorization: `Bearer ${token}` },
	});
	if (res.status === 200) {
		const data = await res.json();
		return data;
	} else {
		return false;
	}
};
