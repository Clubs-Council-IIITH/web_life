<!-- Features6.svelte -->
<script>
	import Vmbtn from './viewMore.svelte';
</script>

<section class="features6 cid-rRIjJzt6Us" id="features6-h">
	<div class="container">
		<div class="row align-items-center wrap">
			<div class="col-lg-9 col-md-10 col-sm-10 col-12 parallax__wrap">
				<!-- Mobile View -->
				<div class="minwidth d-lg-none">
					<div class="col-lg-3 col-md-12 col-sm-12 push" style="padding-top:12%;">
						<h2 class="mbr-section-title mbr-bold mbr-fonts-style display-5">ABOUT US</h2>
					</div>
					
					<Vmbtn />

					<div class="new_content__block">
						<div class="row new_group__content">
							<div class="col-lg-4">
								<div class="new_parallax__image">
									<div class="image">
										<img src="/gallery/5.jpg" alt="" title="" />
									</div>
								</div>
							</div>
							<div class="col-lg-4">
								<div class="new_parallax__image">
									<div class="image">
										<img src="/gallery/2.jpg" alt="" title="" />
									</div>
								</div>
							</div>
							<div class="col-lg-4">
								<div class="new_parallax__image">
									<div class="image">
										<img src="/gallery/3.jpg" alt="" title="" />
									</div>
								</div>
							</div>

							<!-- <div class="col-lg-3 col-md-12 col-sm-12 push title__block"> -->
							<!-- <h3 class="mbr-section-subtitle mbr-semibold mbr-fonts-style display-4 mt-3">ABOUT US</h3> -->
							<h2 class="mbr-section-title mbr-bold mbr-fonts-style display-5 mt-3">
								The Felicity
							</h2>
							<p class="mbr-text mbr-fonts-style display-4">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex accusamus sunt, amet
								tempore omnis ullam molestiae eos reprehenderit vitae rem.
							</p>
							<!-- </div> -->
						</div>
					</div>
				</div>

				<!-- Desktop View -->
				<div class="content__block">
					<div class="row group__content">
						<div class="col-lg-4">
							<div class="parallax__image">
								<div class="image">
									<img src="/gallery/5.jpg" alt="" title="" />
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="parallax__image">
								<div class="image">
									<img src="/gallery/2.jpg" alt="" title="" />
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="parallax__image">
								<div class="image">
									<img src="/gallery/3.jpg" alt="" title="" />
								</div>
							</div>
						</div>
					</div>
					<div class="row group__content push-lg">
						<div class="col-lg-4">
							<div class="parallax__image">
								<div class="image">
									<img src="/gallery/4.jpg" alt="" title="" />
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="parallax__image">
								<div class="image">
									<img src="/gallery/6.jpg" alt="" title="" />
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="parallax__image">
								<div class="image">
									<img src="/gallery/7.jpg" alt="" title="" />
								</div>
							</div>
						</div>
					</div>
					<div class="row group__content push">
						<div class="col-lg-4">
							<div class="parallax__image">
								<div class="image">
									<img src="/gallery/8.jpg" alt="" title="" />
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="parallax__image">
								<div class="image">
									<img src="/gallery/9.jpg" alt="" title="" />
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="parallax__image">
								<div class="image">
									<img src="/gallery/10.jpg" alt="" title="" />
								</div>
							</div>
							<div class="ml-6 mt-3">
								<Vmbtn />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-12 col-sm-12 push title__block">
				<h3 class="mbr-section-subtitle mbr-semibold mbr-fonts-style display-4">ABOUT US</h3>
				<h2 class="mbr-section-title mbr-bold mbr-fonts-style display-5">The Felicity</h2>
				<p class="mbr-text mbr-fonts-style display-4">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex accusamus sunt, amet tempore
					omnis ullam molestiae eos reprehenderit vitae rem.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	@media screen and (max-width: 600px) {
		.new_content__block {
			display: flex;
			width: 100vw;
		}
		.new_group__content {
			display: flex;
			width: 100vw;
			padding-left: 5%;
			/* padding-top: 5%; */
		}
		.new_parallax__image {
			padding-top: 5%;
			border-radius: 20%;
		}
	}
	@media screen and (min-width: 600px) and (max-width: 768px) {
		.new_content__block {
			display: flex;
			width: 100vw;
		}
		.new_group__content {
			display: flex;
			width: 86vw;
			padding-left: 5%;
			/* padding-top: 5%; */
		}
		.new_parallax__image {
			padding-top: 5%;
			border-radius: 20%;
		}
	}
	@media screen and (min-width: 768px) and (max-width: 911px) {
		.new_content__block {
			display: flex;
			width: 100vw;
		}
		.new_group__content {
			display: flex;
			width: 86vw;
			padding-left: 5%;
			/* padding-top: 5%; */
		}
		.new_parallax__image {
			padding-top: 5%;
			border-radius: 20%;
		}
	}
	@media screen and (min-width: 912px) and (max-width: 912px) {
		.new_content__block {
			display: flex;
			width: 100vw;
		}
		.new_group__content {
			display: flex;
			width: 80vw;
			padding-left: 5%;
			/* padding-top: 5%; */
		}
		.new_parallax__image {
			padding-top: 5%;
			border-radius: 20%;
		}
	}
	@media screen and (min-width: 913px) and (max-width: 920px) {
		.new_content__block {
			display: flex;
			width: 100vw;
		}
		.new_group__content {
			display: flex;
			width: 86vw;
			padding-left: 5%;
			/* padding-top: 5%; */
		}
		.new_parallax__image {
			padding-top: 5%;
			border-radius: 20%;
		}
	}
	@media screen and (min-width: 1024px) {
		.new_content__block {
			display: flex;
			width: 100vw;
		}
		.new_group__content {
			display: flex;
			width: 86vw;
			padding-left: 5%;
			/* padding-top: 5%; */
		}
		.new_parallax__image {
			padding-top: 5%;
			border-radius: 20%;
		}
	}
</style>
<!-- Features6.svelte -->
<script>
	import Vmbtn from './viewMore.svelte';
</script>

<section class="features6 cid-rRIjJzt6Us" id="features6-h">
	<div class="container">
		<div class="row align-items-center wrap">
			<div class="col-lg-9 col-md-10 col-sm-10 col-12 parallax__wrap">
				<!-- Mobile View -->
				<div class="minwidth d-lg-none">
					<div class="col-lg-3 col-md-12 col-sm-12 push" style="padding-top:12%;">
						<h2 class="mbr-section-title mbr-bold mbr-fonts-style display-5">ABOUT US</h2>
					</div>
					
					<div class="btn-vw" >
						<Vmbtn />
					</div>

					<div class="new_content__block">
						<div class="row new_group__content">
							<div class="col-lg-4">
								<div class="new_parallax__image">
									<div class="image">
										<img src="/gallery/5.jpg" alt="" title="" />
									</div>
								</div>
							</div>
							<div class="col-lg-4">
								<div class="new_parallax__image">
									<div class="image">
										<img src="/gallery/2.jpg" alt="" title="" />
									</div>
								</div>
							</div>
							<div class="col-lg-4">
								<div class="new_parallax__image">
									<div class="image">
										<img src="/gallery/3.jpg" alt="" title="" />
									</div>
								</div>
							</div>

							<!-- <div class="col-lg-3 col-md-12 col-sm-12 push title__block"> -->
							<!-- <h3 class="mbr-section-subtitle mbr-semibold mbr-fonts-style display-4 mt-3">ABOUT US</h3> -->
							<h2 class="mbr-section-title mbr-bold mbr-fonts-style display-5 mt-3">
								The Felicity
							</h2>
							<p class="mbr-text mbr-fonts-style display-4">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex accusamus sunt, amet
								tempore omnis ullam molestiae eos reprehenderit vitae rem.
							</p>
							<!-- </div> -->
						</div>
					</div>
				</div>

				<!-- in between view -->
				<div class="in-between">
					<div class="col-lg-3 col-md-12 col-sm-12 push" style="padding-top:12%;">
						<h2 class="mbr-section-title mbr-bold mbr-fonts-style display-5">ABOUT US</h2>
					</div>
					<div style="width:68vw">
					<Vmbtn />
				</div>
					<div class="new_content__block">
						<div class="row new_group__content">
							<div class="col-lg-4">
								<div class="new_parallax__image">
									<div class="image">
										<img src="/gallery/5.jpg" alt="" title="" />
									</div>
								</div>
							</div>
							<div class="col-lg-4">
								<div class="new_parallax__image">
									<div class="image">
										<img src="/gallery/2.jpg" alt="" title="" />
									</div>
								</div>
							</div>
							<div class="col-lg-4">
								<div class="new_parallax__image">
									<div class="image">
										<img src="/gallery/3.jpg" alt="" title="" />
									</div>
								</div>
							</div>

							<!-- <div class="col-lg-3 col-md-12 col-sm-12 push title__block"> -->
							<!-- <h3 class="mbr-section-subtitle mbr-semibold mbr-fonts-style display-4 mt-3">ABOUT US</h3> -->
							<h2 class="mbr-section-title mbr-bold mbr-fonts-style display-5 mt-3">
								The Felicity
							</h2>
							<p class="mbr-text mbr-fonts-style display-4">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex accusamus sunt, amet
								tempore omnis ullam molestiae eos reprehenderit vitae rem.
							</p>
							<!-- </div> -->
						</div>
					</div>
				</div>

				<!-- Desktop View -->
				<div class="content__block">
					<div class="row group__content">
						<div class="col-lg-4">
							<div class="parallax__image">
								<div class="image">
									<img src="/gallery/5.jpg" alt="" title="" />
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="parallax__image">
								<div class="image">
									<img src="/gallery/2.jpg" alt="" title="" />
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="parallax__image">
								<div class="image">
									<img src="/gallery/3.jpg" alt="" title="" />
								</div>
							</div>
						</div>
					</div>
					<div class="row group__content push-lg">
						<div class="col-lg-4">
							<div class="parallax__image">
								<div class="image">
									<img src="/gallery/4.jpg" alt="" title="" />
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="parallax__image">
								<div class="image">
									<img src="/gallery/6.jpg" alt="" title="" />
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="parallax__image">
								<div class="image">
									<img src="/gallery/7.jpg" alt="" title="" />
								</div>
							</div>
						</div>
					</div>
					<div class="row group__content push">
						<div class="col-lg-4">
							<div class="parallax__image">
								<div class="image">
									<img src="/gallery/8.jpg" alt="" title="" />
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="parallax__image">
								<div class="image">
									<img src="/gallery/9.jpg" alt="" title="" />
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="parallax__image">
								<div class="image">
									<img src="/gallery/10.jpg" alt="" title="" />
								</div>
							</div>
							<div class="ml-6 mt-3">
								<Vmbtn />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-12 col-sm-12 push title__block">
				<h3 class="mbr-section-subtitle mbr-semibold mbr-fonts-style display-4">ABOUT US</h3>
				<h2 class="mbr-section-title mbr-bold mbr-fonts-style display-5">The Felicity</h2>
				<p class="mbr-text mbr-fonts-style display-4">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex accusamus sunt, amet tempore
					omnis ullam molestiae eos reprehenderit vitae rem.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.new_content__block .mbr-section-title{
		width:100vw;
	}
	
	@media screen and (max-width: 600px) {
		.minwidth .btn-vw{
			width:80vw;
		}
		.new_content__block {
			display: flex;
			width: 100vw;
		}
		.new_group__content {
			display: flex;
			width: 100vw;
			padding-left: 5%;
			/* padding-top: 5%; */
		}
		.new_parallax__image {
			padding-top: 5%;
			border-radius: 20%;
		}
		.minwidth .mbr-section-title{
			font-size:30px;
		}
		.minwidth .mbr-text{
			font-size:15px;
		}
	}
	@media screen and (min-width: 600px) and (max-width: 768px) {
		.minwidth .btn-vw{
			width:80vw;
		}
		.new_content__block {
			display: flex;
			width: 100vw;
		}
		.new_group__content {
			display: flex;
			width: 86vw;
			padding-left: 5%;
			/* padding-top: 5%; */
		}
		.new_parallax__image {
			padding-top: 5%;
			border-radius: 20%;
		}
	}
	@media screen and (min-width: 768px) and (max-width: 853px) {
		.minwidth .btn-vw{
			width:80vw;
		}
		.new_content__block {
			display: flex;
			width: 100vw;
		}
		.new_group__content {
			display: flex;
			width: 86vw;
			padding-left: 5%;
			/* padding-top: 5%; */
		}
		.new_parallax__image {
			padding-top: 5%;
			border-radius: 20%;
		}
	}
	@media screen and (min-width: 853px) and (max-width: 911px) {
		.minwidth .btn-vw{
			width:75vw;
		}
		.new_content__block {
			display: flex;
			width: 100vw;
		}
		.new_group__content {
			display: flex;
			width: 80vw;
			padding-left: 5%;
			/* padding-top: 5%; */
		}
		.new_parallax__image {
			padding-top: 5%;
			border-radius: 20%;
		}
	}
	@media screen and (min-width: 912px) and (max-width: 912px) {
		.minwidth .btn-vw{
			width:75vw;
		}
		.new_content__block {
			display: flex;
			width: 100vw;
		}
		.new_group__content {
			display: flex;
			width: 80vw;
			padding-left: 5%;
			/* padding-top: 5%; */
		}
		.new_parallax__image {
			padding-top: 5%;
			border-radius: 20%;
		}
	}
	@media screen and (min-width: 913px) and (max-width: 920px) {
		.minwidth .btn-vw{
			width:75vw;
		}
		.new_content__block {
			display: flex;
			width: 100vw;
		}
		.new_group__content {
			display: flex;
			width: 77vw;
			padding-left: 5%;
			/* padding-top: 5%; */
		}
		.new_parallax__image {
			padding-top: 5%;
			border-radius: 20%;
		}
	}
	@media screen and (max-width: 991px) and (min-width:920px) {
		.minwidth .btn-vw{
			width:70vw;
		}
		.new_content__block {
			display: flex;
			width: 100vw;
		}
		.new_group__content {
			display: flex;
			width: 75vw;
			padding-left: 5%;
			/* padding-top: 5%; */
		}
		.new_parallax__image {
			padding-top: 5%;
			border-radius: 20%;
		}
	}
	@media screen and (min-width:1024px)
	{
		.in-between{
			display:none;
		}
	}
	@media screen and (max-width:991px)
	{
		.in-between{
			display: none;
		}
	}
	@media screen and (min-width:992px) and (max-width:1023px){
		.new_content__block {
			display: flex;
			width: 100vw;
		}
		.new_group__content {
			display: flex;
			width: 70vw;
			padding-left: 5%;
			/* padding-top: 5%; */
		}
		.new_parallax__image {
			padding-top: 5%;
			border-radius: 20%;
		}
		.in-between .mbr-section-title{
			width:100vw;
		}
	}
</style>
