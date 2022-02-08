<template>
	<article
		class="flex gap-8 pt-32 pb-32 h-fit"
		style="background-color: #f7f4f2"
	>
		<Spinner v-if="loading" />
		<div v-else class="container p-5 mx-auto my-5 fade-in-bottom">
			<div class="md:flex no-wrap md:-mx-2">
				<!-- Left Side -->
				<div class="w-full md:w-3/12 md:mx-2">
					<!-- Profile Card -->
					<div class="p-3 bg-white border-t-4 border-green-400">
						<div class="overflow-hidden image">
							<img
								class="w-full h-auto mx-auto"
								src="../assets/icons/user.svg"
								alt=""
								id="user-photo"
							/>
						</div>
						<h1
							id="user-name"
							class="my-1 text-xl font-bold leading-8 text-gray-900"
						>
							{{ profileData.name }}
						</h1>
						<h3
							id="user-email"
							class="leading-6 text-gray-600 font-lg text-semibold"
						>
							{{ profileData.email }}
						</h3>
					</div>
					<!-- End of profile card -->
					<div class="my-4"></div>
				</div>
				<!-- Right Side -->
				<div class="w-full mx-2 md:w-9/12">
					<!-- Profile tab -->
					<!-- About Section -->
					<div class="p-3 bg-white rounded-sm shadow-sm">
						<div
							class="flex items-center space-x-2 font-semibold leading-8 text-gray-900"
						>
							<span clas="text-green-500">
								<img
									src="../assets/icons/compass.svg"
									alt="dir"
								/>
							</span>
							<span class="tracking-wide">Direcciones</span>

							<router-link
								to="/new-address"
								class="flex items-center justify-center px-2 py-1 mb-2 text-sm text-white bg-green-500 rounded-md shadow-md w-fit hover:bg-green-600"
							>
								<img
									class="mr-2 invert"
									src="../assets/icons/plus.svg"
									alt="plus"
								/>
								Nueva dirección
							</router-link>
						</div>
						<div id="user-addresses" class="mt-2 text-gray-700">
							<div
								v-for="(address, index) in addresses"
								v-bind:key="index"
							>
								<button
									class="px-2 py-1 mt-4 mb-2 mr-2 text-white bg-green-500 rounded-md shadow-md w-fit hover:bg-green-600"
									v-on:click="setIsEditing(index)"
								>
									Editar
								</button>

								<button
									v-on:click="deleteAddress(address)"
									class="px-2 py-1 mt-4 mb-2 mr-2 text-white bg-red-500 rounded-md shadow-md w-fit hover:bg-red-600"
								>
									Eliminar
								</button>

								<form
									v-on:submit="sendAddress($event, address)"
									class="grid gap-2 p-2 text-sm rounded-md bg-gray-50 md:grid-cols-2"
								>
									<div class="grid grid-cols-2">
										<label
											for="user-address"
											class="px-4 py-2 font-semibold"
											>Dirección</label
										>
										<input
											v-if="isEditing[index]"
											type="text"
											name="user-address"
											v-model="address.address"
											class="px-4 py-2 border rounded-md border-slate-400"
										/>
										<p v-else class="px-4 py-2">
											{{ address.address }}
										</p>
									</div>

									<div class="grid grid-cols-2">
										<label
											for="user-zipcode"
											class="px-4 py-2 font-semibold"
											>Código postal</label
										>
										<input
											v-if="isEditing[index]"
											type="text"
											name="user-zipcode"
											v-model="address.zipcode"
											class="px-4 py-2 border rounded-md border-slate-400"
										/>
										<p v-else class="px-4 py-2">
											{{ address.zipcode }}
										</p>
									</div>

									<div class="grid grid-cols-2">
										<label
											for="user-city"
											class="px-4 py-2 font-semibold"
											>City</label
										>
										<input
											v-if="isEditing[index]"
											type="text"
											name="user-city"
											v-model="address.city"
											class="px-4 py-2 border rounded-md border-slate-400"
										/>
										<p v-else class="px-4 py-2">
											{{ address.city }}
										</p>
									</div>

									<div class="grid grid-cols-2">
										<label
											for="user-country"
											class="px-4 py-2 font-semibold"
											>Pais</label
										>

										<select
											v-if="isEditing[index]"
											name="user-country"
											v-model="address.countries_id"
											class="px-4 py-2 bg-white border rounded-md border-slate-400"
											v-on:change="
												onCountrySelectUpdated(
													index,
													address
												)
											"
										>
											<option
												v-for="(
													country, index
												) in countries"
												v-bind:key="index"
												v-bind:value="country.id"
												v-bind:selected="
													address.countries_id ===
													country.id
														? true
														: false
												"
											>
												{{ country.name }}
											</option>
										</select>

										<p v-else class="px-4 py-2">
											{{ countryNames[index] }}
										</p>
									</div>

									<div class="grid grid-cols-2">
										<label
											for="user-state"
											class="px-4 py-2 font-semibold"
											>Departamento</label
										>

										<select
											v-if="isEditing[index]"
											name="user-state"
											v-model="address.states_id"
											class="px-4 py-2 bg-white border rounded-md border-slate-400"
										>
											<option
												v-for="(state, index) in states[
													index
												]"
												v-bind:key="index"
												v-bind:value="state.id"
												v-bind:selected="
													address.states_id ===
													state.id
														? true
														: false
												"
											>
												{{ state.name }}
											</option>
										</select>

										<p v-else class="px-4 py-2">
											{{ address.states_id }}
										</p>
									</div>

									<div class="flex justify-end">
										<button
											v-if="isEditing[index]"
											class="px-2 py-1 text-white bg-indigo-500 rounded-md shadow-md w-fit hover:bg-indigo-600"
										>
											Enviar
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</article>
</template>

<script>
import { getUserData } from "../services/auth.services";
import {
	deleteAddress,
	getAddresses,
	getCountries,
	getStates,
	updateAddress,
} from "../services/address.services";

import Spinner from "../components/Spinner.vue";

export default {
	components: {
		Spinner,
	},

	data() {
		return {
			loading: true,
			token: sessionStorage.getItem("userToken"),
			profileData: {},
			addresses: [],
			countries: [],
			states: [],
			countryNames: [],
			statesNames: [],
			isEditing: [],
		};
	},

	async mounted() {
		this.loading = true;
		await this.initData();
		this.loading = false;
	},

	methods: {
		async initData() {
			this.profileData = await getUserData(this.token);
			this.addresses = await getAddresses(this.token);

			this.countries = await getCountries(this.token);

			this.addresses.map(async (address) => {
				this.states.push(
					await getStates(address.countries_id, this.token)
				);
			});

			this.addresses.map((address, index) => {
				this.getAllCountryNameById(address.countries_id);
				this.getAllStateNameById(index, address.states_id);

				this.isEditing[index] = false;
			});
		},

		setIsEditing(index) {
			this.isEditing[index] = !this.isEditing[index];
		},

		getAllCountryNameById(id) {
			this.countries.forEach((country) => {
				if (country.id === id) {
					this.countryNames.push(country.name);
					return country.name;
				}
			});
		},

		onCountrySelectUpdated(index, address) {
			const state = getStates(address.countries_id, this.token);
			this.states[index] = state;
		},

		async getAllStateNameById(index, id) {
			console.log(id);
			console.log(index);
			console.log(this.states[0]);
		},

		async sendAddress(e, address) {
			this.loading = true;
			e.preventDefault();

			const body = {
				address: address.address,
				zipcode: address.zipcode,
				city: address.city,
				countries_id: address.countries_id,
				states_id: address.states_id,
			};

			await updateAddress(address.id, this.token, body);
			await this.initData();
			this.loading = false;
		},

		async deleteAddress(address) {
			this.loading = true;
			await deleteAddress(address.id, this.token);
			await this.initData();
			this.loading = false;
		},
	},
};
</script>
