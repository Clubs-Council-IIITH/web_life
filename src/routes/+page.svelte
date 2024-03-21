<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	let elemCarousel: HTMLDivElement;
	import { base } from '$app/paths';
	import Fa from 'svelte-fa';
	import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
	function carouselLeft(): void {
		const x =
			elemCarousel.scrollLeft === 0
				? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
				: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
		elemCarousel.scroll(x, 0);
	}
	function carouselRight(): void {
		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop
				: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
		elemCarousel.scroll(x, 0);
	}
	let intervalId: number;
	onMount(() => {
		intervalId = window.setInterval(carouselRight, 8000);
	});

	onDestroy(() => {
		clearInterval(intervalId); // Clear interval when component is destroyed
	});
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="text-center flex flex-col items-center">
		<h2 class="h2">Welcome to Life@IIIT-H</h2>
		<div class="grid grid-cols-[auto_1fr_auto] gap-4 items-center">
			<!-- Button: Left -->
			<button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
				<Fa icon={faArrowLeft} />
			</button>
			<!-- Full Images -->
			<div
				bind:this={elemCarousel}
				class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto"
			>
				{#each Array.from({ length: 12 }, (_, i) => i + 1) as photo}
					<img
						class="snap-center w-[1024px] rounded-container-token"
						src={`${base}/carousel/${photo}.jpg`}
						alt={`carousel-${photo}`}
						loading="lazy"
					/>
				{/each}
			</div>
			<!-- Button: Right -->
			<button type="button" class="btn-icon variant-filled" on:click={carouselRight}>
				<Fa icon={faArrowRight} />
			</button>
		</div>
	</div>
</div>

<style lang="postcss">
	.snap-x {
		scrollbar-width: none; /* For Firefox */
		-ms-overflow-style: none; /* For Internet Explorer and Edge */
	}
	.snap-x::-webkit-scrollbar {
		display: none; /* For Chrome, Safari and Opera */
	}
</style>
