<!-- Features12.svelte -->
<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	let event_data = data.page_server_data['events'].slice(0,4);
	// console.log(event_data)
</script>
<section class="features12 cid-rRIizpy8Kq" id="features12-9">
	<div class="container">
		<div class="row">
			<div class="col-lg-4 col-md-6 wrap">
				<h3 class="mbr-section-subtitle mbr-semibold mbr-fonts-style display-4">NEWS</h3>
				<h2 class="mbr-section-title mbr-bold mbr-fonts-style display-5">Events &amp; News</h2>
				<p class="mbr-text mbr-fonts-style display-4">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit sed temporibus voluptatum
					minus ipsa blanditiis doloremque odio, maiores consectetur omnis doloribus quo incidunt
					dolore autem, modi officiis a! Praesentium, tempora.
				</p>
			</div>
			{#each event_data as event}
				<div class="col-lg-4 col-md-6 wrap">
					<div class="card__wrap text-white">
						<div class="image">
							<img src={event.image} alt="" title="" />
						</div>
						<div class="card__post">
							<div class="image__post">
								<img
									src={event.club_logo}
									alt=""
								/>
							</div>
							<div class="author__post">
								<p class="author mbr-fonts-style display-4">Posted by <strong>{event.clubid}</strong></p>
								<p class="date mbr-fonts-style display-4">Date: {event.date}</p>
							</div>
						</div>
						<div class="card__content">
							<!-- <div class="card__topic">
								<span class="category__content mbr-medium  mbr-fonts-style display-4">Holidays</span>
								<span class="circle"></span>
								<span class="category__estimate mbr-medium  mbr-fonts-style display-4">6 min read</span>
							</div> -->
							<h3 class="content__title mbr-bold mbr-fonts-style display-7">
								{event.name}
							</h3>
							<!-- <div class="mbr-section-btn2"><a class="btn btn-white-outline display-4" href="#">Show All<span class="fa-long-arrow-right fa mbr-iconfont mbr-iconfont-btn"></span></a></div> -->
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
