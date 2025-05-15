<template>
  <CustomInput
    v-model:model-value="model"
    :placeholder="placeholder"
    :error-message="errorMessage"
    :has-error="hasError"
    :disabled="disabled"
    :type="isVisible ? 'text' : 'password'"
  >
    <template v-slot:suffix>
      <div
        class="custom_password_input-icon_wrapper cursor-pointer mx-2"
        @click="isVisible = !isVisible"
      >
        <FontAwesomeIcon
          class="custom_password_input-icon"
          :icon="isVisible ? faEyeSlash : faEye"
        />
      </div>
    </template>
  </CustomInput>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import CustomInput from './CustomInput.vue'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { ref } from 'vue'

const model = defineModel()

defineProps({
  placeholder: { type: String, default: '' },
  errorMessage: { type: String, default: '' },
  hasError: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
})

const isVisible = ref<boolean>(false)
</script>

<style lang="scss" scoped>
.custom_password_input {
  &-icon_wrapper {
    position: relative;
  }
  &-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
}
</style>
