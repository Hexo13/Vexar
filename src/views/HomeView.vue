<script setup>
import DefaultSection from "../components/DefaultSection.vue";
</script>

<template>
    <div id="main">
        <DefaultSection header="Vexar"
            >This is a vue website that i'm just experimenting with. There are
            different projects on each page of the site. It is just completely
            plain Vue JS, see for your self,
            <a href="https://github.com/Hexo13/Vexar">here's the repository</a>.
            If you have any sugestions tell me!</DefaultSection
        >
    </div>
</template>

<style scoped>
#main {
    font-family: var(--text-font);
    font-size: var(--text-size);
    color: var(--text-color);
    margin-inline: 5%;
    margin-top: 2%;
}

a {
    color: var(--main-color);
    text-decoration: none;
}
</style>
