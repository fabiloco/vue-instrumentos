<template>
	<header class="header">
		<nav class="nav">
			<div class="nav__items">
				<img src="../assets/img/logo.png" class="logo" />
				<ul class="nav__btns">
					<li><a href="/index.html">Inicio</a></li>
					<li><a href="/products">Guitarras</a></li>
					<li><a href="/products">Percusión</a></li>
					<li><a href="/products">Bajos</a></li>
					<li><a href="/products">Ukuleles</a></li>
					<li><a href="/products">Teclados</a></li>
					<li><a href="/products">Efectos</a></li>
				</ul>
			</div>
			<div class="nav__options">
				<ul class="options__buttons">
					<li>
						<img src="../assets/icons/trolley.svg" />
						<a href="/shopping_cart">Carro</a>
					</li>
					<li>
						<img src="../assets/icons/location.svg" />
						<a href="javascript:void(0);">Ubicación</a>
					</li>
					<li>
						<img src="../assets/icons/info.svg" />
						<a href="javascript:void(0);">Info</a>
					</li>
					<li id="login-btn">
						<img src="../assets/icons/login.svg" />
						<a href="./login.html">Login</a>
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
								<li><a href="/product">Guitarras</a></li>
								<li><a href="/product">Percusión</a></li>
								<li><a href="/product">Bajos</a></li>
								<li><a href="/product">Ukuleles</a></li>
								<li><a href="/product">Teclados</a></li>
								<li><a href="/product">Efectos</a></li>
							</ul>
							<li class="nav-mobile__subtitle">Optiones</li>
							<ul class="nav-mobile__categories">
								<li>
									<img src="../assets/icons/trolley.svg" />
									<a href="./shoping_cart.html">Carro</a>
								</li>
								<li>
									<img src="../assets/icons/location.svg" />
									<a href="javascript:void(0);">Ubicación</a>
								</li>
								<li>
									<img src="../assets/icons/info.svg" />
									<a href="javascript:void(0);">Info</a>
								</li>
								<li id="login-btn-mobile">
									<img src="../assets/icons/login.svg" />
									<a href="./login.html">Login</a>
								</li>
							</ul>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	name: "Navbar",
};
</script>
