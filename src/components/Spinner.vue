<template>
	<div class="flex items-center justify-center w-screen spinner-container">
		<div class="spinner animate-spin"></div>
	</div>
</template>

<style scoped>
.spinner-container {
	height: 70vh;
}

.spinner {
	border: 4px solid rgba(0, 0, 0, 0.1);
	border-left-color: transparent;
	border-radius: 50%;
	width: 36px;
	height: 36px;
}
</style>
