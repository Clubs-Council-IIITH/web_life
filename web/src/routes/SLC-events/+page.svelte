<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	let event_data = data.page_server_data['events'];
</script>

<svelte:head>
	{#each event_data as event}
		<link rel="preload" href={event.image} as="image" />
		<link rel="preload" href={event.club_logo} as="image" />
	{/each}
</svelte:head>

<section class="features12 cid-rRIizpy8Kq" id="features12-9" style="margin-top:8vh;">
	<div class="container">
		<div class="row">
			{#each event_data as event}
				<div class="col-lg-4 col-md-6 wrap">
					<div class="flip-card">
						<div class="flip-card-inner">
							<div class="flip-card-front">
								<h5 class="view-mobile">
									<span class="view-details-btn">View Details</span>
								</h5>
								<img src={event.image} alt="" title="" />
								<h2 class="content__title mbr-bold mbr-fonts-style display-7">
									{event.name}
								</h2>
							</div>
							<div class="flip-card-back">
								<div class="card__content">
									<p class="content__text mbr-fonts-style display-4 overflow-hidden">
										{!event.description ? 'No description given' : ''}
										{event.description.split(' ').slice(0, 100).join(' ')}
										{event.description.split(' ').length > 100 ? '...' : ''}
									</p>
								</div>
								<div class="card__post" style="opacity: 1;">
									<!-- <div class="image__post">
										<img src={event.club_logo} alt="" />
									</div> -->
									<div class="author__post w-100">
										<p class="author mbr-fonts-style display-4">
											Location: <strong>{event.location != '' ? event.location : 'N/A'}</strong>
										</p>
										<p class="date mbr-fonts-style display-4">Date: {event.date}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="postcss">
	.flip-card {
		background-color: transparent;
		width: 100%;
		height: 100%;
		perspective: 1000px;
	}

	.flip-card-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.6s;
		transform-style: preserve-3d;
	}

	.flip-card:hover .flip-card-inner {
		transform: rotateY(180deg);
	}

	.flip-card-front,
	.flip-card-back {
		width: 100%;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}

	.flip-card-front {
		background-color: #bbb;
		height: 100%;
		color: black;
	}

	.flip-card-back {
		background-color: rgb(var(--color-primary-500));
		color: white;
		transform: rotateY(180deg);
	}

	.flip-card img {
		width: 100%;
		height: 100%;
		aspect-ratio: 1/1;
		object-fit: cover;
	}

	.flip-card-front .content__title {
		position: absolute;
		bottom: 10px;
		left: 10px;
		color: white;
		background: rgba(0, 0, 0, 0.5);
		padding: 5px;
		border-radius: 5px;
	}

	.flip-card-back {
		display: flex;
		position: absolute;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		top: 0;
	}

	.card__content {
		padding: 20px;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.card__post {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 20px;
	}
	.view-mobile{
		position: absolute;
		width: 100%;
		padding: 10px;
		color: white;
	}

	.view-details-btn{
		display: none;
		background: rgba(0, 0, 0, 0.5);
		padding: 5px;
		width: max-content;
		float: right;
		border-radius: 5px;
	}

	@media only screen and (max-width: 600px) {
		.view-details-btn{
			display: block;
		}
	}
</style>
