<template>
  <div :class="computedInputClasses">
    <slot name="prefix" />
    <input
      class="w-full"
      v-model="model"
      :disabled="disabled"
      :placeholder="placeholder"
      :type="type"
    />
    <slot name="suffix" />
  </div>
  <template v-if="!disabled">
    <div v-if="hasError" class="custom_input-error_message flex items-center gap-1">
      <div class="text--danger-dark">
        <FontAwesomeIcon :icon="faCircleExclamation" />
      </div>
      <p>{{ errorMessage }}</p>
    </div>
  </template>
</template>

<script setup lang="ts">
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed } from 'vue'

const model = defineModel()

const props = defineProps({
  placeholder: { type: String, default: '' },
  errorMessage: { type: String, default: '' },
  type: { type: String, default: 'text' },
  hasError: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
})

const computedInputClasses = computed(() => {
  let classes = 'custom_input py-3 px-4 flex items-center w-full gap-2'
  if (props.disabled) return (classes += ' disabled')
  if (props.hasError) classes += ' has_error'
  return classes
})
</script>

<style lang="scss" scoped>
.custom_input {
  border-radius: 12px;
  border: 1px solid var(--ce-brand-outline-grey);
  background: var(--ce-color-light-100);

  &.has_error {
    border-color: var(--outline-theme_light-danger_high_em);
    box-shadow:
      0px 2px 4px 0px rgba(17, 12, 34, 0.12),
      0px 0px 0px 4px #ffe0e0;
  }

  &.disabled {
    cursor: not-allowed;
    color: var(--ce-brand-text-input_empty);
    background: var(--ce-brand-outline-grey-rgb);
  }

  &-error_message {
    color: var(--outline-theme_light-danger_high_em);
  }

  input {
    all: unset;
    width: 100%;
  }
}
</style>
