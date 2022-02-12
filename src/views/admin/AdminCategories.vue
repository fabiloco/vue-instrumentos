<template>
	<div
		id="panel-categories"
		class="flex flex-col items-center justify-center w-full"
	>
		<Spinner v-if="loading" />
		<div v-else class="w-3/4 p-6">
			<h1 class="mb-4 text-5xl font-bold">Categorias</h1>
			<div class="w-full mb-6 bg-slate-300" style="height: 1px"></div>
			<div class="mb-4 text-right">
				<router-link
					to="/admin/new-category"
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
											Descripción
										</th>
										<th
											scope="col"
											class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
										>
											ID
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
									id="categories-list"
								>
									<tr
										v-for="(category, index) in categories"
										v-bind:key="index"
									>
										<td class="px-6 py-4 whitespace-nowrap">
											<div class="flex items-center">
												<div class="ml-4">
													{{ category.name }}
												</div>
											</div>
										</td>
										<td
											class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
										>
											{{ category.description }}
										</td>
										<td
											class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
										>
											{{ category.id }}
										</td>

										<td
											class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap"
										>
											<router-link
												v-bind:to="`/admin/edit-category/${category.id}`"
											>
												<button
													class="ml-3 text-indigo-600 hover:text-indigo-900"
												>
													Editar
												</button>
											</router-link>
											<button
												v-on:click="
													onDeleteCategory(
														category.id,
														token
													)
												"
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
			<nav
				id="pagination"
				class="relative z-50 flex items-center justify-center mb-4 -space-x-px rounded-md shadow-sm"
				aria-label="Pagination"
			>
				<button
					v-for="(link, index) in links"
					v-bind:key="index"
					v-on:click="changePage(link.url, link.active)"
					v-html="link.label"
					v-bind:class="{
						'z-10 border-indigo-500 text-indigo-600': link.active,
					}"
					v-bind:aria-current="page"
					class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50"
				/>
			</nav>
		</div>
	</div>
</template>
<script>
import Spinner from "../../components/Spinner.vue";

import {
	deteleCategory,
	getCategories,
} from "../../services/categories.services";
import { API_URL } from "../../config/config";

export default {
	components: {
		Spinner,
	},
	data() {
		return {
			API_URL,
			token: sessionStorage.getItem("adminToken"),
			loading: true,
			categories: [],
			links: [],
		};
	},
	mounted() {
		this.getData();
	},

	methods: {
		getData: async function () {
			this.loading = true;
			const { data, links } = await getCategories();
			this.loading = false;
			this.categories = data;
			this.links = links;
		},
		changePage: async function (url, active) {
			if (!url || active) return;
			this.loading = true;
			const { data, links } = await getCategories(url);
			this.loading = false;
			this.categories = data;
			this.links = links;
		},
		onDeleteCategory: async function (id, token) {
			this.$swal({
				title: `¿Realmente quieres borrar la categoria de id: ${id}?`,
				showDenyButton: true,
				showCancelButton: true,
				confirmButtonText: "No borrar",
				denyButtonText: `Borrar`,
			}).then(async (result) => {
				if (result.isDenied) {
					this.loading = true;
					const res = await deteleCategory(id, token);
					if (res) {
						this.$swal(
							"Categoria eliminado con exito!",
							"",
							"success"
						);
						this.getData();
					}
				}
			});
		},
	},
};
</script>
