<script lang="ts">
	import { getDrawerStore, LightSwitch, modeCurrent } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	let current_page = $page.url.pathname;
	import '../../app.postcss';

	const drawerStore = getDrawerStore();

	function drawerClose() {
		drawerStore.close();
	}

	let color: string;

	$: {
		if ($modeCurrent == false) {
			color = 'white';
		} else {
			color = 'black';
		}
	}
</script>

<nav class="list px-2 py-4" style={`color: ${color}`}>
	<ul class="menu">
		<li class={current_page === '/' ? 'variant-filled-primary' : ''}>
			<a href="/" on:click={drawerClose}>Home</a>
		</li>
		<li class={current_page === '/supervisory-bodies' ? 'variant-filled-primary' : ''}>
			<a href="/supervisory-bodies" on:click={drawerClose}>Supervisory Bodies</a>
		</li>
		<li class={current_page === '/student-bodies' ? 'variant-filled-primary' : ''}>
			<a href="/student-bodies" on:click={drawerClose}>Student Bodies</a>
		</li>
		<li class={current_page === '/calendar'
		? 'variant-filled-primary'
		: ''}>
			<a href="/calendar" on:click={drawerClose}>Calendar</a>
		</li>
		<li class={current_page === '/gallery' ? 'variant-filled-primary' : ''}>
			<a href="/gallery" on:click={drawerClose}>Gallery</a>
		</li>
	</ul>
	<ul class="switch">
		<li style="padding-left: 15px;">
			<LightSwitch width="w-16" height="h-8" />
		</li>
	</ul>
</nav>

<style lang="postcss">
	.list li {
		margin: 5px;
		padding: 5px;
	}

	.list a {
		width: 100%;
		height: 100%;
		padding-left: 15px;
	}

	.list a:hover {
		color: inherit;
	}

	.list .menu li:hover {
		background-color: #d4b4f5;
	}

	.dark .list .menu li:hover {
		background-color: #685703;
	}

	.switch {
		position: fixed;
		bottom: 0;
		margin-bottom: 30px;
	}
</style>
