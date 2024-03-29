<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	let carousel: HTMLElement;
	let currentIndex = 0;
	let direction = 1;

	onMount(() => {
		const intervalId = setInterval(() => {
			if (currentIndex === carousel.children.length - 1) {
				direction = -1; // Change direction to backward
			} else if (currentIndex === 0) {
				direction = 1; // Change direction to forward
			}

			currentIndex = currentIndex + direction;
			carousel.children[currentIndex].scrollIntoView({ behavior: 'smooth' });
		}, 6000); // Change the interval as needed
		carousel.addEventListener('wheel', (event) => {
			event.preventDefault();
			}, { passive: false });
		return () => clearInterval(intervalId); // Clear the interval when the component is destroyed
	});
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="text-center flex flex-col items-center">
		<br />
		<h2 class="h2">Welcome to Life@IIIT-H</h2>
		<br />

		<div
			bind:this={carousel}
			class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto carousel"
		>
			{#each Array.from({ length: 8 }) as _, i}
				<div class="snap-align-start shrink-0 card text-center carousel-content">
					<img src="{base}/carousel/{i+1}.jpg" alt="iiit-h" class="carousel-image" draggable="false"/>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	.carousel {
		width: 85vw;
		height: 65vh;
		scroll-snap-type: x mandatory;
	}
	.carousel-content {
		scroll-snap-align: start;
		width: 100%;
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
</style>
