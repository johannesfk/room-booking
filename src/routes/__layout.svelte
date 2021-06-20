<script lang="ts">
	import Header from '$lib/Header/index.svelte';
	import WeekSelector from '$lib/WeekSelector/index.svelte';
	import "../app.postcss";
</script>

<Header/>
<WeekSelector/>

<main>
	<slot/>
</main>

<!-- <footer>
	<small>&copy 2021 Johannes Farmer Knudsen</small>
</footer> -->

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
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