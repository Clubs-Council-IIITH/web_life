<!-- Features6.svelte -->

<script>
	import Grid from 'svelte-grid-responsive';
	import { base } from '$app/paths';
	import { size } from '@floating-ui/dom';

	let images = [];
	for (let i = 1; i < 53; i++) {
		images.push({
			src: `${base}/gallery/${i + 1}.jpg`,
			alt: `Image ${i + 1} of IIIT-H`,
			draggable: false
		});
	}

	// Shuffle the images
	images.sort(() => Math.random() - 0.5);
</script>

<svelte:head>
	{#each images.slice(0, 20) as image}
		<link rel="preload" href={image.src} as="image">
	{/each}
</svelte:head>

<section class="features6 cid-rRIjJzt6Us" id="features6-h" style="margin-top:10vh;">
	<div class="center">
		<center><h2 class="mbr-section-title mbr-bold mbr-fonts-style display-5">Gallery</h2></center>
	</div>
	<div class="mx-4 mb-5">
		<Grid container gutter={20}>
			{#each images as image}
				<Grid xs={12} md={6} lg={4}>
					<div class="parallax__image">
						<div class="image">
							<img src={image.src} alt={image.alt} title="" />
						</div>
					</div>
				</Grid>
			{/each}
		</Grid>
	</div>
</section>

<style>
	@media screen and (max-width:1280px){
	.center .mbr-section-title{
		padding-top: 3vh;
		padding-bottom:1vh;
	}
}
</style>
