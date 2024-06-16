<script setup>
import { RouterLink } from "vue-router";
</script>

<script>
export default {
    props: {
        nav: Boolean
    }
}
</script>

<template>
    <ul id="links">
        <li>
            <RouterLink to="/" id="logo"></RouterLink>
        </li>
        <li>
            <button id="hamburger" @click="$emit('hamburger')" v-show="!nav"></button>
            <button id="cross" @click="$emit('hamburger')" v-show="nav"></button>
        </li>
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

#hamburger, #cross {
    width: 3em;
    height: 3em;
    background-color: transparent;
    border-radius: 1vw;
    border: none;
    transition: 0.4s ease-in;
}

#hamburger {
    background-image: url("/hamburger.svg");
}

#cross {
    background-image: url("/cross.svg");
}
</style>
