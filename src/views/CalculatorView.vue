<script setup>
import DefaultBtn from "../components/DefaultBtn.vue";
import { RouterLink } from "vue-router";
</script>

<script>
export default {
    data() {
        return {
            previous: "",
            current: "",
            oper: "",
            newCalc: true,
            buttons: [
                { value: "Clear", wide: true },
                { value: "Del", wide: false },
                { value: "/", wide: false },
                { value: 1, wide: false },
                { value: 2, wide: false },
                { value: 3, wide: false },
                { value: "*", wide: false },
                { value: 4, wide: false },
                { value: 5, wide: false },
                { value: 6, wide: false },
                { value: "+", wide: false },
                { value: 7, wide: false },
                { value: 8, wide: false },
                { value: 9, wide: false },
                { value: "-", wide: false },
                { value: ".", wide: false },
                { value: 0, wide: false },
                { value: "=", wide: true },
            ],
        };
    },
    methods: {
        btnClick(value) {
            if (isNaN(value) && value !== ".") {
                if (value !== "=" && value !== "Clear" && value !== "Del") {
                    if (this.current === "") {
                        return;
                    }
                    if (this.oper === "+") {
                        this.previous =
                            parseFloat(this.previous) +
                            parseFloat(this.current);
                    } else if (this.oper === "-") {
                        this.previous =
                            parseFloat(this.previous) -
                            parseFloat(this.current);
                    } else if (this.oper === "*") {
                        this.previous =
                            parseFloat(this.previous) *
                            parseFloat(this.current);
                    } else if (this.oper === "/") {
                        this.previous =
                            parseFloat(this.previous) /
                            parseFloat(this.current);
                    } else {
                        this.previous = parseFloat(this.current);
                    }
                    this.oper = value;
                    this.current = "";
                    this.newCalc = true;
                } else if (value === "=") {
                    if (this.current === "") {
                        return;
                    }
                    if (this.oper === "+") {
                        this.current =
                            parseFloat(this.previous) +
                            parseFloat(this.current);
                    } else if (this.oper === "-") {
                        this.current =
                            parseFloat(this.previous) -
                            parseFloat(this.current);
                    } else if (this.oper === "*") {
                        this.current =
                            parseFloat(this.previous) *
                            parseFloat(this.current);
                    } else if (this.oper === "/") {
                        this.current =
                            parseFloat(this.previous) /
                            parseFloat(this.current);
                    }
                    this.previous = "";
                    this.oper = "";
                    this.newCalc = false;
                } else if (value === "Clear") {
                    this.previous = "";
                    this.current = "";
                    this.oper = "";
                } else {
                    this.current = parseFloat(
                        this.current.toString().slice(0, -1),
                    );
                    this.current = isNaN(this.current) ? "" : this.current;
                }
            } else if (this.newCalc) {
                this.current = this.current + value.toString();
            } else {
                this.previous = "";
                this.current = "";
                this.oper = "";
                this.newCalc = true;
                this.current = this.current + value.toString();
            }
        },
    },
};
</script>

<template>
    <div id="main">
        <RouterLink to="../tools"
            ><DefaultBtn id="back"></DefaultBtn
        ></RouterLink>
        <div
            id="center"
            @keydown.delete="btnClick('Del')"
            @keydown.enter="btnClick('=')"
        >
            <div id="calculator">
                <div id="view">
                    <span id="previous">{{ previous }}{{ oper }}</span>
                    <span id="current">{{ current }}</span>
                </div>
                <DefaultBtn
                    v-for="num in buttons"
                    :key="num.value"
                    :class="{ wide: num.wide }"
                    class="calcBtn"
                    @click="btnClick(num.value)"
                    >{{ num.value }}</DefaultBtn
                >
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

#calculator {
    width: 35vw;
    min-width: 350px;
    padding: 5px;
    height: 75vh;
    background-color: var(--input-color);
    border-radius: 2vw;
    border-width: 2px;
    border-color: var(--border-color);
    border-style: solid;
    display: grid;
    grid-template-rows: 20% repeat(5, 16%);
    grid-template-columns: repeat(4, 25%);
}

#view {
    grid-column: 1 / 5;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-color: var(--text-color);
    margin: 5px;
    border-radius: 2vw;
    padding: 3%;
    color: var(--input-color);
    text-align: right;
    font-family: var(--text-header-font);
}

#previous {
    font-size: var(--text-size);
}

#current {
    font-size: var(--text-header-size);
}

.calcBtn {
    margin: 5px;
    background-color: var(--text-color);
    color: var(--input-color);
    border-radius: 2vw;
    border: none;
}

.caclBtn:hover {
    transform: none;
    color: var(--main-color);
    background-color: var(--text-color);
}

.wide {
    grid-column: span 2;
}
</style>
