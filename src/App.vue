<template>
	<!-- <div id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link>
	</div> -->
	<Layout>
		<router-view />
	</Layout>
</template>

<script>
import Layout from "./components/Layout.vue";

export default {
	name: "App",
	components: {
		Layout,
	},
};
</script>
