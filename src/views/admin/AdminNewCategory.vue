<template>
	<div
		id="panel-category"
		class="flex justify-center w-full h-screen pt-16 overflow-y-auto"
	>
		<Spinner v-if="loading" />
		<div v-else class="w-3/4 p-6">
			<h1 class="mb-4 text-5xl font-bold">Nueva categoria</h1>
			<div class="w-full mb-6 bg-slate-300" style="height: 1px"></div>

			<form v-on:submit="sendData" id="category-form">
				<div class="shadow sm:rounded-md sm:overflow-hidden">
					<div class="px-4 py-5 space-y-6 bg-white sm:p-6">
						<div class="grid grid-cols-3 gap-6">
							<div class="col-span-3 sm:col-span-2">
								<div class="col-span-6 sm:col-span-3">
									<label
										for="category-name"
										class="block text-sm font-medium text-gray-700"
										>Nombre de la categoria</label
									>
									<input
										type="text"
										name="category-name"
										id="category-name"
										placeholder="Nombre de la categoria"
										class="block w-full px-2 py-1 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										v-model="newCategory.name"
										required
									/>
								</div>
							</div>
						</div>

						<div>
							<label
								for="category-description"
								class="block text-sm font-medium text-gray-700"
							>
								Descripción
							</label>
							<div class="mt-1">
								<textarea
									id="category-description"
									name="category-description"
									rows="3"
									class="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
									placeholder="Este la mejor categoria del mundo"
									v-model="newCategory.description"
									required
								></textarea>
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
import { API_URL } from "../../config/config";
import { storeCategory } from "../../services/categories.services";

export default {
	data() {
		return {
			API_URL,
			token: sessionStorage.getItem("adminToken"),
			loading: false,
			newCategory: {
				name: "",
				description: "",
			},
		};
	},

	components: {
		Spinner,
	},

	methods: {
		sendData: async function (e) {
			e.preventDefault();
			this.loading = true;
			const res = await storeCategory(this.newCategory, this.token);

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

			this.$router.push({ path: "/admin/categories" });
		},
	},
};
</script>
