<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
    },
})
</script>

<template>
    <button>{{ props.text }}</button>
</template>

<style scoped lang="scss">
button {
    font-family: Roboto;
    background: $primary_button;
    border-radius: 25px;
    color: white;
    font-weight: bolder;
    border: none;
    padding: 10px 20px;
    font-size: 20px;
    transition: all 0.3s ease-in;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 2px 2px #555555;
        background: #0758db;
    }
}
</style>
