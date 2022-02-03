<template>
	<article class="products">
		<header class="products__header">
			<div class="product__name">
				<h1>Guitarras</h1>
			</div>
		</header>

		<section class="products__list">
			<div class="products__list__container">
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
							<a
								class="h-full w-full"
								href="${`/product#${element.id}`}"
							>
								<img
									v-bind:src="`${API_URL}/${product.image[0].url}`"
									class="product-img p-3 w-full h-2/3 object-contain"
									alt="${element.name}"
								/>
								<div
									class="w-full h-1/3 flex flex-col justify-around p-4"
								>
									<h4 class="text-xl">${element.name}</h4>
									<p class="text-lg">COP$ ${element.price}</p>
									<div>
										${element.stock > 0 ? `
										<div class="flex items-center text-md">
											<span
												class="w-2 h-2 bg-green-500 inline-block rounded-full mr-2"
											></span
											><span class="text-green-500"
												>Disponible</span
											>
										</div>
										` : 'No disponible' }
									</div>
								</div>
							</a>
						</li>
					</ul>

					<div class="barra"></div>

					<div id="pagination"></div>
				</div>
			</div>
		</section>
	</article>
</template>

<script>
import { getProducts } from "../services/products.services";
import { API_URL } from "../config/config";

export default {
	data() {
		return {
			products: [],
			API_URL,
		};
	},
	async mounted() {
		const { data } = await getProducts();
		console.log(data);
		this.products = data;
	},
};
</script>
