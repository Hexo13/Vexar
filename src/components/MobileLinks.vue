<script setup>
import { RouterLink } from "vue-router";
</script>

<script>
export default {
    props: ["nav"],
    data() {
        return {
            transform: true,
        }
    },
    watch: {
        nav: {
            handler() {
                this.transform = this.nav ? false : true
            }
        }
    }
}
</script>

<template>
    <ul id="links" :class="{transformed: transform}">
        <li>
            <RouterLink to="/talk" @click="$emit('redirect')"
                >Talk Talk</RouterLink
            >
        </li>
        <li>
            <RouterLink to="/todos" @click="$emit('redirect')"
                >Todos</RouterLink
            >
        </li>
        <li>
            <RouterLink to="/games" @click="$emit('redirect')"
                >Games</RouterLink
            >
        </li>
        <li>
            <RouterLink to="/tools" @click="$emit('redirect')"
                >Tools</RouterLink
            >
        </li>
    </ul>
</template>

<style scoped>
#links {
    background-color: var(--input-color);
    border-left-color: var(--border-color);
    border-left-style: solid;
    border-left-width: 2px;
    position: fixed;
    top: 7vh;
    right: 0px;
    width: 40vw;
    height: 97%;
    padding: 0px;
    transition: 0.5s;
}

li {
    text-align: right;
    margin: 5%;
    list-style-type: none;
}

a {
    text-align: right;
    background-color: var(--input-color);
    border-radius: 0.5vh;
    text-decoration: none;
    color: var(--text-color);
    font-family: var(--text-header-font);
    padding: 0.2rem;
}

.transformed {
    transform: translateX(40vw);
}
</style>
