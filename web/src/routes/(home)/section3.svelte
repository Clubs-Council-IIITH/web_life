<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	let event_data = data.page_server_data['events'];

	function getPlaceholder({
		seed,
		w = 640,
		h = 480,
		blur = 1,
	}: {
		seed: string;
		w?: number;
		h?: number;
		blur?: number;
	}): string {
		const encodedSeed = btoa(seed);
		return `https://picsum.photos/seed/${encodedSeed}/${w}/${h}?blur=${blur}`;
	}
</script>

<svelte:head>
	{#each event_data as event}
		<link rel="preload" href={event.image} as="image">
		{#if event.club_logo}
			<link rel="preload" href={event.club_logo} as="image">
		{:else}
			<link rel="preload" href={getPlaceholder({ seed: event.club_name })} as="image">
		{/if}
	{/each}
</svelte:head>

<section class="features12 cid-rRIizpy8Kq" id="features12-9">
	<div class="container">
		<div class="row">
			<div class="col-lg-4 col-md-6 wrap">
				<h3 class="mbr-section-subtitle mbr-semibold mbr-fonts-style display-4">Recent</h3>
				<h2 class="mbr-section-title mbr-bold mbr-fonts-style display-5">Events &amp; News</h2>
				<p class="mbr-text mbr-fonts-style display-4">
					Our college is awash with events that cater to a diverse range of interests and passions.
					From academic seminars that delve deep into cutting-edge research to vibrant cultural
					festivals, there is never a lull. With a calendar brimming with a host of myriad
					opportunities and with students and faculty excelling in their respective fields, here are
					some of the highlights from our recent endeavours….
				</p>
			</div>
			{#each event_data as event}
				<div class="col-lg-4 col-md-6 wrap">
					<div class="card__wrap text-white">
						<div class="image">
							<img src={event.image || getPlaceholder({ seed: event.club_name })} alt="" title="" />
						</div>
						<div class="card__post">
							<div class="image__post">
								<img src={event.club_logo || getPlaceholder({ seed: event.club_name })} alt="" />
							</div>
							<div class="author__post">
								<p class="author mbr-fonts-style display-4">
									Posted by <strong>{event.club_name}</strong>
								</p>
								<p class="date mbr-fonts-style display-4">Date: {event.date}</p>
							</div>
						</div>
						<div class="card__content">
							<h3 class="content__title mbr-bold mbr-fonts-style display-7">
								{event.name}
							</h3>
						</div>
					</div>
				</div>
			{/each}
			<div class="col-lg-4 col-md-6 wrap">
				<a href="https://clubs.iiit.ac.in/events?upcoming=true&completed=true" target="_blank">
					<div class="card__wrap text-white">
						<div class="image">
							<img src="https://placehold.co/600x400?text=See+More" alt="" title="" />
						</div>
						<div class="card__content">
							<h3 class="content__title mbr-bold mbr-fonts-style display-7">
								Click here to see more.
							</h3>
						</div>
					</div>
				</a>
			</div>
		</div>
	</div>
</section>
