<script>
export default {
    data() {
        return {
            talk: "",
        };
    },
};
</script>

<template>
    <div id="main">
        <h1 id="title">Talk to someone spying on you</h1>
        <section id="talk">
            <p id="display">{{ talk }}</p>
            <textarea
                v-model="talk"
                placeholder="Say something..."
                id="input"
            ></textarea>
        </section>
    </div>
</template>

<style scoped>
#main {
    font-family: var(--text-font);
    font-size: var(--text-header-size);
    color: var(--text-color);
    margin: 5%;
    margin-top: 2%;
}

#title {
    font-family: var(--text-header-font);
    margin-bottom: 5%;
}

#talk {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

#display {
    white-space: pre-line;
    margin-right: 5%;
    font-size: var(--text-header-size);
}

#input {
    font-family: var(--text-font);
    font-size: var(--text-size);
    color: var(--text-color);
    background-color: var(--input-color);
    border-width: 1px;
    border-color: var(--border-color);
    border-radius: 1vw;
    height: 75vh;
    width: 50%;
    max-width: 50%;
    min-width: 25%;
    margin-left: 5%;
}
</style>
