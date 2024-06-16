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
            indexes: [],
            filtered: [],
            solves: [
                [1, 1, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 1, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 1, 1, 1],
                [1, 0, 0, 1, 0, 0, 1, 0, 0],
                [0, 1, 0, 0, 1, 0, 0, 1, 0],
                [0, 0, 1, 0, 0, 1, 0, 0, 1],
                [1, 0, 0, 0, 1, 0, 0, 0, 1],
                [0, 0, 1, 0, 1, 0, 1, 0, 0],
            ],
            cor: 0,
        };
    },
    methods: {
        slotClick(i) {
            if (this.slots[i] === " ") {
                this.slots[i] = "O";
                this.indexes = [];
                this.slots.forEach((val, i) => {
                    if (val === " ") {
                        this.indexes.push(i);
                    }
                });
                console.log(this.indexes);
                this.slots[
                    this.indexes[
                        Math.floor(Math.random() * (this.indexes.length - 1))
                    ]
                ] = "X";
            }
        },
        solve() {
            this.slots = [
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
            ];
            console.log("solve");
        },
    },
    watch: {
        slots: {
            handler() {
                console.log("change");
                this.filtered = this.slots.filter((filter) => {
                    return typeof filter === "string";
                });
                console.log("bacon");
                for (let i = 0; i < 8; i++) {
                    this.cor = 0;
                    for (let val in this.filtered) {
                        if (
                            (this.filtered === this.solves[i[val]] ?? "X") ||
                            (this.filtered[val] === this.solves[i[val]] ?? "O")
                        ) {
                            this.cor++;
                        }
                    }
                    if (this.cor === 8) {
                        this.solve();
                    }
                }
                console.log("what?");
            },
            deep: true,
        },
    },
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
                    :key="i"
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

.slot > div {
    display: grid;
    place-content: center;
    width: 100%;
    height: 100%;
}
</style>
