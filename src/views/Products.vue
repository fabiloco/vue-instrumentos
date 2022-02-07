<template>
	<article class="products">
		<header class="products__header">
			<div class="product__name">
				<h1>Guitarras</h1>
			</div>
		</header>

		<section class="products__list">
			<Spinner v-if="loading" />

			<div v-else class="products__list__container">
				<aside class="list__aside">
					<h3 class="list__aside__title text-lg ">Compra por categoria</h3>
					<div class="list__aside-box"></div>
					<ul id="products-categories">
						<li>
							<a href="javascript:void(0);">Elétricas</a>
							<hr />
						</li>
						<li>
							<a href="javascript:void(0);">Acústicas</a>
							<hr />
						</li>
						<li>
							<a href="javascript:void(0);">Electroacústicas</a>
							<hr />
						</li>
						<li>
							<a href="javascript:void(0);">Clasicas</a>
							<hr />
						</li>
						<li>
							<a href="javascript:void(0);"
								>Clasicas Electroacústicas</a
							>
							<hr />
						</li>
					</ul>

					<h3 class="list__aside__title text-lg">Tu lista de deseos</h3>
					<div class="list__aside-box"></div>
					<ul>
						<li>
							Su lista de deseos esta vacia
							<hr />
						</li>
					</ul>
				</aside>

<div class="bg-white">
    <div class="max-w-2xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:max-w-full lg:px-8">
      <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>
      <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div
			v-for="(product, index) in products"
			v-bind:key="index"
			class="group relative">
          <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img :src="`${API_URL}/${product.image[0].url}`" :alt="product.name" class="w-full h-full object-center object-cover lg:w-full lg:h-full" />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-gray-700">
				<router-link
					class="absolute inset-0"
					v-bind:to="`/product/${product.id}`">

				</router-link>
				{{ product.name }}
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
			  <div class="flex items-center text-md">
											<div v-if="product.stock > 1">
												<span
													class="inline-block w-2 h-2 mr-2 bg-green-500 rounded-full"></span>
												<span class="text-sm text-green-500">Disponible</span>
											</div>

											<div v-else>
												<span
													class="inline-block w-2 h-2 mr-2 bg-red-500 rounded-full"></span>
												<span class="text-sm text-red-500">No disponible</span>
											</div>
										</div>
            </div>
            <p class="text-sm font-medium text-gray-900">COP ${{ product.price }} </p>
          </div>
        </div>
      </div>
    </div>





	<nav id="pagination" class="relative z-50 mb-4 flex items-center justify-center rounded-md shadow-sm -space-x-px" aria-label="Pagination">
						<button
							v-for="(link, index) in links"
							v-bind:key="index"
							v-on:click="changePage(link.url)"
							v-html="link.label "
							v-bind:class="{ 'z-10 border-indigo-500 text-indigo-600': link.active }"
							v-bind:aria-current="page"
							class=" bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
						/>
					</nav>
	</div>
			</div>
		</section>
	</article>
</template>

<script>
import Spinner from "../components/Spinner.vue";

import { getProducts } from "../services/products.services";
import { API_URL } from "../config/config";


export default {
	components: {
		Spinner,
	},
	data() {
		return {
			API_URL,
			loading: true,
			products: [],
			links: [],
		};
	},
	mounted() {
		this.getData();
	},

	methods: {
		getData: async function () {
			this.loading = true;
			const { data, links } = await getProducts();
			this.loading = false;
			this.products = data;
			this.links = links;
		},
		changePage: async function (url) {
			if (!url) return;
			this.loading = true;
			const { data, links } = await getProducts(url);
			this.loading = false;
			this.products = data;
			this.links = links;
		},
	},
};
</script>
