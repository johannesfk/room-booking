<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter/index.svelte';
	import WeekSelector from '$lib/WeekSelector/index.svelte'
</script>

<svelte:head>
	<title>Sound Studio - Room Booking</title>
</svelte:head>

<section>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

/* 	h1 {
		width: 100%;
	} */
</style>
