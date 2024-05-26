<script setup>
import { RouterLink } from "vue-router"
</script>

<template>
    <div id="main">
        <div id="links">
            <RouterLink to="/tools/gemini">Gemini</RouterLink> 
            <RouterLink to="/tools/calculator">Calculator</RouterLink>
        </div>
    </div>
</template>

<style scoped>
    #main {
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
    }

    #links {
        width: 50vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>