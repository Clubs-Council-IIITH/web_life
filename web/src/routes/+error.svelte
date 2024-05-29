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
    .avatar-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
        text-align: center;
    }
    .avatar-grid .card:hover {
        transition:
            background-color 0.3s ease,
            box-shadow 0.3s ease;
        background-color: #f3f4f6; /* Change the background color to highlight */
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */
    }

    /* Dark mode hover effect */
    .dark .avatar-grid .card:hover {
        background-color: #374151; /* Change the background color for dark mode */
        box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.1); /* Add a subtle box shadow for dark mode */
    }
    .h2 {
        font-family: 'Georgia Bold';
        font-weight: normal;
        font-size: 42px;
    }
</style>    