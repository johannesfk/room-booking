<script>
    import { fly } from 'svelte/transition';

    export let show = false;

    if (show == true) {
        console.log(show);
    } else if (false) {
        console.log(show);
    }


    let rooms = [
        "Sound Studio",
        "Music Room",
        "Baby Bear",
        "Reading Room",
        "Central Study",
        "Lower West"
    ];

</script>
{#if show}
    // TODO: Background scrollable when menu is open. Add class .no-scroll to main element when menu panel is open. Note: window & document methods are not available. Use svelte methods.
    <nav transition:fly={{x: -1000, opacity: 1}} class="menu">
        <div class="rooms">
            {#each rooms as item}
                <a href="#{item}">{item}</a>
            {:else}
                <p>An error occurred while fetching data.<br>Try to <a href="/?reload" on:click|once={ function() { location.reload(true) } }>reload</a> the page, and <a  href="/?clear-cache">clear</a> the cache.<br>If it still doesn't work, please <a href="mailto:johannesfknudsen@gmail.com?subject=Room%20Booking%20Error%20Report" target="_blank" rel="noreferrer">contact</a> the developer.</p>
            {/each}
        </div>
        <div class="settings">

        </div>
    </nav>
{/if}




<style lang="scss">
    nav {
        position: fixed;
        top: 3rem;
        left: 0;
        height: calc(100vh - 3rem);
        padding: 2rem 2rem;
        border-top: 2px solid var(--surface4);
        // background: rgba(19, 38, 54, 0.75);
        background-color: var(--surface2);
        overflow-y: auto;
        width: 100vw;
        z-index: 10;
        color: var(--text2);
        display: flex;
        flex-direction: column;

        @media (min-aspect-ratio: 1/1 ) {
            width: fit-content;
            padding-right: 5rem;
            border-right: 1px solid var(--surface4);
        }
    }

    .rooms {
        height: 100%;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        justify-content: space-between;
        margin: 1rem;
    }

    .rooms > a {
        text-decoration: none;
        color: var(--text2);
        font-family: Lora, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: 2em;
        font-weight: 400;
        // font-variant-caps: small-caps;
        font-style: italic;
        font-variation-settings: 'ital' 1;
        :hover {
            color: var(red);
            background-color: blue;
        }
    }
</style>
