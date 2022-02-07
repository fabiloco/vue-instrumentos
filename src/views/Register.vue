<template>
	<article
		class="flex items-center justify-center h-screen gap-8 pb-32 pt-44"
		style="background-color: #f7f4f2"
	>
		<form
			class="flex flex-col max-w-xl p-10 bg-white rounded shadow-xl"
			id="login-form"
			v-on:submit="onRegister"
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
					v-model="user.name"
					minlength="8"
					autofocus
				/>
			</div>
			<div class="relative flex flex-col mb-4">
				<label
					for="email"
					class="pt-4 mt-2 mb-0 text-base text-gray-400 label leading-tighter cursor-text"
					>Email</label
				>
				<input
					class="w-full px-3 py-3 pt-5 pb-2 border border-gray-400 rounded appearance-none input focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
					id="email"
					name="email"
					type="email"
					v-model="user.email"
				/>
			</div>
			<div class="relative flex flex-col mb-4">
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
					minlength="8"
					v-model="user.password"
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
				Submit
			</button>
		</form>
	</article>
</template>

<script>
import { register } from "../services/auth.services";

export default {
	data() {
		return {
			user: {
				name: "",
				email: "",
				password: "",
			},
		};
	},

	beforeCreate() {
		const token = sessionStorage.getItem("userToken");
		if (token) {
			this.$router.push({ path: "/" });
		}
	},

	methods: {
		async onRegister(e) {
			e.preventDefault();
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
			}
		},
	},
};
</script>
