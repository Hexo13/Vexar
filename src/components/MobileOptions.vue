<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <ul id="links">
        <li>
            <RouterLink to="/"><button id="logo"></button></RouterLink>
        </li>
        <li><button id="hamburger" @click="$emit('hamburger')"></button></li>
    </ul>
</template>

<style scoped>
#links {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style-type: none;
    padding-inline: 20px;
    width: 100vw;
    height: 100%;
    transition: 0.4s, ease-in;
}

li {
    display: grid;
    place-content: center;
}

a {
    background-color: var(--input-color);
    border-radius: 0.5vh;
    text-decoration: none;
    transition: 0.4s ease-in;
    color: var(--text-color);
    font-family: var(--text-header-font);
    padding: 0.2rem;
    max-height: 6vh;
}

a:hover {
    background-color: var(--main-color);
    border-radius: 1.5vh;
    transition: 0.4s ease-in;
    color: var(--background-color);
}

#logo {
    background-image: url("/vexar.svg");
    background-color: transparent;
    width: 15em;
    height: 3em;
    background-size: cover;
    background-position: center;
    border: none;
}

#hamburger {
    width: 3em;
    height: 3em;
    background-image: url("/hamburger.svg");
    background-color: transparent;
    border-radius: 1vw;
    border: none;
    transition: 0.4s ease-in;
}

#hamburger:hover {
    background-color: var(--main-color);
    transition: 0.4s ease-in;
}
</style>
