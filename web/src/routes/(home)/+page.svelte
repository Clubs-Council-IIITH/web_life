<script lang="ts">
	import type { PageData } from './$types';
	import Header4 from "./section1.svelte";
	import Features6 from './section2.svelte';
	import Features12 from './section3.svelte';
	export let data: PageData;
</script>

<Header4 />
<br />
<br />
<Features6 />
<br />
<br />
<Features12 data={{ page_server_data: data.page_server_data }} />