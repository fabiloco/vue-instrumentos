<template>
	<div
		id="panel-products"
		class="flex flex-col items-center justify-center w-full h-full"
	>
		<Spinner v-if="loading" />
		<div v-else class="w-3/4 p-6">
			<h1 class="mb-4 text-5xl font-bold">Productos</h1>
			<div class="w-full mb-6 bg-slate-300" style="height: 1px"></div>
			<div class="mb-4 text-right">
				<router-link
					to="/admin/new-product"
					class="px-4 py-2 text-sm font-bold text-white bg-indigo-500 rounded hover:bg-indigo-700"
					>Nuevo producto
				</router-link>
			</div>

			<div class="flex flex-col">
				<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div
						class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
					>
						<div
							class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg"
						>
							<table
								class="h-full min-w-full overflow-y-auto divide-y divide-gray-200"
							>
								<thead class="bg-gray-50">
									<tr>
										<th
											scope="col"
											class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
										>
											Nombre
										</th>
										<th
											scope="col"
											class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
										>
											Price
										</th>
										<th
											scope="col"
											class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
										>
											SKU
										</th>
										<th
											scope="col"
											class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
										>
											Stock
										</th>
										<th
											scope="col"
											class="relative px-6 py-3"
										>
											<span class="sr-only">Edit</span>
										</th>
									</tr>
								</thead>
								<tbody
									class="bg-white divide-y divide-gray-200"
									id="products-list"
								>
									<tr
										v-for="(product, index) in products"
										v-bind:key="index"
									>
										<td class="px-6 py-4 whitespace-nowrap">
											<div class="flex items-center">
												<div
													class="flex-shrink-0 w-10 h-10"
												>
													<img
														class="object-contain w-10 h-10 rounded-full"
														v-bind:src="`${API_URL}/${product.thumbnail}`"
														v-bind:alt="
															product.name
														"
													/>
												</div>
												<div class="ml-4">
													{{ product.name }}
												</div>
											</div>
										</td>
										<td
											class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
										>
											{{ product.price }}
										</td>
										<td
											class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
										>
											{{ product.sku }}
										</td>
										<td class="px-6 py-4 whitespace-nowrap">
											<span
												class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
											>
												{{ product.stock }}
											</span>
										</td>
										<td
											class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap"
										>
											<router-link
												v-bind:to="`/admin/product/${product.id}`"
											>
												<button
													class="text-green-600 hover:text-green-900"
												>
													Ver
												</button>
											</router-link>

											<router-link
												v-bind:to="`/admin/edit-product/${product.id}`"
											>
												<button
													class="ml-3 text-indigo-600 hover:text-indigo-900"
												>
													Editar
												</button>
											</router-link>
											<button
												v-on:click="deleteProduct"
												class="ml-3 text-red-600 hover:text-red-900"
											>
												Eliminar
											</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="max-w-2xl mx-auto">
			<nav aria-label="Page navigation example">
				<ul
					id="paginator-products"
					class="inline-flex -space-x-px"
				></ul>
			</nav>
		</div>
	</div>
</template>
<script>
import Spinner from "../../components/Spinner.vue";

import { getProducts } from "../../services/products.services";
import { API_URL } from "../../config/config";

export default {
	components: {
		Spinner,
	},
	data() {
		return {
			API_URL,
			loading: true,
			products: [],
			links: [],
		};
	},
	mounted() {
		this.getData();
	},

	methods: {
		getData: async function () {
			this.loading = true;
			const { data, links } = await getProducts();
			this.loading = false;
			this.products = data;
			this.links = links;
		},
		changePage: async function (url) {
			if (!url) return;
			this.loading = true;
			const { data, links } = await getProducts(url);
			this.loading = false;
			this.products = data;
			this.links = links;
		},
		deleteProduct: async function () {
			// todo
			console.log("TODO");
		},
	},
};
</script>
