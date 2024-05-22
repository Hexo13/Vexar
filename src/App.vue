<script setup>
    import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <header>
        <ul>
            <li><RouterLink to="/">Vexar</RouterLink></li>
            <li><RouterLink to="/talk">Talk Talk</RouterLink></li>
        </ul>
    </header>
    <div id="content">
        <RouterView />
    </div>
</template>

<style scoped>
* {
    margin: 0px;
}

header {
    background-color: var(--background-color);
    border: none;
    border-bottom-color: var(--border-color);
    border-bottom-style: solid;
    border-bottom-width: 2px;
    font-size: var(--text-header-size);
    position: fixed;
    width: 100%;
    top: 0;
    bottom: 93vh;
    left: 0;
    right: 0;
    z-index: 1;
    display: grid;
    place-content: center;
}

ul {
    display: flex;
    flex-direction: row;
    justify-content: left;
    gap: 10%;
    list-style-type: none;
    width: 100vw;
    height: 100%;
}

li {
    padding: 20px;
}

a {
    background-color: var(--input-color);
    border-radius: 0.5vw;
    text-decoration: none;
    color: var(--text-color);
    font-family: var(--text-header-font);
    padding: 5px;

}

a:hover {
    background-color: #0a0;
    border-radius: 1.5vw;
    color: var(--background-color);
}

#content {
    position: relative;
    margin: 0px;
    top: 7vh;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>
