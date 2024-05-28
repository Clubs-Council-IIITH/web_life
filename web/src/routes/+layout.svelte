<script lang="ts">
	import '../app.postcss';
	import { base } from '$app/paths';
	import {
		initializeStores,
		AppShell,
		AppBar,
		LightSwitch,
		Drawer,
		getDrawerStore,
		modeCurrent
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
	import { page } from '$app/stores';
	let current_page = $page.url.pathname;
	
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	//For Navigation Bar
	initializeStores();
	const drawerStore = getDrawerStore();
	function drawerOpen() {
		drawerStore.open({});
	}

	//For Inverted Logos
	let imgSrc: any;
	let footerImgSrc: any;

	$: {
		if ($modeCurrent == false) {
			imgSrc = `${base}/life-iiit-white.png`;
			footerImgSrc = `${base}/iiit-logo-white.png`;
		} else {
			imgSrc = `${base}/life-iiit.png`;
			footerImgSrc = `${base}/iiith_logo.png`;
		}
	}

	//Current Year
	let currentYear = new Date().getFullYear();
</script>

<!-- App Shell -->
<Drawer>
	<h2 class="p-4 navclass">Navigation</h2>
	<hr />
	<Navigation />
</Drawer>
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<div class="bottom">
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
							<li>
								<a class="btn btn-sm variant-ghost-surface" href="/supervisory-bodies">
									Supervisory Bodies
								</a>
							</li>
							<li>
								<a class="btn btn-sm variant-ghost-surface" href="/student-bodies">Student Bodies</a
								>
							</li>
							<li><a class="btn btn-sm variant-ghost-surface" href="/gallery"> Gallery </a></li>
							<li><a class="btn btn-sm variant-ghost-surface" href="/calendar"> Calendar </a></li>
							<li style="padding-top:2%;"><LightSwitch /></li>
						</ul>
					</div>
				</svelte:fragment>
			</AppBar>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="pageFooter">
		<div class="footer">
			<hr />
			<br />
			<div class="footer-images">
				<img src={footerImgSrc} alt="IIIT Hyderabad Logo" class="h-12 logo" />
				<img src={imgSrc} alt="Life@IIIT Hyderabad Logo" class="h-12 logo" />
			</div>
			<br />
			<div class="footer-social" style="color: {$modeCurrent ? 'black' : 'white'}">
				<a href="https://iiit.ac.in/" target="_blank">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="25px"
						height="25px"
						viewBox="0 0 24 24"
						{...$$props}
					>
						<path
							fill="currentColor"
							d="M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.92 7.92 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.7 15.7 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
						/>
					</svg>
				</a>
				<a href="https://www.facebook.com/IIITH/" target="_blank">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="25px"
						height="25px"
						viewBox="0 0 24 24"
						{...$$props}
					>
						<path
							fill="currentColor"
							d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02"
						/>
					</svg>
				</a>
				<a href="https://www.instagram.com/iiit.hyderabad/" target="_blank">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="25px"
						height="25px"
						viewBox="0 0 24 24"
						{...$$props}
					>
						<path
							fill="currentColor"
							d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
						/>
					</svg>
				</a>
				<a href="https://www.linkedin.com/school/iiithofficial/" target="_blank">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="25px"
						height="25px"
						viewBox="0 0 24 24"
						{...$$props}
					>
						<path
							fill="currentColor"
							d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
						/>
					</svg>
				</a>
			</div>
			<br />
			<ul class="inline-list-footer" style="color: {$modeCurrent ? 'black' : 'white'}">
				<li>
					<p>
						Developed & Maintained with ❤️ by <a
							href="https://clubs.iiit.ac.in/about/clubs-council/tech-members"
							target="_blank">SLC Tech Team</a
						> (powered by Clubs Council)
					</p>
				</li>
			</ul>
			<br />
			<div class="footer_bottom" style="color: {$modeCurrent ? 'black' : 'white'}">
				<p>
					<a href="https://www.iiit.ac.in/privacy-policy/" target="_blank"><b>Privacy Policy</b></a>
				</p>
				<p>
					©{currentYear}, IIIT Hyderabad
				</p>
				<p>
					<a href="https://clubs.iiit.ac.in/bug-report"><b>Report Bugs</b></a>
				</p>
			</div>
		</div>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>

<style lange="postcss">
	hr {
		border: none;
		height: 2px;
		background-color: #333;
	}
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
		gap: 10px;
	}
	.footer-images {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 30px;
	}
	.footer-social {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 15px;
	}
	.footer_bottom {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: nowrap;
		padding: 0 1em;
	}
	a:hover {
		text-decoration: underline;
	}
	.footer {
		background-color: var(--surface);
		color: var(--on-surface);
		padding: 20px;
		padding-top: 0px;
	}
	@media (max-width: 1024px) {
		.inline-list {
			display: none;
		}
	}
</style>
