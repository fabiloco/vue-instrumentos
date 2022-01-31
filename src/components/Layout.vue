<template>
	<Navbar />
	<slot />
	<Footer />
</template>

<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

export default {
	name: "Layout",
	components: {
		Navbar,
		Footer,
	},
};
</script>
