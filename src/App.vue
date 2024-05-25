<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<script>
    export default {
        data() {
            return {
                switch: false,
            }
        }
    }
</script>

<template>
    <NavBar switch="{ clickOff }"/>
    <div id="content" @click="clickOff = !clickOff">
        <RouterView />
    </div>
</template>

<style scoped>
#content {
    position: relative;
    margin: 0px;
    top: 7vh;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>
