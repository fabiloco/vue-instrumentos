<template>
	<Navbar v-bind:isLogged="isLogged" />
	<slot />
	<Footer />
</template>

<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

import { getUserData } from "../services/auth.services";

export default {
	name: "Layout",
	data() {
		return {
			isLogged: false,
		};
	},

	components: {
		Navbar,
		Footer,
	},

	async mounted() {
		const usertoken = window.sessionStorage.getItem("userToken");
		const res = await getUserData(usertoken);
		this.isLogged = res ? true : false;
	},
};
</script>
