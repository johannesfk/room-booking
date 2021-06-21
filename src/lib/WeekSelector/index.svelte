<script lang="ts">

    let d = new Date();

    let date = d.getTime();
    let month = "August";
    let year = "2021";
</script>

<nav class="week-selector surface3 rad-shadow">
    <div class="week-navigator">
        <div class="week-nav">
            <a href="#week-back">
                <span class="material-icons">
                    chevron_left
                </span>
            </a>
        </div>
        <div class="monthYear">
            <h2>{month}</h2>
            <small>{year}</small>
        </div>
        <div class="week-nav">
            <a href="#week-forward">
                <span class="material-icons">
                    chevron_right
                </span>
            </a>
        </div>
    </div>
    <div class="week-days">
        <a href="#date-{date}" class="day">
            <div class="day-name">
                <small>Mon</small>
            </div>
            <div class="day-date date-selected">
                <p>7</p>
                <!-- <div class="date-selected-bg"></div> -->
            </div>
        </a>
        <a href="#date-{date}" class="day">
            <div class="day-name">
                <small>Tue</small>
            </div>
            <div class="day-date">
                <p>8</p>
            </div>
        </a>
        <a href="#date-{date}" class="day">
            <div class="day-name">
                <small>Wed</small>
            </div>
            <div class="day-date">
                <p>9</p>
            </div>
        </a>
        <a href="#date-{date}" class="day">
            <div class="day-name">
                <small>Thu</small>
            </div>
            <div class="day-date">
                <p>10</p>
            </div>
        </a>
        <a href="#date-{date}" class="day">
            <div class="day-name">
                <small>Fri</small>
            </div>
            <div class="day-date">
                <p>11</p>
            </div>
        </a>
        <a href="#date-{date}" class="day">
            <div class="day-name">
                <small>Sat</small>
            </div>
            <div class="day-date">
                <p>12</p>
            </div>
        </a>
        <a href="#date-{date}" class="day">
            <div class="day-name">
                <small>Sun</small>
            </div>
            <div class="day-date">
                <p>13</p>
            </div>
        </a>
    </div>
</nav>

<style lang="scss">
    .week-selector {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 5px;
        position: fixed;
        overflow: hidden;
        top: 3em;
    }
    .week-navigator {
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        padding: 5px;
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
    }

    .day-date p {
        display: block;
        margin: 5px;
        height: 1.5em;
        width: 1.5em;
        text-align: center;
    }

    .date-selected p {
        shape-outside: circle(0.5em);
        clip-path: circle();
        background-color: var(--brand);
    }

    .date-selected-bg {
        shape-outside: circle();
        clip-path: circle();
        background-color: violet;
        height: 21px;
        width: 21px;
        top: calc(50% - 21px / 2);
        display: block;
    }
</style>