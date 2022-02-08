<template>
	<Navbar v-bind:isLogged="isLogged" />
	<slot />
	<Footer />
</template>

<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

import { getUserData } from "../services/auth.services";
// import Spinner from "./Spinner.vue";

export default {
	name: "Layout",
	data() {
		return {
			loading: true,
			isLogged: false,
		};
	},

	components: {
		Navbar,
		Footer,
		// Spinner,
	},

	async mounted() {
		this.loading = true;
		const usertoken = window.sessionStorage.getItem("userToken");
		const res = await getUserData(usertoken);
		this.isLogged = res ? true : false;
		this.loading = false;
	},
};
</script>
