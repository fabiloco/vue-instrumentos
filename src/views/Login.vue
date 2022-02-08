<template>
	<article
		class="flex items-center justify-center h-screen gap-8 pt-32 pb-32"
		style="background-color: #f7f4f2"
	>
		<Spinner v-if="loading" />
		<form
			v-else
			class="flex flex-col max-w-xl p-10 bg-white rounded shadow-xl fade-in-bottom"
			id="login-form"
			v-bind:onsubmit="onLogin"
		>
			<h1 class="mb-4 text-4xl font-black">Bienvenido!</h1>
			<div class="relative flex flex-col mb-4">
				<label
					for="name"
					class="pt-4 mt-2 mb-0 text-base text-gray-400 label leading-tighter cursor-text"
					>Usuario</label
				>
				<input
					class="w-full px-3 py-3 pt-5 pb-2 border border-gray-400 rounded appearance-none input focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
					id="name"
					name="name"
					type="text"
					autofocus
					v-model="user.name"
					required
				/>
			</div>
			<div class="relative flex flex-col mb-2">
				<label
					for="password"
					class="pt-4 mt-2 mb-0 text-base text-gray-400 label leading-tighter cursor-text"
					>Contraseña</label
				>
				<input
					class="w-full px-3 py-3 pt-5 pb-2 border border-gray-400 rounded appearance-none input focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
					id="password"
					name="password"
					type="password"
					v-model="user.password"
					required
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
		</form>
	</article>
</template>
<script>
import { login } from "../services/auth.services";
import { Spinner } from "../components/Spinner.vue";

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
	},

	beforeCreate() {
		const token = sessionStorage.getItem("userToken");
		if (token) {
			this.$router.push({ path: "/" });
		}
	},

	methods: {
		async onLogin(e) {
			e.preventDefault();
			this.loading = true;
			const token = await login(this.user);

			if (token) {
				window.sessionStorage.setItem("userToken", token);
				window.location.href = "/profile";
				this.loading = false;
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
