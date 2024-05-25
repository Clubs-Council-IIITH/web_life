<!-- Features6.svelte -->

<section class="features6 new_gallery" id="features6-h">
	<div class="new_container">
		<div class="row align-items-center wrap">
			<div class="col-lg-9 col-md-10 col-sm-10 col-12 parallax__wrap">
				<!-- <div class="minwidth d-lg-none"></div> -->
				<div class="col-lg-3 col-md-12 col-sm-12 push title__block">
					<h2 class="mbr-section-title mbr-bold mbr-fonts-style display-5">Gallery</h2>
				</div>
				<div class="content__block">
					<div class="row group__content">
						<!-- <div class="col-lg-4"> -->
						<div class="parallax__image">
							<div class="image">
								<img src="/gallery/5.jpg" alt="" title="" />
							</div>
						</div>
						<!-- </div> -->
						<!-- <div class="col-lg-4"> -->
						<div class="parallax__image">
							<div class="image">
								<img src="/gallery/2.jpg" alt="" title="" />
							</div>
						</div>
						<!-- </div> -->
						<!-- <div class="col-lg-4"> -->
						<div class="parallax__image">
							<div class="image">
								<img src="/gallery/3.jpg" alt="" title="" />
							</div>
						</div>
						<!-- </div> -->
						<!-- </div>
					<div class="row group__content push-lg"> -->
						<!-- <div class="col-lg-4"> -->
						<div class="parallax__image">
							<div class="image">
								<img src="/gallery/4.jpg" alt="" title="" />
							</div>
						</div>
						<!-- </div> -->
						<!-- <div class="col-lg-4"> -->
						<div class="parallax__image">
							<div class="image">
								<img src="/gallery/6.jpg" alt="" title="" />
							</div>
						</div>
						<!-- </div> -->
						<!-- <div class="col-lg-4"> -->
						<div class="parallax__image">
							<div class="image">
								<img src="/gallery/7.jpg" alt="" title="" />
							</div>
						</div>
						<!-- </div> -->
						<!-- </div>
					<div class="row group__content push"> -->
						<!-- <div class="col-lg-4"> -->
						<div class="parallax__image">
							<div class="image">
								<img src="/gallery/8.jpg" alt="" title="" />
							</div>
						</div>
						<!-- </div> -->
						<!-- <div class="col-lg-4"> -->
						<div class="parallax__image">
							<div class="image">
								<img src="/gallery/9.jpg" alt="" title="" />
							</div>
						</div>
						<!-- </div> -->
						<!-- <div class="col-lg-4"> -->
						<div class="parallax__image">
							<div class="image">
								<img src="/gallery/10.jpg" alt="" title="" />
							</div>
						</div>
						<!-- </div> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.dark .new_gallery .new_container {
		background-color: black;
	}
	.new_container {
		width: 100vw;
	}

	@media screen and (max-width: 600px) {
		.new_gallery .parallax__wrap {
			padding-bottom: 2%;
		}
		.new_gallery .group__content {
			width: 98vw;
			padding-left: 10%;
		}
		.new_gallery .title__block {
			padding-bottom: 2%;
			padding-top: 15%;
			padding-left: 15%;
		}
		.new_gallery .mbr-section-title {
			font-size: 40px;
		}
		.new_gallery .parallax__image {
			padding-bottom: 5%;
		}
	}
	@media screen and (max-width: 920px) and (min-width: 768px) {
		.new_gallery .parallax__wrap {
			padding-bottom: 2%;
		}
		.new_gallery .group__content {
			width: 95vw;
			padding-left: 10%;
		}
		.new_gallery .title__block {
			padding-bottom: 5%;
			padding-top: 15%;
			padding-left: 15%;
		}
		.new_gallery .mbr-section-title {
			font-size: 75px;
		}
		.new_gallery .parallax__image {
			padding-bottom: 5%;
		}
	}
	@media screen and (max-width: 1280px) and (min-width: 920px) {
		.new_gallery .parallax__wrap {
			padding-bottom: 2%;
			padding-left: 2%;
			width: 100vw;
		}

		.new_gallery .content__block {
			width: 100%;
			padding-right: 10px;
		}
		.new_gallery .group__content {
			/* display: block; */
			width: 100vw;
			/* padding-left: 10%; */
			/* padding-right:10px; */
		}
		.new_gallery .title__block {
			min-width: 100vw;
			padding-bottom: 5%;
			padding-top: 8%;
			padding-left: 8%;
		}
		.new_gallery .mbr-section-title {
			font-size: 70px;
		}
		.new_gallery .parallax__image {
			padding-bottom: 5%;
			padding-left: 3%;
			/* padding-right:2%; */
			/* perspective: 400px; */
			/* height: 100%; */
			/* object-fit: cover; */
		}
		.new_gallery img {
			object-fit: cover;
			width: 30vw;
			min-height: 280px;
			/* aspect-ratio: 3/2; */
		}
	}
	.dark .new_gallery .mbr-section-title {
		color: white;
	}
</style>
