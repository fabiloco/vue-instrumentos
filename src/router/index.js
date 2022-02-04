import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/products',
		name: 'Products',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Products.vue'),
	},
	{
		path: '/product/:id',
		name: 'Product',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Product.vue'),
	},
	{
		path: '/login',
		name: 'Login',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Login.vue'),
	},
	{
		path: '/register',
		name: 'Register',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Register.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
