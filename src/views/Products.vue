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
					<h3 class="list__aside__title">Compra por categoria</h3>
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

					<h3 class="list__aside__title">Tu lista de deseos</h3>
					<div class="list__aside-box"></div>
					<ul>
						<li>
							Su lista de deseos esta vacia
							<hr />
						</li>
					</ul>
				</aside>
				<div class="list__products">
					<div class="list__products__options">
						<div class="list__products__options-item">
							<div class="list__products__options-btn">
								<img
									class="list__products__options-btn-ico"
									src="../assets/icons/view-grid.svg"
								/>
							</div>
							<div class="list__products__options-btn">
								<img
									class="list__products__options-btn-ico"
									src="../assets/icons/view-list.svg"
								/>
							</div>
						</div>
						<div class="list__products__options-item">
							<div class="list__products__options-btn">
								Mostrar 10 por página
								<img
									src="assets/icons/down-arrow.svg"
									class="down-arrow"
								/>
							</div>
						</div>
						<div class="list__products__options-item">
							<div class="list__products__options-btn">
								Ordenar por precio
								<img
									src="assets/icons/down-arrow.svg"
									class="down-arrow"
								/>
							</div>
						</div>
					</div>

					<ul
						id="products"
						class="flex flex-wrap justify-center p-2 overflow-hidden"
					>
						<li
							v-for="(product, index) in products"
							v-bind:key="index"
						>
							<router-link
								class="w-full h-full"
								v-bind:to="`/product/${product.id}`"
							>
								<img
									v-bind:src="`${API_URL}/${product.image[0].url}`"
									class="object-contain w-full p-3 product-img h-2/3"
									alt="${element.name}"
								/>
								<div
									class="flex flex-col justify-around w-full p-4 h-1/3"
								>
									<h4 class="text-xl">{{ product.name }}</h4>
									<p class="text-lg">
										COP$ ${{ product.price }}
									</p>
									<div>
										<div class="flex items-center text-md">
											<div v-if="product.stock > 1">
												<span
													class="inline-block w-2 h-2 mr-2 bg-green-500 rounded-full"
												></span>
												<span class="text-green-500"
													>Disponible</span
												>
											</div>

											<div v-else>
												<span
													class="inline-block w-2 h-2 mr-2 bg-red-500 rounded-full"
												></span>
												<span class="text-red-500"
													>No disponible</span
												>
											</div>
										</div>
									</div>
								</div>
							</router-link>
						</li>
					</ul>

					<div class="barra"></div>

					<div id="pagination" class="mt-4 mb-4">
						<button
							v-for="(link, index) in links"
							v-bind:key="index"
							v-on:click="changePage(link.url)"
							v-html="link.label"
							v-bind:class="{ 'bg-gray-300': link.active }"
							class="px-3 py-2 border border-slate-300 hover:bg-slate-300"
						></button>
					</div>
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
	components: { Spinner },
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
