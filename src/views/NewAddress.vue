<template>
	<article
		class="flex items-center justify-center h-screen gap-8 pb-32"
		style="background-color: #f7f4f2"
	>
		<div class="container p-5 mx-auto my-5">
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
								<form
									id="form-new-address"
									v-on:submit="sendAddress"
									class="grid gap-2 p-2 text-sm rounded-md bg-gray-50 md:grid-cols-2"
								>
									<div class="grid grid-cols-2">
										<label
											for="user-address"
											class="px-4 py-2 font-semibold"
											>Dirección</label
										>
										<input
											name="user-address"
											id="user-address"
											type="text"
											class="px-4 py-2 border rounded-md border-slate-400"
											v-model="addressData.address"
											required
										/>
									</div>
									<div class="grid grid-cols-2">
										<label
											for="user-zipcode"
											class="px-4 py-2 font-semibold"
											>Código postal</label
										>
										<input
											name="user-zipcode"
											id="user-zipcode"
											type="text"
											class="px-4 py-2 border rounded-md border-slate-400"
											v-model="addressData.zipcode"
											required
										/>
									</div>
									<div class="grid grid-cols-2">
										<label
											for="user-city"
											class="px-4 py-2 font-semibold"
											>Ciudad</label
										>
										<input
											name="user-city"
											id="user-city"
											type="text"
											class="px-4 py-2 border rounded-md border-slate-400"
											v-model="addressData.city"
											required
										/>
									</div>
									<div class="grid grid-cols-2">
										<label
											for="user-country"
											class="px-4 py-2 font-semibold"
											>Pais</label
										>

										<select
											name="user-country"
											id="user-country"
											class="px-4 py-2 bg-white border rounded-md border-slate-400"
											v-model="addressData.countries_id"
											v-on:change="onCountrySelectUpdated"
											required
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
										</select>
									</div>
									<div class="grid grid-cols-2">
										<label
											for="user-state"
											class="px-4 py-2 font-semibold"
											>Departamento</label
										>

										<select
											name="user-state"
											id="user-state"
											class="px-4 py-2 bg-white border rounded-md border-slate-400"
											v-model="addressData.states_id"
											required
										>
											<option
												v-for="(state, index) in states"
												v-bind:key="index"
												v-bind:value="state.id"
											>
												{{ state.name }}
											</option>
										</select>
									</div>
									<div class="flex justify-end">
										<button
											type="submit"
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
import {
	getCountries,
	getStates,
	storeAddress,
} from "../services/address.services";

export default {
	data() {
		return {
			token: sessionStorage.getItem("userToken"),
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

	async mounted() {
		await this.initData();
	},

	methods: {
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

		async sendAddress(e) {
			e.preventDefault();

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
			await this.initData();
		},
	},
};
</script>
