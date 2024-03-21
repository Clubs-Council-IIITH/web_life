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
	{/key}
{/if}
