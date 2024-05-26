<script setup>
import { GoogleGenerativeAI } from "@google/generative-ai";
import { RouterLink } from "vue-router";
import DefaultInput from "../components/DefaultInput.vue";
import DefaultSection from "../components/DefaultSection.vue";
import DefaultBtn from "../components/DefaultBtn.vue";
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
            if (prompt !== "") {
                this.input = "";
                this.answer = "Generating...";
                const model = this.genAI.getGenerativeModel({
                    model: "gemini-1.5-flash",
                });

                const result = await model.generateContent(
                    prompt + "(The answer must be shorter than 25 words)",
                );
                const response = await result.response;
                this.answer = response.text();
            } else {
                this.answer = "Please ask a question";
            }
        },
    },
};
</script>

<template>
    <div id="main">
        <DefaultSection header="Chat with Gemini"></DefaultSection>
        <RouterLink to="../tools"><DefaultBtn id="back"></DefaultBtn></RouterLink>
        <form @submit.prevent="generateResponse(input)" id="form">
            <DefaultInput v-model="input" id="prompt" />
        </form>
        <DefaultSection>{{ answer }}</DefaultSection>
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

#back {
    position: fixed;
    top: 10%;
    left: 1%;
    width: 1.5em;
    height: 1.5em;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("/back.svg");
    background-color: transparent;
    border: none;
}

#prompt {
    width: 100%;
    font-size: var(--text-size);
}

#response {
    margin: 5%;
    font-size: var(--text-size);
}
</style>
