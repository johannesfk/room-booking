<script lang="ts">
    import { getWeekdays } from "$lib/dateTime";
    import dayjs from "dayjs";
    import isoWeek from 'dayjs/plugin/isoWeek';
    dayjs.extend(isoWeek);

    let weekOffset = 0;
    $: console.log(weekOffset);
    
    let weekDays = [
        getWeekdays(0, weekOffset),
        getWeekdays(1, weekOffset),
        getWeekdays(2, weekOffset),
        getWeekdays(3, weekOffset),
        getWeekdays(4, weekOffset),
        getWeekdays(5, weekOffset),
        getWeekdays(6, weekOffset)
    ];

    let currentWeekday = dayjs();
    let selectedWeekday = currentWeekday;

    function updateWeek(direction:string) {
        if (direction == "forward") {
            weekOffset += 1;
            selectedWeekday = selectedWeekday.add(1, 'week');           
        } else if (direction == "backward") {
            weekOffset -= 1;
            selectedWeekday = selectedWeekday.subtract(1, 'week');
        } else {
            alert("An error occurded while updating week");
        }
        weekDays = [
            getWeekdays(0, weekOffset),
            getWeekdays(1, weekOffset),
            getWeekdays(2, weekOffset),
            getWeekdays(3, weekOffset),
            getWeekdays(4, weekOffset),
            getWeekdays(5, weekOffset),
            getWeekdays(6, weekOffset)
        ];
    }

</script>

<!-- TODO: Change on:click highlight color. -->
<nav class="week-selector rad-shadow">
    <div class="week-navigator">
        <a class="week-nav" href="/?weekOffset_{weekOffset}" on:click={() => updateWeek("backward")}>
            <span class="material-icons" style="float: left;"> 
                chevron_left
            </span>
        </a>
        <div class="monthYear">
            <h2>{weekDays[0].monthName}</h2>
            <small>{weekDays[0].year}</small>
        </div>
        <a class="week-nav" href="/?weekOffset_{weekOffset}" on:click={() => updateWeek("forward")}>
            <span class="material-icons" style="float: right;">
                chevron_right
            </span>
        </a>
    </div>
    <div class="week-days">
        {#each weekDays as item,i}
            <a href="/?{weekDays[i].fullDate}" class="day" on:click={() => selectedWeekday = weekDays[i].dt}
                class:date-selected={selectedWeekday.format('YYYY-MM-DD') == weekDays[i].fullDate}
                class:date-current={currentWeekday.format('YYYY-MM-DD') == weekDays[i].fullDate}>
                <div class="day-name">
                    <small>{weekDays[i].dayName}</small>
                </div>
                <div class="day-date">
                    <p>{weekDays[i].date}</p>
                </div>
            </a>
        {:else}
            <p>An error occured.</p>
        {/each}
    </div>
</nav>

<style lang="scss">
    @use './../../styles/mixins/glass';
    .week-selector {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 5px;
        position: fixed;
        overflow: hidden;
        top: 3em;
        z-index: 8;
        background-color: var(--surface3);
        color: var(--text1);

        /* backdrop-filter: blur(15px);
        background-color: rgba(17, 25, 40, 0.25); */
        @include glass.glass;
    }
    .week-navigator {
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        padding: 5px;
    }
    .week-nav {
        height: 100%;
        width: 30%;
        display: block;
    }
    .week-nav:visited, .week-nav:hover, .week-nav:active {
        color: none;
    }
    .week-nav span {
        font-size: 2em;
    }
    .week-days {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        padding: 0 10px;
    }

    .monthYear {
        text-align: center;
    }

    .day {
        text-align: center;
        text-decoration: none;
        &:active {
			opacity: 1;
		}
        color: var(--text1);
    }

    .day-date p {
        display: block;
        margin: 5px;
        height: 1.5em;
        width: 1.5em;
        text-align: center;
    }

    .date-current p {
        shape-outside: circle(0.5em);
        clip-path: circle();
        background-color: var(--surface4);
    }
    .date-selected p {
        shape-outside: circle(0.5em);
        clip-path: circle();
        background-color: var(--brand);
    }
</style>