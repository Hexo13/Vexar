<script setup>
import MainLinks from "./MainLinks.vue";
import MobileOptions from "./MobileOptions.vue";
import MobileLinks from "./MobileLinks.vue";
</script>

<script>
export default {
    created() {
        window.addEventListener("resize", () => {
            this.isMobile = window.innerWidth < 1024;
            console.log(this.isMobile);
        });
    },
    props: {
        switch: Boolean,
    },
    data() {
        return {
            nav: false,
            isMobile: window.innerWidth < 1024,
        };
    },
    watch: {
        switch() {
            this.nav = false;
        },
    },
};
</script>

<template>
    <header>
        <MainLinks v-if="!isMobile" />
        <MobileOptions v-if="isMobile" @hamburger="nav = !nav" nav="nav"/>
        <MobileLinks v-if="isMobile && nav" @redirect="nav = !nav"/>
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
    height: 7vh;
    top: 0;
    bottom: 93vh;
    left: 0;
    right: 0;
    z-index: 1;
    display: grid;
    place-content: center;
}
</style>
