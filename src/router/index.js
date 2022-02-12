import { createRouter, createWebHistory } from 'vue-router';

import Layout from '../components/Layout.vue';
import AdminLayout from '../components/AdminLayout.vue';

import Home from '../views/Home.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Layout,
		children: [
			{
				path: '',
				component: Home,
			},
		],
	},
	{
		path: '/products',
		name: 'Products',
		component: Layout,
		children: [
			{
				path: '',
				component: () =>
					import(
						/* webpackChunkName: "about" */ '../views/Products.vue'
					),
			},
		],
	},
	{
		path: '/product/:id',
		name: 'Product',
		component: Layout,
		children: [
			{
				path: '',
				component: () =>
					import(
						/* webpackChunkName: "about" */ '../views/Product.vue'
					),
			},
		],
	},
	{
		path: '/login',
		name: 'Login',
		component: Layout,
		children: [
			{
				path: '',
				component: () =>
					import(
						/* webpackChunkName: "about" */ '../views/Login.vue'
					),
			},
		],
	},
	{
		path: '/register',
		name: 'Register',
		component: Layout,
		children: [
			{
				path: '',
				component: () =>
					import(
						/* webpackChunkName: "about" */ '../views/Register.vue'
					),
			},
		],
	},
	{
		path: '/profile',
		name: 'Profile',
		component: Layout,
		children: [
			{
				path: '',
				component: () =>
					import(
						/* webpackChunkName: "about" */ '../views/Profile.vue'
					),
			},
		],
	},
	{
		path: '/new-address',
		name: 'NewAddress',
		component: Layout,
		children: [
			{
				path: '',
				component: () =>
					import(
						/* webpackChunkName: "about" */ '../views/NewAddress.vue'
					),
			},
		],
	},

	// Admin routes
	{
		path: '/admin/login',
		name: 'AdminLogin',
		component: () =>
			import(
				/* webpackChunkName: "about" */ '../views/admin/AdminLogin.vue'
			),
	},

	{
		path: '/admin/dashboard',
		name: 'AdminDashboard',
		component: AdminLayout,
		children: [
			{
				path: '',
				component: () =>
					import(
						/* webpackChunkName: "about" */ '../views/admin/AdminDashboard.vue'
					),
			},
		],
	},

	{
		path: '/admin/products',
		name: 'AdminProducts',
		component: AdminLayout,
		children: [
			{
				path: '',
				component: () =>
					import(
						/* webpackChunkName: "about" */ '../views/admin/AdminProducts.vue'
					),
			},
		],
	},

	{
		path: '/admin/edit-product/:id',
		name: 'AdminEditProduct',
		component: AdminLayout,
		children: [
			{
				path: '',
				component: () =>
					import(
						/* webpackChunkName: "about" */ '../views/admin/AdminEditProduct.vue'
					),
			},
		],
	},

	{
		path: '/admin/new-product',
		name: 'AdminNewProduct',
		component: AdminLayout,
		children: [
			{
				path: '',
				component: () =>
					import(
						/* webpackChunkName: "about" */ '../views/admin/AdminNewProduct.vue'
					),
			},
		],
	},

	{
		path: '/admin/product/:id',
		name: 'AdminProduct',
		component: AdminLayout,
		children: [
			{
				path: '',
				component: () =>
					import(
						/* webpackChunkName: "about" */ '../views/admin/AdminProduct.vue'
					),
			},
		],
	},

	{
		path: '/admin/categories',
		name: 'AdminCategories',
		component: AdminLayout,
		children: [
			{
				path: '',
				component: () =>
					import(
						/* webpackChunkName: "about" */ '../views/admin/AdminCategories.vue'
					),
			},
		],
	},

	{
		path: '/admin/edit-category/:id',
		name: 'AdminEditCategory',
		component: AdminLayout,
		children: [
			{
				path: '',
				component: () =>
					import(
						/* webpackChunkName: "about" */ '../views/admin/AdminEditCategory.vue'
					),
			},
		],
	},

	{
		path: '/admin/new-category',
		name: 'AdminNewCategory',
		component: AdminLayout,
		children: [
			{
				path: '',
				component: () =>
					import(
						/* webpackChunkName: "about" */ '../views/admin/AdminNewCategory.vue'
					),
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
