<script setup>
import { RouterLink } from "vue-router";
import gsap from "gsap";
</script>

<script>
export default {
    props: {
        nav: Boolean
    },
    methods: {
        hamburger() {
            if(this.nav) {
                this.hamClose()
            } else {
                this.hamOpen()
            }
            this.$emit("hamburger")
        },
        hamOpen() {
            gsap.to("#line2", {x: -500, opacity: 0, duration: 0.25})
            gsap.to('#line1', {transformOrigin: "50% 50%", rotation: 45, y: 250, duration: 0.25, delay: 0.25})
            gsap.to('#line3', {transformOrigin: "50% 50%", rotation: -45, y: -250, duration: 0.25, delay: 0.25})
        },
        hamClose() {
            gsap.to('#line1', {rotation: 0, y: 0, duration: 0.25})
            gsap.to('#line3', {rotation: 0, y: 0, duration: 0.25})
            gsap.to("#line2", {x: 0, opacity: 100, duration: 0.25, delay: 0.25})
        }
    }
}
</script>

<template>
    <ul id="links">
        <li>
            <RouterLink to="/" id="logo"></RouterLink>
        </li>
        <li>
            <button id="hamburger" @click="hamburger()">
                <svg version="1.1" viewBox="0.0 0.0 1000.0 1000.0" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="#00aa00" d="m94.88189 180.00394l810.2362 0l0 128.78741l-810.2362 0z" id="line1"/>
                        <path fill="#00aa00" d="m94.88189 435.60587l810.2362 0l0 128.78738l-810.2362 0z" id="line2"/>
                        <path fill="#00aa00" d="m94.88189 691.2078l810.2362 0l0 128.78735l-810.2362 0z" id="line3"/>
                    </g>
                </svg>
            </button>
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

#hamburger {
    width: 3em;
    height: 3em;
    background-color: transparent;
    border-radius: 1vw;
    border: none;
    transition: 0.4s ease-in;
    display: grid;
    justify-content: center;
}

svg {
    width: 3em;
    height: 3em;
}
</style>
