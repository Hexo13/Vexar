<script>
export default {
    data() {
        return {
            todo: "",
            todos: [],
        };
    },
    methods: {
        addTodo() {},
    },
};
</script>

<template>
    <div id="main">
        <input v-model="todo" />
    </div>
</template>

<style scoped>
#main {
    margin-inline: 5%;
}
</style>
