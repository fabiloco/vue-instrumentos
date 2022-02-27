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

								<Form
									@submit="sendAddress(address)"
									class="grid gap-2 p-2 text-sm rounded-md bg-gray-50 md:grid-cols-2"
								>
									<div class="grid grid-cols-2">
										<label
											for="user-address"
											class="px-4 py-2 font-semibold"
											>Dirección</label
										>
										<Field
											v-if="isEditing[index]"
											type="text"
											name="user-address"
											v-model="address.address"
											class="h-10 px-4 py-2 border rounded-md border-slate-400"
											:rules="validateAddress"
										/>
										<p v-else class="px-4 py-2">
											{{ address.address }}
										</p>
										<ErrorMessage
											class="relative px-4 py-3 mt-2 text-sm text-red-700 bg-red-100 border border-red-400 rounded scale-in-center"
											role="alert"
											name="user-address"
										/>
									</div>

									<div class="grid grid-cols-2">
										<label
											for="user-zipcode"
											class="px-4 py-2 font-semibold"
											>Código postal</label
										>
										<Field
											v-if="isEditing[index]"
											type="text"
											name="user-zipcode"
											v-model="address.zipcode"
											class="h-10 px-4 py-2 border rounded-md border-slate-400"
											:rules="validatePostalCode"
										/>
										<p v-else class="px-4 py-2">
											{{ address.zipcode }}
										</p>
										<ErrorMessage
											class="relative px-4 py-3 mt-2 text-sm text-red-700 bg-red-100 border border-red-400 rounded scale-in-center"
											role="alert"
											name="user-zipcode"
										/>
									</div>

									<div class="grid grid-cols-2">
										<label
											for="user-city"
											class="px-4 py-2 font-semibold"
											>City</label
										>
										<Field
											v-if="isEditing[index]"
											type="text"
											name="user-city"
											v-model="address.city"
											class="h-10 px-4 py-2 border rounded-md border-slate-400"
											:rules="validateCity"
										/>
										<p v-else class="px-4 py-2">
											{{ address.city }}
										</p>
										<ErrorMessage
											class="relative px-4 py-3 mt-2 text-sm text-red-700 bg-red-100 border border-red-400 rounded scale-in-center"
											role="alert"
											name="user-city"
										/>
									</div>

									<div class="grid grid-cols-2">
										<label
											for="user-country"
											class="px-4 py-2 font-semibold"
											>Pais</label
										>

										<Field
											name="user-country"
											v-model="address.countries_id"
											class="h-10 px-4 py-2 bg-white border rounded-md border-slate-400"
											v-bind:disabled="!isEditing[index]"
											:rules="validatePostalCode"
											as="select"
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
										</Field>
										<ErrorMessage
											class="relative px-4 py-3 mt-2 text-sm text-red-700 bg-red-100 border border-red-400 rounded scale-in-center"
											role="alert"
											name="user-country"
										/>
									</div>

									<div class="grid grid-cols-2">
										<label
											for="user-state"
											class="px-4 py-2 font-semibold"
											>Departamento</label
										>

										<Field
											v-bind:disabled="!isEditing[index]"
											name="user-state"
											v-model="address.states_id"
											class="h-10 px-4 py-2 bg-white border rounded-md border-slate-400"
											:rules="validatePostalCode"
											as="select"
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
										</Field>

										<ErrorMessage
											class="relative px-4 py-3 mt-2 text-sm text-red-700 bg-red-100 border border-red-400 rounded scale-in-center"
											role="alert"
											name="user-state"
										/>
									</div>

									<div class="flex justify-end">
										<button
											v-if="isEditing[index]"
											class="h-10 px-2 py-1 text-white bg-indigo-500 rounded-md shadow-md w-fit hover:bg-indigo-600"
										>
											Enviar
										</button>
									</div>
								</Form>
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

import { Field, Form, ErrorMessage } from "vee-validate";

export default {
	components: {
		Spinner,
		Field,
		Form,
		ErrorMessage,
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

	beforeCreate() {
		const token = sessionStorage.getItem("userToken");
		if (!token) {
			this.$router.push({ path: "/" });
		}
	},

	async mounted() {
		this.loading = true;
		await this.initData();
		this.loading = false;
	},

	methods: {
		validateCity(value) {
			// if the field is empty
			if (!value) {
				return "Este campo es requerido";
			}

			// if the field is not a valid city name
			// acepta valores alfabeticos normales y especiales,
			// para aquellos paises con tilde u otros caracteres
			const regex =
				/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;
			if (!regex.test(value)) {
				return "Este no es un nombre de pais valido";
			}

			if (!(value.length >= 2)) {
				return "Este campo debe tener por lo menos 3 caracteres";
			}

			// All is good
			return true;
		},

		validatePostalCode(value) {
			// if the field is empty
			if (!value) {
				return "Este campo es requerido";
			}

			// All is good
			return true;
		},

		validateAddress(value) {
			// if the field is empty
			if (!value) {
				return "Este campo es requerido";
			}

			if (!(value.length >= 3)) {
				return "Este campo debe tener por lo menos 3 caracteres";
			}

			// All is good
			return true;
		},

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

		async onCountrySelectUpdated(index, address) {
			const state = await getStates(address.countries_id, this.token);
			this.states[index] = state;
		},

		async sendAddress(address) {
			this.loading = true;
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
