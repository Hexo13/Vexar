<script setup>
import DefaultBtn from "../components/DefaultBtn.vue";
import { RouterLink } from "vue-router";
</script>

<script>
export default {
    data() {
        return {
            slots: [
                " ",
                false,
                " ",
                false,
                " ",
                false,
                false,
                false,
                false,
                false,
                " ",
                false,
                " ",
                false,
                " ",
                false,
                false,
                false,
                false,
                false,
                " ",
                false,
                " ",
                false,
                " ",
            ],
            filtered: [
                "","","","","","","","",""
            ]
        };
    },
    methods: {
        slotClick(i) {
            if(this.slots[i] === " ") {
                this.slots[i] = "O"
                this.filtered = this.slots.filter((slot) => {
                    return typeof slot === "string"
                })
                console.log(this.filtered[Math.floor(Math.random() * 9)])
                //this.slots[Math.floor(Math.random() * 9)] = "X"
            }
        },
    }
};
</script>

<template>
    <div id="main">
        <RouterLink to="../games"
            ><DefaultBtn id="back"></DefaultBtn
        ></RouterLink>
        <div id="center">
            <div id="board">
                <div
                    v-for="(slot, i) in slots"
                    :key="slot"
                    :class="{ filled: !slot, slot: slot }"
                >
                    <div v-if="slot" @click="slotClick(i)">
                        {{ slot }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#main {
    height: 93vh;
    font-size: var(--text-size);
    font-family: var(--text-font);
}

#back {
    position: fixed;
    top: 10%;
    left: 1%;
    width: 1.5em;
    height: 1.5em;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("/back.svg");
    background-color: transparent;
    border: none;
}

#center {
    display: grid;
    place-content: center;
    height: 100%;
    width: 100%;
}

#board {
    width: 25em;
    padding: 5%;
    height: 25em;
    background-color: var(--input-color);
    border-radius: 2vw;
    border-width: 2px;
    border-color: var(--border-color);
    border-style: solid;
    display: grid;
    grid-template-rows: 32% 2% 32% 2% 32%;
    grid-template-columns: 32% 2% 32% 2% 32%;
}

.filled {
    background-color: #fff;
}

.slot > div{
    display: grid;
    place-content: center;
    width: 100%;
    height: 100%;
}
</style>
