<script setup>
import { RouterLink } from "vue-router";
</script>

<script>
export default {
    created() {
        this.isMobile = window.innerWidth < 1024;
        this.nav = !this.isMobile;
        window.addEventListener("resize", () => {
            this.isMobile = window.innerWidth < 1024;
            this.nav = !this.isMobile;
        });
    },
    methods: {
        navigation() {
            this.nav = !this.nav;
        },
    },
};
</script>

<template>
    <header>
        <ul id="links" v-if="nav">
            <li><RouterLink to="/">Vexar</RouterLink></li>
            <li><RouterLink to="/talk">Talk Talk</RouterLink></li>
            <li><RouterLink to="/todos">Todos</RouterLink></li>
            <li><RouterLink to="/minecraft">Minecraft</RouterLink></li>
        </ul>
        <ul id="portrait">
            <li><RouterLink to="/">Vexar</RouterLink></li>
            <li><button id="hamburger" @click="navigation()"></button></li>
        </ul>
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
    padding-inline: 20px;
    width: 100vw;
}

#portrait {
    display: none;
    flex-direction: row;
    justify-content: space-between;
    list-style-type: none;
    padding-inline: 20px;
    width: 100vw;
    height: 100%;
}

li {
    display: grid;
    place-content: center;
}

a {
    background-color: var(--input-color);
    border-radius: 0.5vh;
    text-decoration: none;
    transition: 0.4s;
    color: var(--text-color);
    font-family: var(--text-header-font);
    padding: 0.2rem;
}

a:hover {
    background-color: #0a0;
    border-radius: 1.5vh;
    transition: 0.4s;
    color: var(--background-color);
}

#hamburger {
    width: 2em;
    height: 2em;
    background-image: url("../../public/Hamburger.svg");
    background-color: transparent;
    border: none;
}

@media (max-width: 1024px) {
    #links {
        background-color: var(--input-color);
        border-left-color: var(--border-color);
        border-left-style: solid;
        border-left-width: 2px;
        display: initial;
        position: fixed;
        top: 7vh;
        right: 0px;
        width: 50vw;
        height: 97%;
    }
    #portrait {
        display: flex;
    }
    a {
        padding: 3px;
    }
}
</style>
