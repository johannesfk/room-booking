<script lang="ts">
    import WeekSelector from '$lib/WeekSelector/index.svelte';
    import TimeSlot from '$lib/TimeSlot/index.svelte';

    import dayjs from 'dayjs';
    dayjs().format();

    
    const d = new Date();

    const slots = [
        {
            id: "fsfsf454",
            time: d.setHours(0),
            status: "booked",
            booker: "Regitze Jørgensdatter Viborg"
        },
        {
            id: "dadada45",
            time: d.setHours(1),
            status: "free",
            booker: ""
        },
        {
            id: "dadada45",
            time: d.setHours(2),
            status: "reserved",
            booker: ""
        }
    ];

    let loggedIn = true;

    let timeSlots = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
</script>

<WeekSelector/>
{#if loggedIn}
    <section class="time-slots">
        {#each timeSlots as item}
            <TimeSlot data={item}/>
        {/each}
    </section>
{:else if loggedIn === false}
    <section class="no-login">
        <h2>Please log in</h2>
        <a href="#login">
            <i class="gg-log-in"></i>
        </a>
    </section>
{:else}
    <section class="no-login">
        <p>An error occurred</p>
    </section>
{/if}

<style lang="scss">
    .time-slots {
        border: 1px solid hsl(var(--brand-hue) 10% 50% / 15%);
        margin: 2rem;
    }
    .no-login {
        margin: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 50vh;
        --ggs: 1.7;
        a {
            margin-top: 2em;
        }
    }
</style>