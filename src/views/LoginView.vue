<template>
    <div class="login-page flex">
        <div class="w-full">
            <LoginForm />
        </div>
        <div class="w-full">

        </div>
    </div>

</template>

<script setup lang="ts">
import { LoginForm } from '@/components/LoginComponents';

</script>

<style lang="scss" scoped>
.login-page {
    height: 100%;
    padding: 32px 20%;
    background: linear-gradient(0deg, var(--CE-Brand-Primaire-50, rgba(39, 92, 241, 0.04)) 0%, var(--CE-Brand-Primaire-50, rgba(39, 92, 241, 0.04)) 100%), #FFF;
}
</style>
