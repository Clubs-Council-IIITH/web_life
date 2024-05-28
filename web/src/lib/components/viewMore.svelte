<script lang="ts">
	import { modeCurrent } from '@skeletonlabs/skeleton';

	let color: string;

	$: {
		if ($modeCurrent == false) {
			color = 'lightgrey';
		} else {
			color = 'slateblue';
		}
	}

	function openLocalPage() {
		window.open('/gallery', '_self'); // Change '_self' to '_blank' if you want to open in a new tab
	}
</script>

<div class="vmbtn" style={`color: ${color}`}>
	<a style="font-size: 20px" tabindex="0" href="/gallery"
		><span class="MuiTypography-root MuiTypography-button mui-96266l" style="font-size: 18px;"
			>View all Images</span
		><svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			aria-hidden="true"
			role="img"
			class="MuiBox-root mui-1t9pz9x iconify iconify--material-symbols"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			style="display: inline;"
		>
			<path fill="currentColor" d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"></path></svg
		><span class="MuiTouchRipple-root mui-w0pj6f"></span></a
	>
</div>

<style>
	.vmbtn {
		display: flex;
		justify-content: flex-end;
	}
</style>
