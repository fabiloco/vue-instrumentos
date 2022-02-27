<template>
	<article
		class="flex items-center justify-center h-screen gap-8 pb-32"
		style="background-color: #f7f4f2"
	>
		<Spinner v-if="loading" />

		<div v-else class="container p-5 mx-auto my-5 fade-in-bottom">
			<div class="md:flex no-wrap md:-mx-2">
				<!-- Right Side -->
				<div class="w-full h-64">
					<!-- About Section -->
					<router-link
						to="/profile"
						class="px-3 py-2 mt-4 mb-2 text-white bg-green-500 rounded-md shadow-md w-fit hover:bg-green-600"
					>
						Ir al perfil
					</router-link>
					<div class="p-3 mt-4 bg-white rounded-sm shadow-sm">
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
						</div>
						<div id="user-addresses" class="mt-2 text-gray-700">
							<div>
								<Form
									id="form-new-address"
									class="grid gap-2 p-2 text-sm rounded-md bg-gray-50 md:grid-cols-2"
									@submit="sendAddress"
								>
									<div class="grid grid-cols-2">
										<label
											for="user-address"
											class="px-4 py-2 font-semibold"
											>Dirección</label
										>
										<Field
											name="user-address"
											id="user-address"
											type="text"
											class="h-10 px-4 py-2 border rounded-md border-slate-400"
											v-model="addressData.address"
											:rules="validateAddress"
										/>
										<ErrorMessage
											class="relative px-4 py-3 mt-2 text-sm text-red-700 bg-red-100 border border-red-400 rounded scale-in-center"
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
											name="user-zipcode"
											id="user-zipcode"
											type="text"
											class="h-10 px-4 py-2 border rounded-md border-slate-400"
											v-model="addressData.zipcode"
											:rules="validatePostalCode"
										/>
										<ErrorMessage
											class="relative px-4 py-3 mt-2 text-sm text-red-700 bg-red-100 border border-red-400 rounded scale-in-center"
											name="user-zipcode"
										/>
									</div>
									<div class="grid grid-cols-2">
										<label
											for="user-city"
											class="px-4 py-2 font-semibold"
											>Ciudad</label
										>
										<Field
											name="user-city"
											id="user-city"
											type="text"
											class="h-10 px-4 py-2 border rounded-md border-slate-400"
											v-model="addressData.city"
											:rules="validateCity"
										/>
										<ErrorMessage
											class="relative px-4 py-3 mt-2 text-sm text-red-700 bg-red-100 border border-red-400 rounded scale-in-center"
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
											id="user-country"
											class="h-10 px-4 py-2 bg-white border rounded-md border-slate-400"
											v-model="addressData.countries_id"
											v-on:change="onCountrySelectUpdated"
											as="select"
											:rules="validatePostalCode"
										>
											<option
												v-for="(
													country, index
												) in countries"
												v-bind:key="index"
												v-bind:value="country.id"
											>
												{{ country.name }}
											</option>
										</Field>
										<ErrorMessage
											class="relative px-4 py-3 mt-2 text-sm text-red-700 bg-red-100 border border-red-400 rounded scale-in-center"
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
											name="user-state"
											id="user-state"
											class="h-10 px-4 py-2 bg-white border rounded-md border-slate-400"
											v-model="addressData.states_id"
											as="select"
											:rules="validatePostalCode"
										>
											<option
												v-for="(state, index) in states"
												v-bind:key="index"
												v-bind:value="state.id"
											>
												{{ state.name }}
											</option>
										</Field>
										<ErrorMessage
											class="relative px-4 py-3 mt-2 text-sm text-red-700 bg-red-100 border border-red-400 rounded scale-in-center"
											name="user-state"
										/>
									</div>
									<div class="flex justify-end">
										<button
											type="submit"
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
import {
	getCountries,
	getStates,
	storeAddress,
} from "../services/address.services";

import { Field, Form, ErrorMessage } from "vee-validate";

import Spinner from "../components/Spinner.vue";

export default {
	data() {
		return {
			token: sessionStorage.getItem("userToken"),
			loading: false,
			addressData: {
				address: "",
				zipcode: "",
				city: "",
				states_id: "",
				countries_id: "",
			},
			countries: [],
			states: [],
			countryNames: [],
			statesNames: [],
		};
	},

	components: {
		Spinner,
		Field,
		Form,
		ErrorMessage,
	},

	async mounted() {
		await this.initData();
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
			this.countries = await getCountries(this.token);
		},

		async onCountrySelectUpdated() {
			const state = await getStates(
				this.addressData.countries_id,
				this.token
			);
			this.states = state;
		},

		async sendAddress() {
			this.loading = true;
			const body = {
				address: this.addressData.address,
				zipcode: this.addressData.zipcode,
				city: this.addressData.city,
				countries_id: this.addressData.countries_id,
				states_id: this.addressData.states_id,
			};

			const res = await storeAddress(this.token, body);
			if (res) {
				this.$swal({
					icon: "success",
					title: "Exito",
					text: "La direccion ha sido añadida con exito!",
				});
			} else {
				this.$swal({
					icon: "error",
					title: "Oops...",
					text: "Algo ha salido mal con los datos, por favor, rectificalos.",
				});
			}
			this.loading = false;
			await this.initData();
		},
	},
};
</script>
