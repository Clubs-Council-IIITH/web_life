<script lang="ts">
	import type { PageData } from './$types';
	import { Avatar } from '@skeletonlabs/skeleton';
	let currentVariant = 'bg-initial';

	export let data: PageData;
</script>

<!-- <pre>{JSON.stringify(data.page_server_data, null, 2)}</pre> -->
<div class="container h-full w-full mx-auto flex justify-center items-center flex-col">
	<div class="text-center flex flex-col items-center">
		<h2 class="h2">Student Bodies</h2>
	</div>
	<div class="card-grid">
		{#each data.page_server_data.clubs as studentbody}
			<a
				class="card {currentVariant} card-hover overflow-hidden size"
				href={'https://clubs.iiit.ac.in/student-bodies/' + studentbody.cid}
				target="_blank"
			>
				<header>
					<img src={studentbody.banner} class="bg-black/50 w-full aspect-[21/9]" alt="Post" />
				</header>
				<div class="p-4 space-y-4">
					<h3 class="h3" data-toc-ignore>{studentbody.name}</h3>
					<article>
						<p>
							<!-- cspell:disable -->
							{#if studentbody.tagline != null}
								{studentbody.tagline}
							{/if}
							<!-- cspell:enable -->
						</p>
					</article>
				</div>
				<hr class="opacity-50" />
				<Avatar src={studentbody.logo} width="w-8" />
			</a>
		{/each}
	</div>
</div>

<style lang="postcss">
	.size {
		width: 300px;
		height: 500px;
	}
	.card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 100px;
		width: 100%;
	}
</style>
