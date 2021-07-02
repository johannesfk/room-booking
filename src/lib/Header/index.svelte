<script lang="ts">
	import { page } from '$app/stores';
	import Menu from '$routes/Menu/index.svelte';
	let currentRoom = "Sound Studio";

	let menu_show = false;
</script>

<header class="surface2">
	<div class="corner">
		<a href="#menu" on:click={() => menu_show = !menu_show}>
			<!-- <span class="material-icons"> menu </span> -->
			<span class="anicon" class:anicon-end="{menu_show === true}"> A </span>
		</a>
	</div>
	<div class="room-name">
		<h1>{currentRoom}</h1>
	</div>
	
	<!-- <nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
			<li class:active={$page.path === '/todos'}><a sveltekit:prefetch href="/todos">Todos</a></li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav> -->

	<div class="corner">
		<!-- TODO put something here?  -->
	</div>
</header>
<Menu bind:show={menu_show} />

<style lang="scss">
	header {
		overflow: hidden;
		display: flex;
		justify-content: space-between;
		position: fixed;
		top: 0;
		width: 100vw;
		padding-bottom: 1px;
		z-index: 10;
	}

	.room-name {
		flex-grow: 2;
		display: flex;
		align-items: center;
		justify-content: left;
	}

	.room-name h1 {
		font-family: Lora, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
		font-weight: 500;
	}

	.corner {
		width: 3rem;
		height: 3rem;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		text-decoration: none;

		.anicon {
			font-size: 2em;
		}
	}

	/* .corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--brand);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 10%;
		text-decoration: none;
		transition: color 0.2s linear;
	} */

	a:hover {
		color: var(--brand);
	}
</style>
