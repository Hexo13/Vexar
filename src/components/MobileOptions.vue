<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <ul id="links">
        <li>
            <RouterLink to="/" id="logo"></RouterLink>
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

#logo {
    background-image: url("/vexar.svg");
    background-color: transparent;
    width: 7.5em;
    height: 1.5em;
    background-size: cover;
    background-position: center;
    transition: 0.4s ease-in;
    border: none;
    border-radius: 1vw;
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
</style>
