<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<script>
export default {
    data() {
        return {
            clickOff: false,
        };
    },
};
</script>

<template>
    <NavBar :switch="clickOff" />
    <div id="content" @click="clickOff = !clickOff">
        <RouterView />
    </div>
</template>

<style scoped>
#content {
    position: absolute;
    margin: 0px;
    top: 7vh;
    bottom: 0;
    left: 0;
    right: 0;
    height: 93vh;
}
</style>
