<template>
	<div
		class="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8"
	>
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
			<form
				class="mt-8 space-y-6"
				id="form"
				method="POST"
				v-bind:onsubmit="onLogin"
			>
				<input type="hidden" name="remember" value="true" />
				<div class="-space-y-px rounded-md shadow-sm">
					<div>
						<label for="user" class="sr-only">Email address</label>
						<input
							id="user"
							name="user"
							type="text"
							v-model="user.name"
							required
							class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							placeholder="Admin user"
						/>
					</div>
					<div>
						<label for="password" class="sr-only">Password</label>
						<input
							id="password"
							name="password"
							type="password"
							v-model="user.password"
							autocomplete="current-password"
							required
							class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							placeholder="Password"
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
			</form>
		</div>
	</div>
</template>

<script>
import { login } from "../../services/auth.services";
import Spinner from "../../components/Spinner.vue";

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
		const token = sessionStorage.getItem("adminToken");
		if (token) {
			this.$router.push({ path: "/admin/dashboard" });
		}
	},

	methods: {
		async onLogin(e) {
			e.preventDefault();
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
