<script>
    import TimeSlot from '$lib/TimeSlot/index.svelte';

    
    let d = new Date();
    let selectedDate = d.setFullYear(2021, 8, 7);

    let slots = [
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
    ]

    let timeSlots = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
</script>

<section class="time-slots">
    {#each timeSlots as item}
    <TimeSlot>
        <p class="time-text" slot="time">{item}:00</p>
    </TimeSlot>
    {/each}
</section>

<style>
    .time-slots {
        border: 1px solid hsl(var(--brand-hue) 10% 50% / 15%);
    }

    .time-text {
        font-weight: bold;
    }
</style>