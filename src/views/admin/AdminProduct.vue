<template>
	<div
		id="panel-products"
		class="flex justify-center w-full h-screen pt-16 overflow-y-auto"
	>
		<Spinner v-if="loading" />
		<div v-else class="w-3/4 p-6">
			<h1 class="mb-4 text-5xl font-bold">Producto</h1>
			<div class="w-full mb-6 bg-slate-300" style="height: 1px"></div>
			<div class="shadow sm:rounded-md sm:overflow-hidden">
				<div class="px-4 py-5 space-y-6 bg-white sm:p-6">
					<div class="grid grid-cols-3 gap-6">
						<div class="col-span-3 sm:col-span-2">
							<div class="col-span-6 sm:col-span-3">
								<p
									class="block text-sm font-medium text-gray-700"
								>
									Nombre del producto
								</p>
								<p
									id="product-name"
									class="block w-full mt-1 text-lg"
								>
									{{ product.name }}
								</p>
							</div>
						</div>
						<div class="col-span-3 sm:col-span-2">
							<div class="col-span-6 sm:col-span-3">
								<p
									class="block text-sm font-medium text-gray-700"
								>
									Precio del producto
								</p>
								<p
									id="product-price"
									class="block w-full mt-1 text-lg"
								>
									$COP {{ product.price }}
								</p>
							</div>
						</div>
						<div class="col-span-3 sm:col-span-2">
							<div class="col-span-6 sm:col-span-3">
								<p
									class="block text-sm font-medium text-gray-700"
								>
									Peso del producto
								</p>
								<p
									id="product-weight"
									class="block w-full mt-1 text-lg"
								>
									{{ product.weight }}kg
								</p>
							</div>
						</div>
						<div class="col-span-3 sm:col-span-2">
							<div class="col-span-6 sm:col-span-3">
								<p
									class="block text-sm font-medium text-gray-700"
								>
									Stock del producto
								</p>
								<p
									id="product-stock"
									class="block w-full mt-1 text-lg"
								>
									{{ product.stock }}
								</p>
							</div>
						</div>
					</div>

					<div>
						<p class="block text-sm font-medium text-gray-700">
							Descripción
						</p>
						<p
							id="product-description"
							class="block w-full mt-1 text-md"
						>
							{{ product.description }}
						</p>
					</div>

					<div>
						<p class="block text-sm font-medium text-gray-700">
							Miniatura del producto
						</p>
						<div
							id="product-thumbnail"
							class="block w-full mt-1 text-md"
						>
							<img
								v-bind:src="`${API_URL}/${product.thumbnail}`"
								v-bind:alt="product.name"
							/>
						</div>
					</div>
					<div>
						<p class="block text-sm font-medium text-gray-700">
							Imagenes del producto
						</p>
						<div
							id="product-images"
							class="flex flex-wrap w-full gap-6 mt-1 text-md"
						>
							<img
								v-for="(img, index) in product.image"
								v-bind:key="index"
								v-bind:src="`${API_URL}/${img.url}`"
								v-bind:alt="product.name"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Spinner from "../../components/Spinner.vue";
import { getProduct } from "../../services/products.services";
import { API_URL } from "../../config/config";

export default {
	data() {
		return {
			API_URL,
			loading: true,
			product: {},
		};
	},

	components: {
		Spinner,
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
	},
};
</script>
