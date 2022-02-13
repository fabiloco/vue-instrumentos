<!-- This example requires Tailwind CSS v2.0+ -->
<template>
	<div
		v-if="onViewModal"
		class="fixed inset-0 overflow-hidden"
		style="z-index: 900099090909"
		aria-labelledby="slide-over-title"
		role="dialog"
		aria-modal="true"
	>
		<div v-if="loading">loading</div>
		<div v-else class="absolute inset-0 overflow-hidden">
			<div
				class="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75"
				aria-hidden="true"
			></div>

			<div class="fixed inset-y-0 right-0 flex max-w-full pl-10">
				<div class="w-screen max-w-md slide-in-right">
					<div
						class="flex flex-col h-full overflow-y-scroll bg-white shadow-xl"
					>
						<div class="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
							<div class="flex items-start justify-between">
								<h2
									class="text-lg font-medium text-gray-900"
									id="slide-over-title"
								>
									Shopping cart
								</h2>
								<div class="flex items-center ml-3 h-7">
									<button
										@click="toggleOnViewModal"
										type="button"
										class="p-2 -m-2 text-gray-400 hover:text-gray-500"
									>
										<span class="sr-only">Close panel</span>

										<svg
											class="w-6 h-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>
								</div>
							</div>

							<div class="mt-8">
								<div class="flow-root">
									<ul
										role="list"
										class="-my-6 divide-y divide-gray-200"
									>
										<li
											v-for="(product, index) in this
												.$store.state.products"
											v-bind:key="index"
											class="flex py-6"
										>
											<div
												class="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md"
											>
												<img
													v-bind:src="`${API_URL}/${product.thumbnail}`"
													alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
													class="object-cover object-center w-full h-full"
												/>
											</div>

											<div
												class="flex flex-col flex-1 ml-4"
											>
												<div>
													<div
														class="flex justify-between text-base font-medium text-gray-900"
													>
														<h3
															class="hover:underline"
														>
															<router-link
																v-bind:to="`/product/${product.id}`"
															>
																{{
																	product.name
																}}
															</router-link>
														</h3>
														<p class="ml-4">
															$COP
															{{ product.price }}
														</p>
													</div>
													<p
														class="mt-1 text-sm text-gray-500"
													>
														SKU: {{ product.sku }}
													</p>
												</div>
												<div
													class="flex items-end justify-between flex-1 text-sm"
												>
													<p class="text-gray-500">
														Cantidad:
														{{ product.quantity }}
													</p>

													<div class="flex">
														<button
															v-on:click="
																deleteFromCart(
																	product.cart_id
																)
															"
															type="button"
															class="font-medium text-indigo-600 hover:text-indigo-500"
														>
															Remove
														</button>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div class="px-4 py-6 border-t border-gray-200 sm:px-6">
							<div
								class="flex justify-between text-base font-medium text-gray-900"
							>
								<p>Subtotal</p>
								<p>$COP {{ totalAmount }}</p>
							</div>
							<p class="mt-0.5 text-sm text-gray-500">
								Shipping and taxes calculated at checkout.
							</p>
							<div class="mt-6">
								<a
									href="#"
									class="flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
									>Checkout</a
								>
							</div>
							<div
								class="flex justify-center mt-6 text-sm text-center text-gray-500"
							>
								<p>
									or
									<router-link to="/products">
										<button
											type="button"
											class="font-medium text-indigo-600 hover:text-indigo-500"
										>
											Continue Shopping<span
												aria-hidden="true"
											>
												&rarr;</span
											>
										</button>
									</router-link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { API_URL } from "../config/config";
import { deleteCartItem } from "../services/cart.services";

export default {
	props: {
		onViewModal: Boolean,
		toggleOnViewModal: Function,
	},
	data() {
		return {
			loading: false,
			API_URL,
			token: sessionStorage.getItem("userToken"),
			open,
			totalAmount: 0,
		};
	},
	updated() {
		this.getTotalAmount(this.$store.state.products);
	},
	mounted() {
		this.$store.dispatch("setCarData");
	},
	methods: {
		deleteFromCart: async function (id) {
			await deleteCartItem(id, this.token);
			await this.$store.dispatch("setCarData");
		},
		getTotalAmount: function (products) {
			this.totalAmount = 0;
			products.forEach((element) => {
				this.totalAmount += element.price * element.quantity;
			});
		},
	},
};
</script>
