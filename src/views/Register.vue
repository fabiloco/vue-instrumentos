<template>
	<article
		class="flex items-center justify-center h-screen gap-8 pb-32 pt-44"
		style="background-color: #f7f4f2"
	>
		<Spinner v-if="loading" />
		<Form
			v-else
			class="flex flex-col max-w-xl p-10 bg-white rounded shadow-xl fade-in-bottom w-96"
			id="login-form"
			@submit="onRegister"
		>
			<h1 class="mb-4 text-4xl font-black">Bienvenido!</h1>
			<div class="relative flex flex-col mb-2">
				<label
					for="name"
					class="pt-4 mt-2 mb-0 text-lg text-gray-400 label leading-tighter cursor-text"
					>Usuario</label
				>
				<Field
					class="w-full px-3 py-3 pt-5 pb-2 border border-gray-400 rounded appearance-none input focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
					name="name"
					type="text"
					v-model="user.name"
					autofocus
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
					for="email"
					class="pt-2 mt-2 mb-0 text-lg text-gray-400 label leading-tighter cursor-text"
					>Email</label
				>
				<Field
					class="w-full px-3 py-3 pt-5 pb-2 border border-gray-400 rounded appearance-none input focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
					name="email"
					type="email"
					v-model="user.email"
					:rules="validateEmail"
				/>
				<ErrorMessage
					class="relative px-4 py-3 mt-2 text-sm text-red-700 bg-red-100 border border-red-400 rounded scale-in-center"
					role="alert"
					name="email"
				/>
			</div>
			<div class="relative flex flex-col mb-2">
				<label
					for="password"
					class="pt-4 mt-2 mb-0 text-lg text-gray-400 label leading-tighter cursor-text"
					>Contraseña</label
				>
				<Field
					class="w-full px-3 py-3 pt-5 pb-2 border border-gray-400 rounded appearance-none input focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
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
				>¿Ya tienes cuenta?
				<router-link to="/login" class="text-sm hover:text-indigo-600"
					>Inicia sesión!</router-link
				></span
			>
			<button
				class="px-6 py-3 font-bold text-white bg-indigo-600 rounded hover:bg-blue-dark"
				type="submit"
			>
				Registrarse
			</button>
		</Form>
	</article>
</template>

<script>
import { register } from "../services/auth.services";
import Spinner from "../components/Spinner.vue";

import { Field, Form, ErrorMessage } from "vee-validate";

export default {
	data() {
		return {
			loading: false,
			user: {
				name: "",
				email: "",
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

		validateEmail(value) {
			// if the field is empty
			if (!value) {
				return "Este campo es requerido";
			}
			if (!(value.length > 8)) {
				return "Este campo debe tener por lo menos 8 caracteres";
			}

			// if the field is not a valid email
			const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
			if (!regex.test(value)) {
				return "Este campo debe ser un email valido";
			}
			// All is good
			return true;
		},

		async onRegister() {
			// e.preventDefault();
			this.loading = true;
			const token = await register(this.user);

			if (token) {
				window.sessionStorage.setItem("userToken", token);
				window.location.href = "/profile";
				// this.$router.push({ path: "profile" });
			} else {
				this.$swal({
					icon: "error",
					title: "Oops...",
					text: "Algo ha salido mal con los datos, por favor, rectificalos. El ",
				});
				this.loading = false;
			}
		},
	},
};
</script>
