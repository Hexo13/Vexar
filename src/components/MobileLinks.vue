<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <ul id="links">
        <li><RouterLink to="/talk">Talk Talk</RouterLink></li>
        <li><RouterLink to="/todos">Todos</RouterLink></li>
        <li><RouterLink to="/minecraft">Minecraft</RouterLink></li>
        <li><RouterLink to="/search">Gemini</RouterLink></li>
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
    width: 30vw;
    height: 97%;
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
    transition: 0.4s ease-in;
    color: var(--text-color);
    font-family: var(--text-header-font);
    padding: 0.2rem;
}

a:hover {
    background-color: var(--main-color);
    border-radius: 1.5vh;
    transition: 0.4s ease-in;
    color: var(--background-color);
}
</style>
