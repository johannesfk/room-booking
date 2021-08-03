<script lang="ts">
	import Header from '$lib/Header/index.svelte';
	import "../app.scss";
	import Calendar from './calendar/[slug].svelte';


/* 	// Fix viewport height
	// We listen to the resize event
	window.addEventListener('resize', () => {
		// We execute the same script as before
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
		console.log(vh);
	}); */

	import { onMount } from 'svelte';
	import { browser } from '$app/env';

	let lib;

/* 	if (browser) {
		onMount(async () => {
			// Fix viewport height
			// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
			let vh = window.innerHeight * 0.01;
			// Then we set the value in the --vh custom property to the root of the document
			document.documentElement.style.setProperty('--vh', `${vh}px`);
			// We listen to the resize event
			window.addEventListener('resize', () => {
				// We execute the same script as before
				let vh = window.innerHeight * 0.01;
				document.documentElement.style.setProperty('--vh', `${vh}px`);
			});
		});
	} */
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
</style>