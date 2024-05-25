<script setup>
import { RouterLink } from "vue-router";
</script>

<script>
export default {
    props: {
        nav: String,
    },
};
</script>

<template>
    <ul id="links">
        <li>
            <RouterLink to="/" id="logo"></RouterLink>
        </li>
        <li><RouterLink to="/talk">Talk Talk</RouterLink></li>
        <li><RouterLink to="/todos">Todos</RouterLink></li>
        <li><RouterLink to="/minecraft">Minecraft</RouterLink></li>
        <li><RouterLink to="/search">Gemini</RouterLink></li>
    </ul>
</template>

<style scoped>
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

#logo:hover {
    background-color: var(--main-color);
    transition: 0.4s ease-in;
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
</style>
