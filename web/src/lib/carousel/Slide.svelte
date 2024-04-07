<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';
	import { fly, type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import type { State } from './Carousel.svelte';
	interface ExtendedImgAttributes extends HTMLImgAttributes {
		desc?: string;
		title?: string;
	}

	const state = getContext<Writable<State>>('state');

	type TransitionFunc = (node: HTMLElement, params: any) => TransitionConfig;

	export let image: ExtendedImgAttributes;
	export let transition: TransitionFunc | null = null; // Optional transition function, overrides default slide transition

	$: transitionSlideIn = {
		x: $state.forward ? '100%' : '-100%',
		opacity: 1,
		width: '100%',
		height: '100%',
		duration: $state.slideDuration
	};

	$: transitionSlideOut = {
		x: $state.forward ? '-100%' : '100%',
		opacity: 0.9,
		width: '100%',
		height: '100%',
		duration: $state.slideDuration
	};

	$: imgClass = twMerge('absolute block !w-full h-full object-cover', $$props.class);
</script>

{#if transition}
	{#key image}
		<div>
			<img alt="..." {...image} transition:transition={{}} {...$$restProps} class={imgClass} />
		</div>
	{/key}
{:else}
	{#key image}
			<img
				alt="..."
				{...image}
				{...$$restProps}
				out:fly={transitionSlideOut}
				in:fly={transitionSlideIn}
				class={imgClass}
			/>
			<div class="text-block">
				<h4>{image.title}</h4>
				<p>{image.desc}</p>
			</div>
	{/key}
{/if}

<style lang="postcss">
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
</style>
