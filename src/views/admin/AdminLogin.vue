<template>
	<div
		class="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8"
	>
		<div class="absolute bottom-2 left-2">
			<router-link to="/">
				<button
					class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					👈 Volver a la página principal
				</button>
			</router-link>
		</div>
		<Spinner v-if="loading" />

		<div v-else class="w-full max-w-md space-y-8">
			<div>
				<img
					class="w-64 mx-auto"
					src="../../assets/img/logo.png"
					alt="Workflow"
				/>
				<h2
					class="mt-6 text-3xl font-extrabold text-center text-gray-900"
				>
					Admin panel
				</h2>
			</div>
			<Form
				class="mt-8 space-y-6"
				id="form"
				method="POST"
				@submit="onLogin"
			>
				<input type="hidden" name="remember" value="true" />
				<div class="-space-y-px rounded-md shadow-sm">
					<div class="mb-4">
						<label for="user" class="sr-only">Email address</label>
						<Field
							id="user"
							name="user"
							type="text"
							v-model="user.name"
							class="w-full px-3 py-3 pt-5 pb-2 mb-4 border border-gray-400 rounded appearance-none input focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
							placeholder="Admin user"
							:rules="validateUserNameAndPassword"
						/>
						<ErrorMessage
							name="user"
							class="relative px-4 py-3 my-4 text-sm text-red-700 bg-red-100 border border-red-400 rounded scale-in-center"
						/>
					</div>
					<div class="relative">
						<label for="password" class="sr-only">Password</label>
						<Field
							id="password"
							name="password"
							type="password"
							v-model="user.password"
							class="w-full px-3 py-3 pt-5 pb-2 mb-4 border border-gray-400 rounded appearance-none input focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
							placeholder="Password"
							:rules="validateUserNameAndPassword"
						/>
						<ErrorMessage
							name="password"
							class="relative px-4 py-3 my-4 text-sm text-red-700 bg-red-100 border border-red-400 rounded scale-in-center"
						/>
					</div>
				</div>
				<div>
					<button
						type="submit"
						class="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						<span
							class="absolute inset-y-0 left-0 flex items-center pl-3"
						>
							<!-- Heroicon name: solid/lock-closed -->
							<svg
								class="w-5 h-5 text-indigo-500 group-hover:text-indigo-400"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd"
								/>
							</svg>
						</span>
						Sign in
					</button>
				</div>
			</Form>
		</div>
	</div>
</template>

<script>
import { login } from "../../services/auth.services";
import Spinner from "../../components/Spinner.vue";

import { Field, Form, ErrorMessage } from "vee-validate";

export default {
	data() {
		return {
			loading: false,
			user: {
				name: "",
				password: "",
			},
		};
	},

	components: {
		Spinner,
		Field,
		Form,
		ErrorMessage,
	},

	beforeCreate() {
		const token = sessionStorage.getItem("adminToken");
		if (token) {
			this.$router.push({ path: "/admin/dashboard" });
		}
	},

	methods: {
		validateUserNameAndPassword(value) {
			// if the field is empty
			if (!value) {
				return "Este campo es requerido";
			}

			if (!(value.length >= 8)) {
				return "Este campo debe tener por lo menos 8 caracteres";
			}

			// if the field is not a valid username
			const regex = /^[a-zA-Z0-9_]*$/;
			if (!regex.test(value)) {
				return "Este campo solo puede contener letras, numeros y barras bajas";
			}
			// All is good
			return true;
		},

		async onLogin() {
			this.loading = true;
			const token = await login(this.user);

			if (token) {
				window.sessionStorage.setItem("adminToken", token);
				window.location.href = "/admin/dashboard";
				// this.$router.push({ path: "profile" });
			} else {
				this.loading = false;
				this.$swal({
					icon: "error",
					title: "Oops...",
					text: "El usuario o contraseña no son correctos, por favor, intenta otra vez",
				});
			}
		},
	},
};
</script>
