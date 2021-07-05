<script lang="ts">
    import { fly } from 'svelte/transition';
    export let show = false;
    export let userLevel = 'guest';
</script>

{#if show}
    <div transition:fly={{y: 100, opacity: 1}} class="settings-overlay">
        <i class="drag-bar"></i>
        <div class="overlay-container">
            <input class="theme-switch" type="range" min="1" max="3" value="1" step="1">
        </div>
    </div>
{/if}

<style lang="scss">
    @use './../../styles/mixins/glass';
    .drag-bar {
        width: 50%;
        height: 4px;
        background-color: hsl(var(--brand-hue) 10% 50% / 100%);
        position: absolute;
        top: 10px;
    }

    .theme-switch {
        appearance: none;
        height: 2em;
        border-radius: 1em;
        background: linear-gradient(90deg, var(--surface1-dark) 0%,
        var(--surface1-dark) 33%,
        var(--surface1-dim) 33%,
        var(--surface1-dim) 66%,
        var(--surface1-light) 66%,
        var(--surface1-light) 100%);
        outline: none;
        opacity: 0.7;
        transition: opacity .2s;
    }
    .theme-switch::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 1.7em;
        height: 1.7em;
        border-radius: 50%; 
        background: #04AA6D;
        cursor: pointer;
    }

    .overlay-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .settings-overlay {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 50vh;
        background-color: violet;
        background-color: var(--surface1);
        @include glass.glass;
        border-radius: 40px 40px 0 0;
        z-index: 12;
        box-shadow: rgba(0, 0, 0, 0.75) 0px -10px 100px 0px;
        padding: 3rem;

        @media screen and (min-aspect-ratio: 1/1 ) {
            // eslint-disable-next-line ParseError
            width: 20vw;
            transform: translateX(calc(50vw - (20vw / 2)));
            height: 20vh;
        }
    }
</style>