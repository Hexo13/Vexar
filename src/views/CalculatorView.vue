<script setup>
import DefaultBtn from "../components/DefaultBtn.vue";
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
        <div id="calculator">
            <div id="view">
                <span id="previous">{{ previous }}{{ oper }}</span>
                <span id="current">{{ current }}</span>
            </div>
            <DefaultBtn
                v-for="num in buttons"
                :key="num.value"
                :class="{ wide: num.wide }"
                @click="btnClick(num.value)"
                >{{ num.value }}</DefaultBtn
            >
        </div>
    </div>
</template>

<style scoped>
#main {
    display: grid;
    place-content: center;
    height: 93vh;
}

#calculator {
    width: 35vw;
    min-width: 358.4px;
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
    font-family: var(--text-font);
}

#view {
    grid-column: 1 / 5;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-color: var(--text-color);
    margin: 5px;
    border-radius: 2vw;
    padding: 5%;
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

button {
    margin: 5px;
    background-color: var(--text-color);
    color: var(--input-color);
    border-radius: 2vw;
    border: none;
}

button:hover {
    transform: none;
    color: var(--main-color);
    background-color: var(--text-color);
}

.wide {
    grid-column: span 2;
}
</style>
