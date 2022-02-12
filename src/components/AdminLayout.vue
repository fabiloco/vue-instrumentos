<template>
	<div class="flex w-screen h-screen bg-gray-200">
		<aside
			class="flex flex-col items-center h-full text-gray-700 bg-white shadow"
		>
			<!-- Side Nav Bar-->

			<div class="flex items-center w-full h-16">
				<!-- Logo Section -->
				<router-link to="/admin/dashboard" class="w-6 h-6 mx-auto">
					<span class="text-2xl">🎸</span>
				</router-link>
			</div>

			<ul>
				<!-- Items Section -->
				<li class="hover:bg-gray-100">
					<router-link
						to="/admin/products"
						class="flex items-center justify-center w-full h-16 px-6 focus:text-orange-500"
					>
						<svg
							class="w-5 h-5"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<polyline
								points="22 12 16 12 14 15 10 15 8 12 2 12"
							></polyline>
							<path
								d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0
                                2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0
                                0-1.79 1.11z"
							></path>
						</svg>
					</router-link>
				</li>

				<li class="hover:bg-gray-100">
					<router-link
						to="/admin/categories"
						class="flex items-center justify-center w-full h-16 px-6 focus:text-orange-500"
					>
						<svg
							class="w-5 h-5"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path
								d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
							></path>
						</svg>
					</router-link>
				</li>
			</ul>

			<div class="flex items-center w-full h-16 mt-auto">
				<!-- Action Section -->
				<button
					v-on:click="onLogout"
					class="flex items-center justify-center w-full h-16 mx-auto focus:text-orange-500 hover:bg-red-200 focus:outline-none"
					id="admin-log-out-btn"
				>
					<svg
						class="w-5 h-5 text-red-700"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path
							d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
						></path>
						<polyline points="16 17 21 12 16 7"></polyline>
						<line x1="21" y1="12" x2="9" y2="12"></line>
					</svg>
				</button>
			</div>
		</aside>
		<router-view />
	</div>
</template>
<script>
export default {
	methods: {
		onLogout() {
			sessionStorage.removeItem("adminToken");
			window.location.href = "/admin/login";
		},
	},
};
</script>
