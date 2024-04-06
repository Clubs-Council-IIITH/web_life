<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	var calendarEl;
	export let data: PageData;
	onMount(async () => {
		calendarEl = document.getElementById('calendar');
		console.log('hello');
		if (calendarEl) {
			// @ts-ignore
			var calendar = new FullCalendar.Calendar(calendarEl, {
				slotMinTime: '08:00',
				slotMaxTime: '20:00',
				expandRows: true,
				height: '100%',

				headerToolbar: {
					left: 'title',
					right: 'today prev,next'
				},
				initialView: 'dayGridMonth',
				navLinks: true, // can click day/week names to navigate views
				editable: true,
				selectable: true,
				nowIndicator: true,
				dayMaxEvents: true, // allow "more" link when too many events
				events: data.page_server_data.events
			});
			calendar.render();
		}
	});
</script>

<div class="container h-full w-full mx-auto flex justify-center items-center flex-col">
	<div class="text-center flex flex-col items-center">
		<h2 class="h2">Events</h2>
	</div>
	<div id="calendar" class="calendar"></div>
</div>

<style lang="postcss">
	.calendar {
		width: 100%;
		height: 100%;
	}
</style>
