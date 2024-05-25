<script setup>
import { GoogleGenerativeAI } from "@google/generative-ai";
import DefaultInput from "../components/DefaultInput.vue";
</script>

<script>
export default {
    mounted() {
        const API_KEY = "AIzaSyCvm9yuZzoBqIJqW7ZbuJ-3MsgOrGSCIRA";

        // Access your API key (see "Set up your API key" above)
        this.genAI = new GoogleGenerativeAI(API_KEY);
    },
    data() {
        return {
            input: "",
            answer: "Ask a question",
        };
    },
    methods: {
        async generateResponse(prompt) {
            if(prompt !== "") {
                this.input = ""
                this.answer = "Generating..."
                const model = this.genAI.getGenerativeModel({
                    model: "gemini-1.5-flash",
                });

                const result = await model.generateContent(
                    prompt + "(The answer must be shorter than 25 words)",
                );
                const response = await result.response;
                this.answer = response.text();
            } else {
                this.answer = "Please ask a question"
            }
        },
    },
};
</script>

<template>
    <div id="main">
        <form @submit.prevent="generateResponse(input)" id="form">
            <DefaultInput v-model="input" id="prompt" />
        </form>
        <p id="response">
            {{ answer }}
        </p>
    </div>
</template>

<style scoped>
#main {
    font-family: var(--text-font);
    font-size: var(--text-header-size);
    color: var(--text-color);
    margin-inline: 5%;
    margin-top: 2%;
}

#prompt {
    width: 100%;
    font-size: var(--text-size)
}

#response {
    margin: 5%;
    font-size: var(--text-size);
}
</style>
