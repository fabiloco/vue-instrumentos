<template>
	<div
		id="panel-products"
		class="flex flex-col items-center justify-center w-full h-full"
	>
		<div class="w-3/4 p-6">
			<h1 class="mb-4 text-5xl font-bold">Productos</h1>
			<div class="w-full mb-6 bg-slate-300" style="height: 1px"></div>
			<div class="mb-4 text-right">
				<router-link
					to="/admin/new-product"
					class="px-4 py-2 text-sm font-bold text-white bg-indigo-500 rounded hover:bg-indigo-700"
					>Nuevo producto
				</router-link>
			</div>
			<div class="flex flex-col">
				<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div
						class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
					>
						<div
							class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg"
						>
							<table
								class="h-full min-w-full overflow-y-auto divide-y divide-gray-200"
							>
								<thead class="bg-gray-50">
									<tr>
										<th
											scope="col"
											class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
										>
											Nombre
										</th>
										<th
											scope="col"
											class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
										>
											Price
										</th>
										<th
											scope="col"
											class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
										>
											SKU
										</th>
										<th
											scope="col"
											class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
										>
											Stock
										</th>
										<th
											scope="col"
											class="relative px-6 py-3"
										>
											<span class="sr-only">Edit</span>
										</th>
									</tr>
								</thead>
								<tbody
									class="bg-white divide-y divide-gray-200"
									id="products-list"
								></tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="max-w-2xl mx-auto">
			<nav aria-label="Page navigation example">
				<ul
					id="paginator-products"
					class="inline-flex -space-x-px"
				></ul>
			</nav>
		</div>
	</div>
</template>
