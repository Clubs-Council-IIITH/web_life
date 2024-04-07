<script lang="ts">
	import { base } from '$app/paths';
	import Carousel from '$lib/carousel/Carousel.svelte';

	let images = [
		{
			'title': 'Life at IIIT',
			'desc': 'Eat. Sleep. Code? Not Quite.',
			'alt': '',
			'src': '',
		},
		{
			'title': 'Clubs at IIIT',
			'desc': 'Explore your student life beyond the classroom.',
			'alt': '',
			'src': '',
		},
		{
			'title': 'Unrestricted Fun!',
			'desc': 'Join in on fun events!',
			'alt': '',
			'src': '',
		},
		{
			'title': 'Connect IIIT',
			'desc': 'Come together to learn, work, live and play.',
			'alt': '',
			'src': '',
		},
		{
			'title': 'Success Stories',
			'desc': 'Witness legends in the making.',
			'alt': '',
			'src': '',
		},
		{
			'title': 'Experience IIIT',
			'desc': 'Expand your mind, explore your passion.',
			'alt': '',
			'src': '',
		},
		{
			'title': 'Challengers',
			'desc': 'Up the potential for fun.',
			'alt': '',
			'src': '',
		},
		{
			'title': 'Perform together',
			'desc': 'Let the beat take over.',
			'alt': '',
			'src': '',
		},
		{
			'title': 'Artistry',
			'desc': 'Unleash your creativity.',
			'alt': '',
			'src': '',
		},
		{
			'title': 'Campus Life',
			'desc': 'A vibrant residential community.',
			'alt': '',
			'src': '',
		}
	]
	for(let i = 0; i < images.length; i++){
		images[i]['src'] = `${base}/carousel/${i + 1}.jpg`;
		images[i]['alt'] = 'iiit-h-carousek';
	}
	
</script>

<div class="container h-full mx-auto justify-center items-center">
	<div class="text-center flex flex-col items-center">
		<br />
		<h2 class="h2">Welcome to Life@IIIT-H</h2>
		<br />
	</div>
	<Carousel {images} duration={3000}>
	</Carousel>
</div>

