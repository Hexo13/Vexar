<script setup>
    import { RouterLink } from "vue-router";
</script>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            
        }
    }
</script>

<template>
    <header>
        <ul id="links">
            <li><RouterLink to="/">Vexar</RouterLink></li>
            <li><RouterLink to="/talk">Talk Talk</RouterLink></li>
            <li><RouterLink to="/todos">Todos</RouterLink></li>
            <li><RouterLink to="/minecraft">Minecraft</RouterLink></li>
        </ul>
        <button id="hamburger"></button>
    </header>
</template>

<style scoped>
    header {
        background-color: var(--background-color);
        border: none;
        border-bottom-color: var(--border-color);
        border-bottom-style: solid;
        border-bottom-width: 2px;
        font-size: var(--text-header-size);
        position: fixed;
        width: 100%;
        top: 0;
        bottom: 93vh;
        left: 0;
        right: 0;
        z-index: 1;
        display: grid;
        place-content: center;
    }

    #links {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        list-style-type: none;
        width: 100vw;
        height: 100%;
    }

    li {
        padding: 20px;
    }

    a {
        background-color: var(--input-color);
        border-radius: 0.5vw;
        text-decoration: none;
        transition: 0.4s;
        color: var(--text-color);
        font-family: var(--text-header-font);
        padding: 5px;
    }

    a:hover {
        background-color: #0a0;
        border-radius: 1.5vw;
        transition: 0.4s;
        color: var(--background-color);
    }

    #hamburger {
        display: none;
        width: 1em;
        height: 1em;
        background-image: url("../../public/Hamburger.svg");
        background-color: transparent;
        border: none;
    }

    @media (orientation: portrait) {
        #links {
            display: none;
        }
        #hamburger {
            display: inline;
        }
    }
</style>