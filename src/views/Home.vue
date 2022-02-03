<template>
	<div>
		<section class="welcome">
			<div class="welcome-container">
				<div class="welcome__item"></div>
				<div class="welcome__item">
					<h2 class="welcome__mini-title">NUEVAS GUITARRAS</h2>
					<h1 class="welcome__title">FENDER COLLECTION</h1>
					<a href="javascript:void(0);" class="welcome__btn"
						>DESCUBRIR AHORA</a
					>
					<div class="welcome__news">
						<div class="news__options">
							<p>01/03</p>
							<div class="news__btns">
								<img
									src="../assets/icons/arrows.svg"
									class="news__arrows"
									alt="arrow"
								/>
								<img
									src="../assets/icons/arrows.svg"
									class="news__arrows"
									alt="arrow"
								/>
							</div>
						</div>
						<div class="news__bars">
							<div class="news__bar"></div>
							<div class="news__bar"></div>
							<div class="news__bar"></div>
						</div>
						<div class="news__items">
							<div class="news__item">
								<h2>FENDER COLLECTION</h2>
								<p>
									Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Dolores, facilis. Culpa
									exercitationem voluptate voluptates
									praesentium. Repellat qui.
								</p>
							</div>
							<div class="news__item">
								<h2>FENDER COLLECTION</h2>
								<p>
									Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Dolores, facilis. Culpa
									exercitationem voluptate voluptates
									praesentium. Repellat qui.
								</p>
							</div>
							<div class="news__item">
								<h2>FENDER COLLECTION</h2>
								<p>
									Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Dolores, facilis. Culpa
									exercitationem voluptate voluptates
									praesentium. Repellat qui.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<article class="article" id="first_article">
			<section class="article__img">
				<img
					class="img_show"
					src="../assets/img/instrumentos/teclado.jpg"
					alt="pizzaa"
				/>
			</section>
			<section class="article__text">
				<div class="article__theme">
					<div class="box"></div>
					<h2>TECLADOS MIDI</h2>
				</div>

				<h3 class="article__title">Pianos y organetas Casio</h3>

				<p class="article__p">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Cumque voluptatem dolor sequi explicabo ratione. Hic
					exercitationem excepturi ipsum, laboriosam veniam sapiente!
					Incidunt nam enim ab ratione nobis error, unde quaerat.
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				</p>

				<a href="javascript:void(0);" class="article__btn">
					Hacer pedido
				</a>
			</section>
		</article>

		<article class="article" id="second_article">
			<section class="article__img">
				<img
					class="img_show"
					src="../assets/img/instrumentos/guitarra_acustica.jpg"
					alt="pizzaa"
				/>
			</section>
			<section class="article__text">
				<div class="article__theme">
					<div class="box"></div>
					<h2>GUITARRAS ACUSTICAS</h2>
				</div>

				<h3 class="article__title">Guitarras con hermosos diseños</h3>

				<p class="article__p">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Cumque voluptatem dolor sequi explicabo ratione. Hic
					exercitationem excepturi ipsum, laboriosam veniam sapiente!
					Incidunt nam enim ab ratione nobis error, unde quaerat.
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				</p>

				<a href="javascript:void(0);" class="article__btn">
					Hacer pedido
				</a>
			</section>
		</article>

		<article class="article" id="three_article">
			<section class="article__img">
				<img
					class="img_show"
					src="../assets/img/instrumentos/instrumentos.jpg"
					alt="pizzaa"
				/>
			</section>
			<section class="article__text">
				<div class="article__theme">
					<div class="box"></div>
					<h2>Envios a todo el pais</h2>
				</div>

				<h3 class="article__title">
					No importa el lugar, llegaremos donde estes
				</h3>

				<p class="article__p">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Cumque voluptatem dolor sequi explicabo ratione. Hic
					exercitationem excepturi ipsum, laboriosam veniam sapiente!
					Incidunt nam enim ab ratione nobis error, unde quaerat.
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				</p>

				<a href="javascript:void(0);" class="article__btn">
					Hacer pedido
				</a>
			</section>
		</article>

		<article class="gallery">
			<img
				class="gallery__item"
				src="../assets/img/instrumentos/guitarras_colores.jpg"
				alt="pizza 🍕"
			/>
		</article>

		<article class="highlights">
			<div class="highlights__header">
				<p>COMPRA</p>
				<h2>Instrumentos de todo tipo</h2>
			</div>

			<div class="highlights-gallery__container">
				<img
					class="highlights-gallery__item"
					src="../assets/img/instrumentos/gallery/1.jpg"
					alt="pizza 🍕"
				/>
				<img
					class="highlights-gallery__item"
					src="../assets/img/instrumentos/gallery/2.jpg"
					alt="pizza 🍕"
				/>
				<img
					class="highlights-gallery__item"
					src="../assets/img/instrumentos/gallery/3.jpg"
					alt="pizza 🍕"
				/>
				<img
					class="highlights-gallery__item"
					src="../assets/img/instrumentos/gallery/4.jpg"
					alt="pizza 🍕"
				/>
				<img
					class="highlights-gallery__item"
					src="../assets/img/instrumentos/gallery/5.jpg"
					alt="pizza 🍕"
				/>
				<img
					class="highlights-gallery__item"
					src="../assets/img/instrumentos/gallery/6.jpg"
					alt="pizza 🍕"
				/>
				<img
					class="highlights-gallery__item"
					src="../assets/img/instrumentos/gallery/7.jpg"
					alt="pizza 🍕"
				/>
				<img
					class="highlights-gallery__item"
					src="../assets/img/instrumentos/gallery/8.jpg"
					alt="pizza 🍕"
				/>
				<img
					class="highlights-gallery__item"
					src="../assets/img/instrumentos/gallery/9.jpg"
					alt="pizza 🍕"
				/>
			</div>
		</article>
	</div>
</template>

<script>
export default {
	name: "Home",
};
</script>
