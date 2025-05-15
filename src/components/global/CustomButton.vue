<template>
    <div :class="computedClass" @click="handleSubmit">
        <slot>{{ title }}</slot>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const emit = defineEmits(['click'])

const props = defineProps({
    title: { type: String, default: '' },
    disabled: { type: Boolean, default: false }
})

const handleSubmit = () => {
    if (props.disabled) return
    emit('click')
}

const computedClass = computed(() => {
    return {
        "custom-button py-3 px-4 text-to-be-changed-1": true,
        'disabled': props.disabled
    }
})

</script>

<style lang="scss" scoped>
.custom-button {
    border-radius: 100px;
    color: var(--ce-color-light-100);
    background: var(--ce-color-blue-500);
    text-align: center;

    &.disabled {
        cursor: not-allowed;
        color: var(--ce-brand-text-input_empty);
        background: var(--ce-brand-outline-grey-rgb);
    }

    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
}
</style>