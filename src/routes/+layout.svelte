<script lang="ts">
	import '../app.postcss';
	import { base } from '$app/paths'
	import {
		initializeStores,
		AppShell,
		AppBar,
		LightSwitch,
		Drawer,
		getDrawerStore,
		modeCurrent,
	} from '@skeletonlabs/skeleton';
	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import Navigation from '$lib/Navigation/Navigation.svelte';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	
	//For Navigation Bar
	initializeStores();
	const drawerStore = getDrawerStore();
	function drawerOpen() {
		drawerStore.open({});
	}	
	//For Inverted Logos
	let imgSrc: any;
	$: {
        if($modeCurrent == false){
            console.log('Dark Mode')
            imgSrc = `${base}/life-iiit-inverted.png`;
        }
        else{
            console.log('Light Mode')
            imgSrc = `${base}/life-iiit.png`;
        }
    }

</script>

<!-- App Shell -->
<Drawer>
	<h2 class="p-4">Navigation</h2>
	<hr />
	<Navigation />
</Drawer>
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
					<span>
						<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
							<rect width="100" height="20" />
							<rect y="30" width="100" height="20" />
							<rect y="60" width="100" height="20" />
						</svg>
					</span>
				</button>
				<img src={imgSrc} alt="IIIT Hyderabad Logo" class="h-12 logo" />

			</svelte:fragment>
			<script>
			</script>
			<svelte:fragment slot="trail">
				<div>
					<ul class="inline-list">
						<li><a class="btn btn-sm variant-ghost-surface" href="/"> Home </a></li>
						<li><a class="btn btn-sm variant-ghost-surface" href="/committee"> Committee </a></li>
						<li>
							<a class="btn btn-sm variant-ghost-surface" href="/student-bodies">Student Bodies</a>
						</li>
						<li><a class="btn btn-sm variant-ghost-surface" href="/calendar"> Calendar </a></li>
						<li><LightSwitch /></li>
					</ul>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="pageFooter">
		<div>
			<style lang="postcss">
			</style>

			<ul class="inline-list-footer">
				<li><p>© 2021-2024, IIIT Hyderabad</p></li>
				<li>
					<p>Made Developed & Maintained with ❤️ by SLC Tech Team (powered by Clubs Council)</p>
				</li>
			</ul>
		</div>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>

<style lange="postcss">
	.inline-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		gap: 10px;
	}
	.inline-list li {
		display: inline;
	}

	.inline-list-footer {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		text-align: center;
	}
	@media (max-width: 1024px) {
		.inline-list {
			display: none;
		}
	}
</style>
