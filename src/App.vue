<template>



	<Layout>
		<router-view />
	</Layout>

	<!-- This example requires Tailwind CSS v2.0+ -->

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
