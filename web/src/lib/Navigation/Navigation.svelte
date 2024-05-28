<script>
	import { getDrawerStore, LightSwitch } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	let current_page = $page.url.pathname;

	const drawerStore = getDrawerStore();

	function drawerClose() {
		drawerStore.close();
	}
</script>

<nav class="list p-4">
    <ul>
        <li class="{current_page === '/' ? 'active' : ''}"><a href="/" on:click={drawerClose}>Home</a></li>
        <li class="{current_page === '/supervisory-bodies' ? 'active' : ''}"><a href="/supervisory-bodies" on:click={drawerClose}>Supervisory Bodies</a></li>
        <li class="{current_page === '/student-bodies' ? 'active' : ''}"><a href="/student-bodies" on:click={drawerClose}>Student Bodies</a></li>
        <li class="{current_page === '/calendar' ? 'active' : ''}"><a href="/calendar" on:click={drawerClose}>Calendar</a></li>
        <li class="{current_page === '/gallery' ? 'active' : ''}"><a href="/gallery" on:click={drawerClose}>Gallery</a></li>
        <li style="padding-left:3%;"><LightSwitch /></li>
    </ul>
</nav>

<style lang="postcss">
	.active {
		background-color: #BDA5D5;
	}
	.list li {
		margin: 5px;
		padding: 5px;
	}

	.list a {
		width: 100%;
		height: 100%;
	}

	.list a:hover {
		color: inherit;
	}

	.list li:not(:last-child):hover {
		background-color: #e3d3f3;
	}
</style>