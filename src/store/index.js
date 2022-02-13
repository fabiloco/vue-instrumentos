import { createStore } from 'vuex';
import { getCartData } from '../services/cart.services';
import { getProduct } from '../services/products.services';

const token = sessionStorage.getItem('userToken');

const getProductsFromCart = async () => {
	const products = [];
	const cartItems = await getCartData(token);
	await Promise.all(
		cartItems.map(async (element) => {
			const productItem = await getProduct(element.product_id);
			const product = {
				cart_id: element.id,
				id: productItem.id,
				name: productItem.name,
				sku: productItem.sku,
				price: productItem.price,
				quantity: element.quantity,
				thumbnail: productItem.thumbnail,
			};
			products.push(product);
		})
	);

	return products;
};

export default createStore({
	state: {
		products: [],
	},
	mutations: {
		async OnChargeCartData(state) {
			state.products = await getProductsFromCart();
		},
	},
	actions: {
		setCarData(context) {
			context.commit('OnChargeCartData');
		},
	},
	modules: {},
});
