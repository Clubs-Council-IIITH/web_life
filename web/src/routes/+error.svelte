<script lang="ts">
    import { page } from '$app/stores';
</script>

<div class="container h-full w-full mx-auto flex justify-center flex-col">
    <div class="flex flex-col">
        <br />
        <h2 class="h2 justify-center align-center">Error {$page.status}</h2>
        <br />
        <h3 style="margin-top:15px" class="h3 justify-center align-center">{$page.error?.message}</h3>
        <br />
    </div>
</div>
<br />
<br />
<br />

<style lang="postcss">
    @import '../../static/styles/style.css';
    .h2 {
        font-family: 'Georgia Bold';
        font-weight: normal;
        font-size: 42px;
    }
</style>    