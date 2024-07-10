<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import stc from 'string-to-color';
	import { modeCurrent } from '@skeletonlabs/skeleton';

	var calendarEl;
	export let data: PageData;
	let color: string;

	$: {
		if ($modeCurrent == false) {
			color = '#120b18';
		} else {
			color = 'snow';
		}
	}

	function convertTZ(date: Date | string, tzString: string = 'Asia/Kolkata') {
		return new Date(
			(typeof date === 'string' ? new Date(date) : date).toLocaleString('en-US', {
				timeZone: tzString
			})
		);
	}

	function eventDataTransform(event: any) {
		return {
			id: event._id,
			title: event.name,
			start: convertTZ(event.datetimeperiod[0]),
			end: convertTZ(event.datetimeperiod[1]),
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
				views: {
					dayGridMonth: {
						dayMaxEvents: 10,
					}
				},
				dayMaxEvents: true,
				events: data.page_server_data,
				eventDataTransform: eventDataTransform,
				eventClick: function(event: any) {
					if (event.event.url) {
						event.jsEvent.preventDefault();
						window.open(event.event.url, '_blank');
					}
				}
			});
			calendar.render();
		}
	});
</script>

<div
	class="container h-full w-full mx-auto flex justify-center items-center flex-col"
	style="margin-top:10vh;padding-bottom:15vh;"
>
	<div class="text-center flex flex-col items-center" style="padding-top:2%;padding-bottom:2%;">
		<br />
		<h2 class="h2">Calendar</h2>
	</div>
	<div id="calendar" class="calendar" style={`background-color: ${color}`}></div>
	<br />
</div>

<style lang="postcss">
	.calendar {
		width: 100%;
		height: 100%;
	}
</style>
