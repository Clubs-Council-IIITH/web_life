<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import stc from 'string-to-color';

	var calendarEl;
	export let data: PageData;

	function eventDataTransform(event: any) {
		return {
			id: event._id,
			title: event.name,
			start: new Date(event.datetimeperiod[0]),
			end: new Date(event.datetimeperiod[1]),
			backgroundColor: stc(event.clubid),
			url: `https://clubs.iiit.ac.in/events/${event._id}`,
			display: 'block'
		};
	}

	onMount(async () => {
		calendarEl = document.getElementById('calendar');
		if (calendarEl) {
			// @ts-ignore
			var calendar = new FullCalendar.Calendar(calendarEl, {
				initialView: 'dayGridMonth',
				dayMaxEvents: true,
				events: data.page_server_data,
				eventDataTransform: eventDataTransform
			});
			calendar.render();
		}
	});
</script>

<div class="container h-full w-full mx-auto flex justify-center items-center flex-col">
	<div class="text-center flex flex-col items-center">
		<br/>
		<h2 class="h2">Events</h2>
	</div>
	<div id="calendar" class="calendar"></div>
	<br />
</div>

<style lang="postcss">
	.calendar {
		width: 100%;
		height: 100%;
	}
</style>
