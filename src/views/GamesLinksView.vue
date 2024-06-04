<script setup>
import { RouterLink } from "vue-router";
import DefaultBtn from "../components/DefaultBtn.vue";
</script>

<template>
    <div id="main">
        <div id="links">
            <RouterLink to="/games/ticktacktoe"
                ><DefaultBtn class="toolBtn"
                    ><h1>Tick Tack Toe</h1></DefaultBtn
                ></RouterLink
            >
        </div>
    </div>
</template>

<style scoped>
#main {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    font-size: var(--text-size);
}

#links {
    width: 75vw;
    height: 10em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.toolBtn {
    width: 10em;
    height: 100%;
    color: var(--text-color);
}

@media (max-width: 1024px) {
    #links {
        flex-direction: column;
        height: 75vh;
    }
    .toolBtn {
        height: 10em;
        width: 100%;
    }
}
</style>
