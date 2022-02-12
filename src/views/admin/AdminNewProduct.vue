<template>
	<div
		id="panel-products"
		class="flex justify-center w-full h-screen pt-16 overflow-y-auto"
	>
		<Spinner v-if="loading" />
		<div v-else class="w-3/4 p-6">
			<h1 class="mb-4 text-5xl font-bold">Nuevo producto</h1>
			<div class="w-full mb-6 bg-slate-300" style="height: 1px"></div>

			<form v-on:submit="sendData" id="product-form">
				<div class="shadow sm:rounded-md sm:overflow-hidden">
					<div class="px-4 py-5 space-y-6 bg-white sm:p-6">
						<div class="grid grid-cols-3 gap-6">
							<div class="col-span-3 sm:col-span-2">
								<div class="col-span-6 sm:col-span-3">
									<label
										for="product-name"
										class="block text-sm font-medium text-gray-700"
										>Nombre del producto</label
									>
									<input
										type="text"
										name="product-name"
										id="product-name"
										placeholder="Nombre del producto"
										class="block w-full px-2 py-1 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										v-model="newProduct.name"
										required
									/>
								</div>
							</div>
							<div class="col-span-3 sm:col-span-2">
								<div class="col-span-6 sm:col-span-3">
									<label
										for="product-price"
										class="block text-sm font-medium text-gray-700"
										>Precio del producto</label
									>
									<input
										type="number"
										name="product-price"
										id="product-price"
										placeholder="Precio del producto"
										class="block w-full px-2 py-1 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										v-model="newProduct.price"
										required
									/>
								</div>
							</div>
							<div class="col-span-3 sm:col-span-2">
								<div class="col-span-6 sm:col-span-3">
									<label
										for="product-weight"
										class="block text-sm font-medium text-gray-700"
										>Peso del producto</label
									>
									<input
										type="number"
										name="product-weight"
										id="product-weight"
										placeholder="Peso del producto"
										class="block w-full px-2 py-1 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										v-model="newProduct.weight"
										required
									/>
								</div>
							</div>
							<div class="col-span-3 sm:col-span-2">
								<div class="col-span-6 sm:col-span-3">
									<label
										for="product-stock"
										class="block text-sm font-medium text-gray-700"
										>Stock disponible del producto</label
									>
									<input
										type="number"
										name="product-stock"
										id="product-stock"
										placeholder="Stock disponible del producto"
										class="block w-full px-2 py-1 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										v-model="newProduct.stock"
										required
									/>
								</div>
							</div>
						</div>

						<div>
							<label
								for="product-description"
								class="block text-sm font-medium text-gray-700"
							>
								Descripción
							</label>
							<div class="mt-1">
								<textarea
									id="product-description"
									name="product-description"
									rows="3"
									class="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
									placeholder="Este es le mejor producto del mundo"
									v-model="newProduct.description"
									required
								></textarea>
							</div>
						</div>

						<div>
							<label
								class="block text-sm font-medium text-gray-700"
							>
								Miniatura del producto
							</label>
							<div
								class="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md"
							>
								<div class="space-y-1 text-center">
									<svg
										class="w-12 h-12 mx-auto text-gray-400"
										stroke="currentColor"
										fill="none"
										viewBox="0 0 48 48"
										aria-hidden="true"
									>
										<path
											d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
									<div class="flex text-sm text-gray-600">
										<label
											for="product-thumbnail"
											class="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
										>
											<span>Upload a file</span>
											<input
												id="product-thumbnail"
												name="product-thumbnail"
												type="file"
												class="sr-only"
												v-on:change="
													onThumbnailImgChange
												"
												required
											/>
										</label>
										<p class="pl-1">or drag and drop</p>
									</div>
									<p class="text-xs text-gray-500">
										PNG, JPG, GIF up to 10MB
									</p>
								</div>
							</div>
						</div>
						<div>
							<label
								class="block text-sm font-medium text-gray-700"
							>
								Imagenes del producto
							</label>
							<div
								class="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md"
							>
								<div class="space-y-1 text-center">
									<svg
										class="w-12 h-12 mx-auto text-gray-400"
										stroke="currentColor"
										fill="none"
										viewBox="0 0 48 48"
										aria-hidden="true"
									>
										<path
											d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
									<div class="flex text-sm text-gray-600">
										<label
											for="product-images"
											class="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
										>
											<span>Upload a file</span>
											<input
												id="product-images"
												name="product-images"
												type="file"
												class="sr-only"
												multiple
												v-on:change="onImagesChange"
												required
											/>
										</label>
										<p class="pl-1">or drag and drop</p>
									</div>
									<p class="text-xs text-gray-500">
										PNG, JPG, GIF up to 10MB
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
						<button
							type="submit"
							class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Enviar
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>
<script>
import Spinner from "../../components/Spinner.vue";
import { storeProduct } from "../../services/products.services";
import { API_URL } from "../../config/config";

export default {
	data() {
		return {
			API_URL,
			token: sessionStorage.getItem("adminToken"),
			loading: false,
			newProduct: {
				name: "",
				description: "",
				price: "",
				weight: "",
				stock: "",
				thumbnail: null,
				images: [],
			},
		};
	},

	components: {
		Spinner,
	},

	methods: {
		onImagesChange: function (e) {
			const images = [];

			for (const img of e.target.files) {
				images.push(img);
			}

			this.newProduct = {
				...this.newProduct,
				images: images,
			};
		},
		onThumbnailImgChange: function (e) {
			this.newProduct = {
				...this.newProduct,
				thumbnail: e.target.files[0],
			};
		},
		sendData: async function (e) {
			e.preventDefault();
			this.loading = true;
			const res = await storeProduct(this.newProduct, this.token);

			if (res) {
				this.$swal({
					icon: "success",
					title: "Exito",
					text: "El producto se ha creado de forma exitosa",
				});
			} else {
				this.$swal({
					icon: "error",
					title: "Oops...",
					text: "Ha habido algún problema con los datos digitados, por favor, reviselos",
				});
			}
			this.loading = false;

			this.$router.push({ path: "/admin/products" });
		},
	},
};
</script>
