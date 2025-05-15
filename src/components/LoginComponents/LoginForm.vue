<template>
  <div class="flex h-full flex-row justify-center">
    <div class="my-auto login_page h-full flex flex-col items-center gap-8">
      <div class="flex justify-between w-full">
        <img src="@/assets/club-employes.png" alt="company name" />
        <div class="w-full"></div>
      </div>
      <div class="text-center">
        <h2 class="mb-2">{{ $t('login.welcome') }} 👋</h2>
        <div class="text-sm">{{ $t('login.login_description') }}</div>
      </div>

      <div class="login_page-email_wrapper w-full">
        <div
          v-if="activeStep != 1"
          class="text--ce-color-blue-500 flex items-center gap-1 cursor-pointer justify-center mb-4"
          @click="goToStepOne"
        >
          <FontAwesomeIcon :icon="faRotateBack" />
          <p>{{ $t('login_page.go_back_to_email') }}</p>
        </div>
        <p class="mb-1">{{ $t('global.email') }}</p>
        <CustomInput
          v-model="email"
          :placeholder="$t('login.email_placeholder')"
          :has-error="emailHasError"
          :error-message="$t('login_page.email_required')"
          :disabled="activeStep != 1"
        />
      </div>
      <div v-if="activeStep === 2" class="login_page-password_wrapper w-full">
        <p class="mb-1">{{ $t('global.password') }}</p>
        <!-- TO_DO add custom password field into our custom input -->
        <CustomPasswordInput
          v-model="password"
          :placeholder="$t('login.password_placeholder')"
          :has-error="passwordHasError"
          :error-message="$t('login_page.password_required')"
        />
      </div>

      <div class="flex justify-between w-full">
        <CustomCheckBox v-model="isRememberMeActive">
          <p>{{ $t('login.remember_login') }}</p>
        </CustomCheckBox>
      </div>
      <div>
        <p class="text--ce-color-blue-500 cursor-pointer">{{ $t('login.forgotten_password') }}</p>
      </div>
      <div v-if="badCredentials" class="login_page-error_message">
        <!-- TO_DO add warning icon -->
        <p>{{ $t('login.wrong_credentials') }}</p>
      </div>
      <CustomButton :disabled="isButtonDisabled" @click="handleValidation">
        Se connecter
      </CustomButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CustomButton, CustomCheckBox, CustomInput, CustomPasswordInput } from '@/components/global'
import { isValidEmail } from '@/helpers'
import { faRotateBack } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed, ref } from 'vue'

const activeStep = ref<1 | 2>(1)
const email = ref<string>()
const password = ref<string>()
const isRememberMeActive = ref<boolean>(false)
const badCredentials = ref<boolean>(false)

const handleValidation = () => {
  switch (activeStep.value) {
    case 1:
      return handleStepOne()

    case 2:
      return handleStepTwo()
  }
}
const handleStepOne = () => {
  if (isButtonDisabled.value) return
  activeStep.value = 2
}
const handleStepTwo = () => {}

const emailHasError = computed(() => {
  return email.value === ''
})

const passwordHasError = computed(() => {
  return password.value === ''
})

const isButtonDisabled = computed(() => {
  switch (activeStep.value) {
    case 1:
      return !isValidEmail(email.value)
    case 2:
      return !password.value?.length || password.value?.length < 6
  }
})

const goToStepOne = () => {
  password.value = undefined
  activeStep.value = 1
}
</script>

<style lang="scss" scoped>
.login_page {
}
</style>
