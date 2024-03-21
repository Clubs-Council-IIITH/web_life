<script lang="ts">
	import type { PageData } from './$types';
	// let currentVariant = 'bg-initial';

	export let data: PageData;
</script>

<svelte:head>
	{#each data.page_server_data.clubs as image}
		<link rel="preload" href={image.logo} as="image">
		<link rel="preload" href={image.banner} as="image">
	{/each}
</svelte:head>

<div class="container h-full w-full mx-auto flex justify-center items-center flex-col" style="margin-top:8vh; padding-bottom:5vh;">
	<br />
	<div class="text-center flex flex-col items-center" style="padding-top:3vh;padding-bottom:2vh;">
		<h2 class="h2">Student Bodies</h2>
	</div>
	<br />
	<p class="mx-4" style="padding-bottom:3vh">
		IIIT -H is difficult, but rewarding and it is our deepest desire to set our student leaders, as
		well as current and future groups up for success. The student bodies at IIIT Hyderabad are run
		by the students, for the students. While the Parliament represents the student community and
		liaises with the administration, the Entrepreneurship Cell fosters innovation and business
		acumen. There are also support groups dedicated to ensure student well-being. The Campus Life
		Council, Cultural Council, NSS, the Sports Council and the Clubs Council ensure the smooth
		execution of cultural and sporting events, community outreach, etc providing platforms for
		personal growth and in turn creating a rich and engaging campus life.
	</p>
	<br />
	<div class="mx-4" style="padding-bottom:3%;">
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{#each data.page_server_data.clubs as studentbody}
				<a href={studentbody.redirectURL} target="_blank" class="block">
					<div
						class="relative h-64 overflow-hiden rounded-lg hover:shadow-xl hover:scale-105 transition duration-300"
					>
						<img class="rounded-lg object-cover w-full h-full" src={studentbody.banner} alt="" />
						<div
							class="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-70"
						></div>
						<div class="absolute bottom-4 left-4 text-white z-10 flex items-center" style="z-index:0;">
							<img
								class="w-10 h-10 rounded-full object-cover border-white border-2"
								src={studentbody.logo}
								alt="Club Logo"
							/>
							<div class="ml-2">
								<h3 class="font-bold mr-2">{studentbody.name}</h3>
								{#if studentbody.tagline}
									<p class="mr-2">{studentbody.tagline}</p>
								{/if}
							</div>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>

	<br />
</div>

<style lang="postcss">
	/* @import '../../../static/styles/style.css'; */
	.h2{
		font-family: 'Georgia Bold';
		font-weight: normal;
		font-size: 42px;
		line-height: 50px;
	}
</style>
