<script>
    import { fly } from 'svelte/transition';
    import Settings from '$routes/Settings/index.svelte'

    export let show = false;

    let rooms = [
        "Sound Studio",
        "Music Room",
        "Baby Bear",
        "Reading Room",
        "Central Study",
        "Lower West"
    ];

    let loggedIn = true;
    let settings_show = false;
</script>
{#if show}
    // TODO: Background scrollable when menu is open. Add class .no-scroll to main element when menu panel is open. Note: window & document methods are not available. Use svelte methods.
    <nav transition:fly={{x: -1000, opacity: 1}} class="menu" on:click|stopPropagation={() => settings_show = false}>
        <div class="rooms">
            {#each rooms as item}
                <a href="#{item}">{item}</a>
            {:else}
                <p>An error occurred while fetching data.<br>Try to <a href="/?reload" on:click|once={ function() { location.reload(true) } }>reload</a> the page, and <a  href="/?clear-cache">clear</a> the cache.<br>If it still doesn't work, please <a href="mailto:johannesfknudsen@gmail.com?subject=Room%20Booking%20Error%20Report" target="_blank" rel="noreferrer">contact</a> the developer.</p>
            {/each}
        </div>
        <div class="menu-footer">            
            {#if loggedIn}
            <a class="user" href="#user">
                <i class="gg-log-out"></i>
            </a>
            <a class="settings" href="#settings" on:click={() => settings_show = !settings_show}>
                <i class="gg-options"></i>
            </a>
            {:else}
                <a href="#login">
                    <i class="gg-log-in"></i>
                </a>
            {/if}
        </div>
    </nav>
    <Settings bind:show={settings_show} />
{/if}


<style lang="scss">

    @use './../../styles/mixins/glass';
    nav {
        position: fixed;
        top: 3rem;
        left: 0;
        height: calc(100vh - 3.2rem);
        height: calc((var(--vh, 1vh) * 100) - 3.2rem);
        padding: 2rem 2rem;
        box-sizing: border-box;
        border-top: 1px solid var(--surface4);
        background-color: var(--surface2);
        overflow-y: auto;
        width: 100vw;
        z-index: 10;
        color: var(--text2);
        display: flex;
        flex-direction: column;

        backdrop-filter: blur(15px);
        background-color: rgba(17, 25, 40, 0.25);
        background-color: hsl(357, 100%, 50%);
        background-color: hsla(var(--accent-color) 0.5);

        @include glass.glass;

        @media screen and (min-aspect-ratio: 1/1 ) {
            // eslint-disable-next-line ParseError
            width: max-content;
            padding-right: 5rem;
            border-right: 1px solid var(--surface4);
            border-right: 1px solid var(--surface4);
            // border-radius: 70% / 0 100% 100% 0;
        }
    }

    .rooms {
        height: 100%;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        justify-content: space-between;
        margin: 1rem;
        margin-left: 2.5rem;
    }

    .rooms > a {
        text-decoration: none;
        color: var(--text2);
        font-family: Lora, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: 2em;
        font-weight: 400;
        /* font-variant-caps: small-caps; */
        font-style: italic;
        font-variation-settings: 'ital' 1;
        :hover {
            color: var(red);
            background-color: blue;
        }
    }

    .menu-footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-top: 1px solid var(--surface4);
        margin-top: 2em;
        margin-left: 1em;
        margin-right: 1em;
        padding-top: 1em;
        color: red;
        --ggs: 1.7;
        a {
            height: 100%;
            width: 3em;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 0 2em;
            i {
                margin: auto;

            }
        }
    }
</style>
