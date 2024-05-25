<script setup>
import { GoogleGenerativeAI } from "@google/generative-ai";
</script>

<script>
export default {
    mounted() {
        // Fetch your API_KEY
        const API_KEY = "AIzaSyCvm9yuZzoBqIJqW7ZbuJ-3MsgOrGSCIRA";

        // Access your API key (see "Set up your API key" above)
        const genAI = new GoogleGenerativeAI(API_KEY);

        // ...

        async function run() {
            // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
            const model = genAI.getGenerativeModel({
                model: "gemini-1.5-flash",
            });

            const prompt = "Write a story about a magic backpack.";

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            console.log(text);
        }

        run();
    },
};
</script>
<template>
    <div id="main">
        <h1>MINECRAFT!!!</h1>
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
</style>
