<template>
	<Cart />
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
					<li>
						<img src="../assets/icons/trolley.svg" />
						<!-- <router-link to="/shopping_cart">Carro</router-link> -->
						<button @click="open = true">Carrito</button>
					</li>
					<li>
						<img src="../assets/icons/location.svg" />
						<a href="javascript:void(0);">Ubicación</a>
					</li>
					<li>
						<img src="../assets/icons/info.svg" />
						<a href="javascript:void(0);">Info</a>
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
					<div class="nav-mobile__items">
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
								<li>
									<img src="../assets/icons/trolley.svg" />
									<router-link to="/shopping_cart"
										>Carro</router-link
									>
								</li>
								<li>
									<img src="../assets/icons/location.svg" />
									<a href="javascript:void(0);">Ubicación</a>
								</li>
								<li>
									<img src="../assets/icons/info.svg" />
									<a href="javascript:void(0);">Info</a>
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

	<TransitionRoot as="template" :show="open">
		<Dialog
			as="div"
			class="fixed inset-0 overflow-hidden"
			@close="open = false"
		>
			<div class="absolute inset-0 overflow-hidden">
				<TransitionChild
					as="template"
					enter="ease-in-out duration-500"
					enter-from="opacity-0"
					enter-to="opacity-100"
					leave="ease-in-out duration-500"
					leave-from="opacity-100"
					leave-to="opacity-0"
				>
					<DialogOverlay
						class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
					/>
				</TransitionChild>

				<div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
					<TransitionChild
						as="template"
						enter="transform transition ease-in-out duration-500 sm:duration-700"
						enter-from="translate-x-full"
						enter-to="translate-x-0"
						leave="transform transition ease-in-out duration-500 sm:duration-700"
						leave-from="translate-x-0"
						leave-to="translate-x-full"
					>
						<div class="w-screen max-w-md">
							<div
								class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll"
							>
								<div
									class="flex-1 py-6 overflow-y-auto px-4 sm:px-6"
								>
									<div
										class="flex items-start justify-between"
									>
										<DialogTitle
											class="text-lg font-medium text-gray-900"
										>
											Shopping cart
										</DialogTitle>
										<div class="ml-3 h-7 flex items-center">
											<button
												type="button"
												class="-m-2 p-2 text-gray-400 hover:text-gray-500"
												@click="open = false"
											>
												<span class="sr-only"
													>Close panel</span
												>
												<XIcon
													class="h-6 w-6"
													aria-hidden="true"
												/>
											</button>
										</div>
									</div>

									<!-- <div class="mt-8">
                    <div class="flow-root">
                      <ul role="list" class="-my-6 divide-y divide-gray-200">
                        <li v-for="product in products" :key="product.id" class="py-6 flex">
                          <div class="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                            <img :src="product.imageSrc" :alt="product.imageAlt" class="w-full h-full object-center object-cover" />
                          </div>

                          <div class="ml-4 flex-1 flex flex-col">
                            <div>
                              <div class="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                  <a :href="product.href">
                                    {{ product.name }}
                                  </a>
                                </h3>
                                <p class="ml-4">
                                  {{ product.price }}
                                </p>
                              </div>
                              <p class="mt-1 text-sm text-gray-500">
                                {{ product.color }}
                              </p>
                            </div>
                            <div class="flex-1 flex items-end justify-between text-sm">
                              <p class="text-gray-500">Qty {{ product.quantity }}</p>

                              <div class="flex">
                                <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div> -->
								</div>

								<div
									class="border-t border-gray-200 py-6 px-4 sm:px-6"
								>
									<div
										class="flex justify-between text-base font-medium text-gray-900"
									>
										<p>Subtotal</p>
										<p>$262.00</p>
									</div>
									<p class="mt-0.5 text-sm text-gray-500">
										Shipping and taxes calculated at
										checkout.
									</p>
									<div class="mt-6">
										<a
											href="#"
											class="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
											>Checkout</a
										>
									</div>
									<div
										class="mt-6 flex justify-center text-sm text-center text-gray-500"
									>
										<p>
											or
											<button
												type="button"
												class="text-indigo-600 font-medium hover:text-indigo-500"
												@click="open = false"
											>
												Continue Shopping<span
													aria-hidden="true"
												>
													&rarr;</span
												>
											</button>
										</p>
									</div>
								</div>
							</div>
						</div>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

<script>
import { ref } from "vue";
import {
	Dialog,
	DialogOverlay,
	DialogTitle,
	TransitionChild,
	TransitionRoot,
} from "@headlessui/vue";
import { XIcon } from "@vue-hero-icons/outline";

const products = [
	{
		id: 1,
		name: "Throwback Hip Bag",
		href: "#",
		color: "Salmon",
		price: "$90.00",
		quantity: 1,
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
		imageAlt:
			"Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
	},
	{
		id: 2,
		name: "Medium Stuff Satchel",
		href: "#",
		color: "Blue",
		price: "$32.00",
		quantity: 1,
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
		imageAlt:
			"Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
	},
	// More products...
];

export default {
	name: "Navbar",
	components: {
		Dialog,
		DialogOverlay,
		DialogTitle,
		TransitionChild,
		TransitionRoot,
		XIcon,
	},
	updated() {},
	methods: {
		onLogout() {
			sessionStorage.removeItem("userToken");
			window.location.href = "/";
		},
	},
	setup() {
		const open = ref(false);

		return {
			products,
			open,
		};
	},
};
</script>
