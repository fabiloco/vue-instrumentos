<template>
	<header class="header">
		<nav class="nav">
			<div class="nav__items">
				<img src="../assets/img/logo.png" class="logo" />
				<ul class="nav__btns">
					<li><router-link to="/">Inicio</router-link></li>
					<li><router-link to="/products">Guitarras</router-link></li>
					<li><router-link to="/products">Percusión</router-link></li>
					<li><router-link to="/products">Bajos</router-link></li>
					<li><router-link to="/products">Ukuleles</router-link></li>
					<li><router-link to="/products">Teclados</router-link></li>
					<li><router-link to="/products">Efectos</router-link></li>
				</ul>
			</div>
			<div class="nav__options">
				<ul class="options__buttons">
					<li v-if="token">
						<img src="../assets/icons/tool.svg" />
						<router-link to="/admin/login">Admin panel</router-link>
					</li>
					<li>
						<img v-if="token" src="../assets/icons/trolley.svg" />
						<!-- <router-link to="/shopping_cart">Carro</router-link> -->
						<button v-if="token" @click="onViewModal = true">
							Carrito
						</button>
					</li>
					<li>
						<img src="../assets/icons/location.svg" />
						<a href="javascript:void(0);">Ubicación</a>
					</li>
					<li>
						<img src="../assets/icons/info.svg" />
						<a href="javascript:void(0);">Info</a>
					</li>
					<li v-if="isLogged">
						<img src="../assets/icons/user.svg" />
						<router-link to="/profile">Perfil</router-link>
					</li>
					<li
						v-if="isLogged"
						id="login-btn"
						v-on:click="onLogout"
						class="cursor-pointer"
					>
						<img src="../assets/icons/log-out.svg" />
						<a>Log out</a>
					</li>

					<li v-else id="login-btn">
						<img src="../assets/icons/login.svg" />
						<router-link to="/login">Login</router-link>
					</li>
				</ul>
				<div class="options__search">
					<input class="search__bar" type="search" />
					<a href="javascript:void(0);"
						><img
							class="search__icon"
							src="../assets/icons/search.svg"
					/></a>
				</div>
			</div>
		</nav>
		<nav class="nav-mobile">
			<div class="nav-mobile-btns">
				<img src="../assets/img/logo.png" class="logo-mobile" />
				<div class="menu-deployer">
					<img
						src="../assets/icons/menu-icon.svg"
						class="nav-mobile-menu-icon"
					/>
					<div class="z-50 nav-mobile__items">
						<ul class="nav-mobile__btns">
							<li class="nav-mobile__inicio">
								<a href="./index.html">Inicio</a>
							</li>
							<li class="nav-mobile__subtitle">Categorias</li>
							<ul class="nav-mobile__categories">
								<li>
									<router-link to="/">Inicio</router-link>
								</li>
								<li>
									<router-link to="/products"
										>Guitarras</router-link
									>
								</li>
								<li>
									<router-link to="/products"
										>Percusión</router-link
									>
								</li>
								<li>
									<router-link to="/products"
										>Bajos</router-link
									>
								</li>
								<li>
									<router-link to="/products"
										>Ukuleles</router-link
									>
								</li>
								<li>
									<router-link to="/products"
										>Teclados</router-link
									>
								</li>
								<li>
									<router-link to="/products"
										>Efectos</router-link
									>
								</li>
							</ul>
							<li class="nav-mobile__subtitle">Optiones</li>
							<ul class="nav-mobile__categories">
								<li v-if="token">
									<img src="../assets/icons/tool.svg" />
									<router-link to="/admin/login"
										>Admin panel</router-link
									>
								</li>
								<li>
									<img
										v-if="token"
										src="../assets/icons/trolley.svg"
									/>
									<!-- <router-link to="/shopping_cart">Carro</router-link> -->
									<button
										v-if="token"
										@click="onViewModal = true"
									>
										Carrito
									</button>
								</li>
								<li>
									<img src="../assets/icons/location.svg" />
									<a href="javascript:void(0);">Ubicación</a>
								</li>
								<li>
									<img src="../assets/icons/info.svg" />
									<a href="javascript:void(0);">Info</a>
								</li>
								<li v-if="isLogged">
									<img src="../assets/icons/user.svg" />
									<router-link to="/profile"
										>Perfil</router-link
									>
								</li>
								<li
									v-if="isLogged"
									id="login-btn"
									v-on:click="onLogout"
									class="cursor-pointer"
								>
									<img src="../assets/icons/log-out.svg" />
									<a>Log out</a>
								</li>

								<li v-else id="login-btn">
									<img src="../assets/icons/login.svg" />
									<router-link to="/login">Login</router-link>
								</li>
							</ul>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	</header>
	<Cart :onViewModal="onViewModal" :toggleOnViewModal="toggleOnViewModal" />
</template>

<script>
import Cart from "./Cart.vue";

export default {
	name: "Navbar",
	props: {
		isLogged: Boolean,
	},
	components: {
		Cart,
	},
	data: () => {
		return {
			onViewModal: false,
			token: sessionStorage.getItem("userToken"),
		};
	},
	methods: {
		onLogout() {
			sessionStorage.removeItem("userToken");
			window.location.href = "/";
		},
		toggleOnViewModal() {
			this.onViewModal = !this.onViewModal;
		},
	},
};
</script>
