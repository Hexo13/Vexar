<script>
export default {
    props: {
        header: String,
    },
};
</script>

<template>
    <section>
        <h1>{{ header }}</h1>
        <p><slot></slot></p>
    </section>
</template>

<style>
section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1em;
    border-bottom-width: 2px;
    border-bottom-color: var(--border-color);
}

h1 {
    color: var(--main-color);
    font-size: var(--text-header-size);
}

p {
    color: var(--text-color);
    font-size: var(--text-size);
    text-indent: 5%;
}
</style>
