<template>
	<article
		class="flex items-center justify-center h-screen gap-8 pt-32 pb-32"
		style="background-color: #f7f4f2"
	>
		<Spinner v-if="loading" />
		<Form
			v-else
			class="flex flex-col max-w-xl p-10 bg-white rounded shadow-xl fade-in-bottom w-96"
			id="login-form"
			@submit="onLogin"
		>
			<h1 class="mb-4 text-4xl font-black">Bienvenido!</h1>
			<div class="relative flex flex-col mb-4">
				<label
					for="name"
					class="pt-4 mt-2 mb-0 text-base text-gray-400 label leading-tighter cursor-text"
					>Usuario</label
				>
				<Field
					class="w-full px-3 py-3 pt-5 pb-2 border border-gray-400 rounded appearance-none input focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
					id="name"
					name="name"
					type="text"
					v-model="user.name"
					:rules="validateUserNameAndPassword"
				/>
				<ErrorMessage
					class="relative px-4 py-3 mt-2 text-sm text-red-700 bg-red-100 border border-red-400 rounded scale-in-center"
					role="alert"
					name="name"
				/>
			</div>
			<div class="relative flex flex-col mb-2">
				<label
					for="password"
					class="pt-4 mt-2 mb-0 text-base text-gray-400 label leading-tighter cursor-text"
					>Contraseña</label
				>
				<Field
					class="w-full px-3 py-3 pt-5 pb-2 border border-gray-400 rounded appearance-none input focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
					id="password"
					name="password"
					type="password"
					v-model="user.password"
					:rules="validateUserNameAndPassword"
				/>
				<ErrorMessage
					class="relative px-4 py-3 mt-2 text-sm text-red-700 bg-red-100 border border-red-400 rounded scale-in-center"
					role="alert"
					name="password"
				/>
			</div>
			<span
				class="pb-4 text-sm text-gray-400 label leading-tighter cursor-text"
				>¿Aun no tienes cuenta?
				<router-link
					to="/register"
					class="text-sm hover:text-indigo-600"
					>Registrate!</router-link
				></span
			>
			<button
				class="px-6 py-3 font-bold text-white bg-indigo-600 rounded hover:bg-indigo-800"
				type="submit"
			>
				Iniciar sesión
			</button>
		</Form>
	</article>
</template>
<script>
import { login } from "../services/auth.services";
import Spinner from "../components/Spinner.vue";

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
		const token = sessionStorage.getItem("userToken");
		if (token) {
			this.$router.push({ path: "/" });
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
				window.sessionStorage.setItem("userToken", token);
				window.location.href = "/profile";
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
