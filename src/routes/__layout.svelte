<script lang="ts">
	import Header from '$lib/Header/index.svelte';
	import "../app.scss";
	import Calendar from './calendar.svelte';
</script>

<Header/>

<main>
	<Calendar/>
</main>

<!-- <footer>
	<small>&copy 2021 Johannes Farmer Knudsen</small>
</footer> -->

<style lang="scss">
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
        margin-top: 9.6em;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>