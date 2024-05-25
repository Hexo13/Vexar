<script>
export default {
    props: ["modelValue"],
    emits: ["update:modelValue"],
};
</script>

<template>
    <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<style scoped>
input {
    background-color: var(--input-color);
    border-width: 2px;
    border-color: var(--border-color);
    border-style: solid;
    border-radius: 1vw;
    font-family: var(--text-font);
    font-size: var(--text-size);
    color: var(--text-color);
}
</style>
