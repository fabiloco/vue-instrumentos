<template>
	<article class="flex flex-col items-center gap-8 pt-32 pb-32">
		<section class="flex w-3/4 gap-8">
			<div class="w-1/2 p-4 bg-white border rounded-sm border-slate-200">
				<img
					id="product-thumbnail"
					class="object-contain w-full rounded-sm h-80"
					v-bind:src="`${API_URL}/${product.thumbnail}`"
					alt=""
				/>
			</div>
			<div class="w-1/2 p-6 bg-white border rounded-sm border-slate-200">
				<h2 id="product-name" class="text-3xl font-bold">
					{{ product.name }}
				</h2>
				<div class="flex mt-3 mb-3">
					<p id="product-sku" class="text-sm">
						SKU: {{ product.sku }}
					</p>
				</div>
				<hr />
				<div class="mt-4">
					<p class="mb-2 text-sm">Precio:</p>
					<p id="product-price" class="text-2xl text-red-600">
						COP ${{ product.price }}
					</p>
				</div>
				<div class="mt-4">
					<p class="mb-2 text-sm">Cantidad:</p>
					<div class="product__info-item products__controls-mobile">
						<button
							id="product-minus"
							class="quantity-controller"
							v-on:click="substractToCount"
						>
							<img
								class="controllers-icons"
								src="../assets/icons/minus.svg"
								alt="minus"
							/>
						</button>
						<div id="product-counter" class="quantity-view">
							{{ count }}
						</div>
						<button
							id="product-plus"
							class="quantity-controller plus"
							v-on:click="addToCount"
						>
							<img
								class="controllers-icons"
								src="../assets/icons/plus.svg"
								alt="plus"
							/>
						</button>
					</div>
				</div>
				<div class="mt-6">
					<button
						id="add-to-cart-btn"
						v-on:click="onAddToCart"
						class="px-4 py-2 mr-4 font-light text-white transition-all bg-red-600 border border-red-600 hover:bg-red-500"
					>
						Añadir al carrito
					</button>
				</div>
			</div>
		</section>

		<section class="flex w-3/4 gap-8">
			<div class="w-1/2 p-4 bg-white border rounded-sm border-slate-200">
				<h2 id="product-name" class="mb-2 text-3xl font-bold">
					Detalles
				</h2>
				<hr class="mb-4" />
				<p id="product-description" class="mb-4 text-md">
					{{ product.description }}
				</p>
				<p id="product-weight" class="mb-4 text-sm">
					Peso: {{ product.weight }}
				</p>
				<p id="product-stock" class="mb-4 text-sm">
					Stock: {{ product.stock }}
				</p>
				<h2 id="product-name" class="mb-2 text-3xl font-bold">
					Más imagenes del producto
				</h2>
				<hr class="mb-4" />
				<div class="flex flex-col gap-5" id="product-images">
					<img
						v-for="(image, index) in product.image"
						v-bind:key="index"
						v-bind:src="`${API_URL}/${image.url}`"
						v-bind:alt="`image ${image.id}`"
					/>
				</div>
			</div>
			<div class="w-1/2"></div>
		</section>
	</article>
</template>

<script>
import "../assets/css/productos.css";
import { API_URL } from "../config/config";
import { addToCart } from "../services/cart.services";
import { getProduct } from "../services/products.services";

export default {
	data() {
		return {
			API_URL,
			token: sessionStorage.getItem("userToken"),
			loading: true,
			product: {},
			count: 1,
		};
	},

	mounted() {
		this.getData(this.$route.params.id);
	},

	methods: {
		getData: async function (id) {
			this.loading = true;
			this.product = await getProduct(id);
			this.loading = false;
		},
		addToCount: function () {
			this.count++;
			if (this.count < 0) this.count = 1;
		},
		substractToCount: function () {
			this.count--;
			if (this.count < 1) this.count = 1;
		},
		onAddToCart: async function () {
			if (this.token) {
				const body = {
					product_id: this.product.id,
					quantity: this.count,
				};
				await addToCart(this.token, body);
				await this.$store.dispatch("setCarData");
			} else {
				this.$router.push({ path: "/login" });
			}
		},
	},
};
</script>
