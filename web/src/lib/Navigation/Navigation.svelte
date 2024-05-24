<script>
	import { getDrawerStore, LightSwitch } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	function drawerClose() {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a href="/" on:click={drawerClose}>Home</a></li>
		<li><a href="/committee" on:click={drawerClose}>Committee</a></li>
		<li><a href="/student-bodies" on:click={drawerClose}>Student Bodies</a></li>
		<li><a href="/calendar" on:click={drawerClose}>Calendar</a></li>
		<li style="padding-left:3%;"><LightSwitch /></li>
	</ul>
</nav>


