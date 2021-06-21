<script lang="ts">
    let booked = true;
    let userRole = "manager";
    let userName = "Johannes Farmer Knudsen";
    let slotId = "g4sh44f54f84g5s4";

    function randomHeart(amount) {

        let result = "";

        for (let index = 0; index < amount; index++) {

            let output = "";
            switch (Math.floor(Math.random() * 9)) {
                case 0:
                    output = "❤️";
                    break;
                case 1:
                    output = "💚";
                    break;
                case 2:
                    output = "💙";
                    break;
                case 3:
                    output = "💜";
                    break;
                case 4:
                    output = "🤎";
                    break;
                case 5:
                    output = "🖤";
                    break;
                case 6:
                    output = "🤍";
                    break;
                case 7:
                    output = "🧡";
                    break;
                case 8:
                    output = "💛";
                    break;
                default:
                    break;
            }
            result += output;
        }
        return result;
    }
</script>

<div class="time-slot" id="{slotId}">
    <div class="time">
        <slot name="time">error</slot>
    </div>
    <div class="content">
        {#if booked == true}
            {#if userRole == "manager"}
                <p><b>Booked by</b></p>
                <p>{userName}</p>
            {:else}
                <p>Occupied{randomHeart(3)}</p>
            {/if}
        {:else if booked == false}
            <button>Book</button>
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
    }

    .time-slot:nth-child(2n) {
        background-color: var(--surface2);
    }

    .time {
        text-align: right;
        // background-color: rgba(220, 20, 60, 0.1);
        height: 100%;
        width: 6em;
        padding: 1em;
        border-right: 1px solid hsl(var(--brand-hue) 10% 50% / 15%);
    }
    .content {
        padding: 1em;
        margin-left: auto;
        width: 100%;
        // background-color: rgba(0, 0, 255, 0.1);
    }
</style>
