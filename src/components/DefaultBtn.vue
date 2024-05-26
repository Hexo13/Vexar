<script>
export default {
    props: {
        text: String,
    },
};
</script>

<template>
    <button><slot></slot></button>
</template>

<style scoped>
button {
    background-color: var(--input-color);
    border-width: 2px;
    border-color: var(--border-color);
    border-style: solid;
    border-radius: 1vw;
    font-family: var(--text-font);
    font-size: var(--text-size);
    color: var(--text-color);
    transition: 0.2s ease-in;
}

button:hover {
    background-color: var(--main-color);
    color: var(--background-color);
    transform: scale(1.1);
    transition: 0.2s ease-in;
}
</style>
