<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import stc from 'string-to-color';
	import { modeCurrent } from '@skeletonlabs/skeleton';
	import tippy from 'tippy.js';
	import 'tippy.js/dist/tippy.css'; // Optional for styling

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

	function eventDataTransform(event: any) {
		return {
			id: event._id,
			title: event.name,
			start: new Date(event.datetimeperiod[0]),
			end: new Date(event.datetimeperiod[1]),
			backgroundColor: stc(event.clubid),
			url: `https://clubs.iiit.ac.in/events/${event._id}`,
			display: 'block',
			clubid: event.clubid
		};
	}

	function handleEventMouseEnter(info: any) {
		const { event, el } = info;
		const clubName = data.page_server_data.clubdata.find(
			(club) => club.cid === event.extendedProps.clubid
		)?.name;
		tippy(el, {
			content: `<strong>${event.title}</strong> by ${clubName ? clubName : event.extendedProps.clubid}`,
			allowHTML: true,
			placement: 'top'
		});
	}

	onMount(async () => {
		calendarEl = document.getElementById('calendar');
		if (calendarEl) {
			// @ts-ignore
			var calendar = new FullCalendar.Calendar(calendarEl, {
				initialView: 'dayGridMonth',
				views: {
					dayGridMonth: {
						dayMaxEvents: 10
					}
				},
				dayMaxEvents: true,
				events: data.page_server_data.events,
				eventDataTransform: eventDataTransform,
				eventMouseEnter: handleEventMouseEnter,
				eventClick: function (event: any) {
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
