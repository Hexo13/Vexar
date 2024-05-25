<script setup>
import DefaultBtn from "../components/DefaultBtn.vue";
import DefaultInput from "../components/DefaultInput.vue";
</script>

<script>
let id = 0;

export default {
    data() {
        return {
            todo: "",
            todos: [],
        };
    },
    methods: {
        addTodo() {
            if (this.todo != "") {
                this.todos.push({
                    todo: this.todo,
                    id: id++,
                });
                this.todo = "";
            }
        },
        removeTodo(todo) {
            this.todos = this.todos.filter((filterTodo) => {
                return todo.id !== filterTodo.id;
            });
        },
    },
};
</script>

<template>
    <div id="main">
        <form @submit.prevent="addTodo()" id="todoform">
            <DefaultInput v-model="todo" />
            <DefaultBtn type="submit">Add todo</DefaultBtn>
        </form>
        <ul id="todoList">
            <li v-for="todo in todos" :key="todo.id">
                {{ todo.todo }}
                <DefaultBtn @click="removeTodo(todo)" class="removebtn"
                    >X</DefaultBtn
                >
            </li>
        </ul>
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

#todoform {
    display: flex;
    justify-content: space-between;
}

#todoList {
    padding: 0px;
}

li {
    font-size: var(--text-size);
    display: flex;
    justify-content: space-between;
    margin: 5%;
}

.removebtn {
    border-radius: 100%;
    font-size: 1.4em;
    width: 1.4em;
    height: 1.4em;
}

.removebtn:hover {
    transform: scale(1.1);
}
</style>
