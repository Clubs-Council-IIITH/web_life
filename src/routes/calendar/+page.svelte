

<svelte:head>
	
</svelte:head>

<div class="container h-full w-full mx-auto flex justify-center items-center flex-col">
	<div class="text-center flex flex-col items-center">
		<h2 class="h2">Events</h2>
	</div>
	<div id="calendar" class="calendar"></div>
</div>

<script>
	import { onMount } from 'svelte';
	var calendarEl;
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
					left: 'prev,next today',
					center: 'title',
					right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
				},
				initialView: 'timeGridWeek',
				navLinks: true, // can click day/week names to navigate views
				editable: true,
				selectable: true,
				nowIndicator: true,
				dayMaxEvents: true, // allow "more" link when too many events
				events: [
					{
						title: 'Example Meetup',
						start: '2024-03-21T10:30:00',
						end: '2024-03-21T11:30:00',
						extendedProps: {
							department: 'Programming Club'
						},
						description: 'Lecture'
					},
					{
						title: 'Example Meetup',
						start: '2024-03-20T14:30:00',
						end: '2024-03-20T18:30:00',
						extendedProps: {
							department: 'Programming Club'
						},
						description: 'Lecture'
					}
				]
			});
			calendar.render();
		}
	});
</script>

<style lang="postcss">
	.calendar {
		width: 100%;
		height: 100%;
	}
</style>
