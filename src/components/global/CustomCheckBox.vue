<template>
  <div class="custom_checkbox-wrapper flex gap-2">
    <div :class="comptedCheckboxClasses" @click="handleClick">
      <div v-if="modelValue" class="custom_checkbox-icon">
        <FontAwesomeIcon :icon="faCheck" size="xs" />
      </div>
    </div>

    <slot name="default" />
  </div>
</template>

<script setup lang="ts">
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { computed } from 'vue';

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits(['update:modelValue'])

const comptedCheckboxClasses = computed(() => {
  let classes = "custom_checkbox"
  if (props.modelValue) classes += " active"
  return classes
})

const handleClick = () => {
  emit('update:modelValue', !props.modelValue)
}
</script>

<style lang="scss" scoped>
.custom_checkbox {
  position: relative;
  width: 16px;
  height: 16px;
  min-width: 16px;
  max-width: 16px;
  min-height: 16px;
  max-height: 16px;
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;
  transform: translateY(25%);
  border: 2px solid var(--ce-brand-outline-grey-rgb);

  &-wrapper {}

  &:hover {
    border-color: var(--ce-brand-text-input_empty);
  }

  &-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  &.active {
    color: var(--ce-color-light-100);
    background: var(--ce-color-blue-500);
    border-color: var(--ce-color-blue-500);
  }
}
</style>
