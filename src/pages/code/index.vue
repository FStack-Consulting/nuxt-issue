<template>
    <div class="code-index">
        <h1>penis</h1>
    </div>
</template>

<script setup>
const route = useRoute();
const props = defineProps({
    number: {
        type: Number,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

const { number, text } = toRefs(props);

console.log(props)
const id = route.params.id;
</script>
