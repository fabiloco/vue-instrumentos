<template>
	<article class="flex flex-col items-center gap-8 pt-32 pb-32">
		<section class="flex w-3/4 gap-8">
			<div class="w-1/2 p-4 bg-white border rounded-sm border-slate-200">
				<img
					id="product-thumbnail"
					class="object-contain w-full rounded-sm h-80"
					src="https://cdn.shopify.com/s/files/1/0512/9116/0767/products/1ae418bc-6754-41da-b17b-0d4a62ee981d_1_700x.jpg?v=1605562725"
					alt=""
				/>
			</div>
			<div class="w-1/2 p-6 bg-white border rounded-sm border-slate-200">
				<h2 id="product-name" class="text-3xl font-bold">
					Nombre del producto
				</h2>
				<div class="flex mt-3 mb-3">
					<p id="product-sku" class="text-sm">SKU: 123123123</p>
				</div>
				<hr />
				<div class="mt-4">
					<p class="mb-2 text-sm">Precio:</p>
					<p id="product-price" class="text-2xl text-red-600">
						$ 123123123
					</p>
				</div>
				<div class="mt-4">
					<p class="mb-2 text-sm">Cantidad:</p>
					<div class="product__info-item products__controls-mobile">
						<button id="product-minus" class="quantity-controller">
							<img
								class="controllers-icons"
								src="../assets/icons/minus.svg"
								alt="minus"
							/>
						</button>
						<div id="product-counter" class="quantity-view">1</div>
						<button
							id="product-plus"
							class="quantity-controller plus"
						>
							<img
								class="controllers-icons"
								src="../assets/icons/plus.svg"
								alt="plus"
							/>
						</button>
					</div>
				</div>
				<div class="mt-6">
					<button
						id="add-to-cart-btn"
						class="px-4 py-2 mr-4 font-light text-white transition-all bg-red-600 border border-red-600 hover:bg-red-500"
					>
						Añadir al carrito
					</button>
				</div>
			</div>
		</section>

		<section class="flex w-3/4 gap-8">
			<div class="w-1/2 p-4 bg-white border rounded-sm border-slate-200">
				<h2 id="product-name" class="mb-2 text-3xl font-bold">
					Detalles
				</h2>
				<hr class="mb-4" />
				<p id="product-description" class="mb-4 text-md">Descripción</p>
				<p id="product-weight" class="mb-4 text-sm">Peso: peso</p>
				<p id="product-stock" class="mb-4 text-sm">Stock: peso</p>
				<h2 id="product-name" class="mb-2 text-3xl font-bold">
					Más imagenes del producto
				</h2>
				<hr class="mb-4" />
				<div class="flex flex-col gap-5" id="product-images"></div>
			</div>
			<div class="w-1/2"></div>
		</section>
	</article>
</template>

<script>
import "../assets/css/productos.css";

export default {};
</script>
