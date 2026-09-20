<template>
    <button class="custom-btn">
        {{ label }}
    </button>
</template>

<script setup>
const props = defineProps({
    label: {
        type: String,
        default: "Button"
    },
    type: {
        type: String,
        default: "button"
    },
    variant: {
        type: String,
        default: "primary"
    },
    size: {
        type: String,
        default: "md"
    },
    loading: {
        type: Boolean,
        default: false
    }
});
</script>

<style scoped>
.custom-btn {
    padding: 0.5rem 1rem;
    border-radius: 8px;
    border: none;
    background-color: var(--primary-color);
    color: #ffffff;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.custom-btn:hover {
    background-color: #2563eb;
}
</style>