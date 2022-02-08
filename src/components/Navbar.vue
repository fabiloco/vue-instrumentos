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
					<li>
						<img src="../assets/icons/trolley.svg" />
						<!-- <router-link to="/shopping_cart">Carro</router-link> -->
						<button @click="onViewModal = true">Carrito</button>
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



<div v-show="onViewModal"  class="fixed inset-0 overflow-hidden" style="z-index: 900099090909;" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

    <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">

      <div class="w-screen max-w-md">
        <div class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
          <div class="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
            <div class="flex items-start justify-between">
              <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
              <div class="ml-3 h-7 flex items-center">
                <button @click="onViewModal = false" type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
                  <span class="sr-only">Close panel</span>

                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div class="mt-8">
              <div class="flow-root">
                <ul role="list" class="-my-6 divide-y divide-gray-200">
                  <li class="py-6 flex">
                    <div class="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                      <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="w-full h-full object-center object-cover">
                    </div>

                    <div class="ml-4 flex-1 flex flex-col">
                      <div>
                        <div class="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href="#"> Throwback Hip Bag </a>
                          </h3>
                          <p class="ml-4">$90.00</p>
                        </div>
                        <p class="mt-1 text-sm text-gray-500">Salmon</p>
                      </div>
                      <div class="flex-1 flex items-end justify-between text-sm">
                        <p class="text-gray-500">Qty 1</p>

                        <div class="flex">
                          <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li class="py-6 flex">
                    <div class="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                      <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg" alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." class="w-full h-full object-center object-cover">
                    </div>

                    <div class="ml-4 flex-1 flex flex-col">
                      <div>
                        <div class="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href="#"> Medium Stuff Satchel </a>
                          </h3>
                          <p class="ml-4">$32.00</p>
                        </div>
                        <p class="mt-1 text-sm text-gray-500">Blue</p>
                      </div>
                      <div class="flex-1 flex items-end justify-between text-sm">
                        <p class="text-gray-500">Qty 1</p>

                        <div class="flex">
                          <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
            <div class="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>$262.00</p>
            </div>
            <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
            <div class="mt-6">
              <a href="#" class="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Checkout</a>
            </div>
            <div class="mt-6 flex justify-center text-sm text-center text-gray-500">
              <p>
                or <button type="button" class="text-indigo-600 font-medium hover:text-indigo-500">Continue Shopping<span aria-hidden="true"> &rarr;</span></button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



</template>

<script>



export default {
	name: "Navbar",
	data:()=>{
		return {
			onViewModal: false
		}
	},
	updated() {},
	methods: {
		onLogout() {
			sessionStorage.removeItem("userToken");
			window.location.href = "/";
		},
	},




};

</script>
