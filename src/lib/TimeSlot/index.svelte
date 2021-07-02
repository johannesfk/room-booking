<script lang="ts">
    export let data;
	let booked = false;
	let userRole = 'manager';
	let userName = 'Johannes Farmer Knudsen';
	let slotId = 'g4sh44f54f84g5s4';

	function randomHeart(amount) {
		let result = '';

		for (let index = 0; index < amount; index++) {
			let output = '';
			switch (Math.floor(Math.random() * 9)) {
				case 0:
					output = '❤️';
					break;
				case 1:
					output = '💚';
					break;
				case 2:
					output = '💙';
					break;
				case 3:
					output = '💜';
					break;
				case 4:
					output = '🤎';
					break;
				case 5:
					output = '🖤';
					break;
				case 6:
					output = '🤍';
					break;
				case 7:
					output = '🧡';
					break;
				case 8:
					output = '💛';
					break;
				default:
					break;
			}
			result += output;
		}
		return result;
	}
</script>

<div class="time-slot" id={slotId}>
	<div class="time">
		<p class="time-text">{data}:00</p>
	</div>
	<div class="content" class:free={!booked}>
		{#if booked == true}
			{#if userRole == 'manager'}
				<p><b>Booked by</b></p>
				<p>{userName}</p>
			{:else}
				<p>Occupied{randomHeart(3)}</p>
			{/if}
		{:else if booked == false}
			<button class="book-btn" on:click={() => alert(`Time is ${data}`)}>Book</button>
		{:else}
			<p>An error occurred!</p>
		{/if}
	</div>
</div>

<style lang="scss">
	.time-slot {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		background-color: var(--surface1);
		border-bottom: 1px solid hsl(var(--brand-hue) 10% 50% / 15%);

		/* backdrop-filter: blur(15px);
        background-color: rgba(17, 25, 40, 0.25); */
	}
    .time-text {
        font-weight: bold;
    }

	.time-slot:nth-child(2n) {
		background-color: var(--surface2);
		/* background-color: rgba(0, 0, 0, 0.25); */
	}

	.time {
		text-align: right;
		/* background-color: rgba(220, 20, 60, 0.1); */
		height: 100%;
		width: 6em;
		padding: 1em;
	}
	.content {
		padding: 1em;
		margin-left: auto;
		width: 100%;
		border-left: 1px solid hsl(var(--brand-hue) 10% 50% / 15%);
		/* background-color: rgba(0, 0, 255, 0.1); */
	}
	.book-btn {
		background-color: hsl(var(--brand-hue) 70% 40% / 30%);
		border: none;
		width: 65%;
		height: 100%;
		text-transform: uppercase;
		border-radius: 0.75em;
        &:active {
            background-color: hsl(var(--brand-hue) 70% 80% / 30%);
        }
    }
	.free {
		padding: 0.5em;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
