<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import Carousel from '$lib/carousel/Carousel.svelte';
	import type { HTMLImgAttributes } from 'svelte/elements';
	interface ExtendedImgAttributes extends HTMLImgAttributes {
		desc?: string;
		title?: string;
	}
	import Header4 from './section1.svelte'
	import Features6 from './section2.svelte'
	import Features12 from './section3.svelte'
	// let carousel: HTMLElement;
	// let currentIndex = 0;
	// let direction = 1;

	// onMount(() => {
	// 	const intervalId = setInterval(() => {
	// 		if (currentIndex === carousel.children.length - 1) {
	// 			direction = -1; // Change direction to backward
	// 		} else if (currentIndex === 0) {
	// 			direction = 1; // Change direction to forward
	// 		}

	// 		currentIndex = currentIndex + direction;
	// 		carousel.children[currentIndex].scrollIntoView({ behavior: 'smooth' });
	// 	}, 6000); // Change the interval as needed
	// 	carousel.addEventListener(
	// 		'wheel',
	// 		(event) => {
	// 			event.preventDefault();
	// 		},
	// 		{ passive: false }
	// 	);
	// 	return () => clearInterval(intervalId); // Clear the interval when the component is destroyed
	// });

	let description = [
		{
			'title': 'Life at IIIT',
			'desc': 'Eat. Sleep. Code? Not Quite.'
		},
		{
			'title': 'Clubs at IIIT',
			'desc': 'Explore your student life beyond the classroom.'
		},
		{
			'title': 'Unrestricted Fun!',
			'desc': 'Join in on fun events!'
		},
		{
			'title': 'Connect IIIT',
			'desc': 'Come together to learn, work, live and play.'
		},
		{
			'title': 'Success Stories',
			'desc': 'Witness legends in the making.'
		},
		{
			'title': 'Experience IIIT',
			'desc': 'Expand your mind, explore your passion.'
		},
		{
			'title': 'Challengers',
			'desc': 'Up the potential for fun.'
		},
		{
			'title': 'Perform together',
			'desc': 'Let the beat take over.'
		},
		{
			'title': 'Artistry',
			'desc': 'Unleash your creativity.'
		},
		{
			'title': 'Campus Life',
			'desc': 'A vibrant residential community.'
		}
	]
	let images: ExtendedImgAttributes[] = [];
	for(let i = 0; i < description.length; i++) {
		images.push({
			src: `${base}/carousel/${i + 1}.jpg`,
			alt: 'iiit-h',
			draggable: false,
			desc: description[i].desc,
			title: description[i].title
		});
	}
</script>

<!-- <div class="container h-full mx-auto justify-center items-center">
	<div class="text-center flex flex-col items-center">
		<br />
		<h2 class="h2">Welcome to Life@IIIT-H</h2>
		<br /> -->
		<Header4/>
		<br/>
		<br/>
		<Features6/>
		<br/>
		<br/>
		<Features12/>
		<!-- <div
			bind:this={carousel}
			class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto carousel"
		>
			{#each Array.from({ length: 8 }) as _, i}
				<div class="snap-align-start shrink-0 card text-center carousel-content">
					<img
						src="{base}/carousel/{i + 1}.jpg"
						alt="iiit-h"
						class="carousel-image"
						draggable="false"
					/>
					<div class="text-block">
						<h4>{description[i].title}</h4>
						<p>{description[i].desc}</p>
					</div>
				</div>
			{/each}
		</div> -->
	<!-- </div> -->
	<!-- <Carousel {images} duration={3000}>
	</Carousel> -->
<!-- </div> -->

<!-- <style lang="postcss">
	.carousel {
		width: 85vw;
		height: 65vh;
		scroll-snap-type: x mandatory;
		border-radius: 20px;
	}
	.carousel-content {
		scroll-snap-align: start;
		width: 100%;
		position: relative;
	}
	.carousel-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.snap-x {
		scrollbar-width: none; /* For Firefox */
		-ms-overflow-style: none; /* For Internet Explorer and Edge */
	}
	.snap-x::-webkit-scrollbar {
		display: none; /* For Chrome, Safari and Opera */
	}
	.text-block {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-start;
		padding: 20px;
		text-align: left;
	}
	.text-block h4 {
		font-size: 1.5rem;
		font-weight: 700;
	}
</style> -->
