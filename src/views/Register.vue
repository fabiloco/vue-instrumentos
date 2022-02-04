<template>
	<article
		class="flex items-center justify-center h-screen gap-8 pb-32 pt-44"
		style="background-color: #f7f4f2"
	>
		<form
			class="flex flex-col max-w-xl p-10 bg-white rounded shadow-xl"
			id="login-form"
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
					autofocus
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
					autofocus
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
