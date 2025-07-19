<script setup>
import IButton from '@/components/IButton/IButton.vue'
import IInput from '@/components/IInput/IInput.vue'
import { reactive } from 'vue'

const emit = defineEmits(['submit'])
const userData = reactive({ email: '', password: '' })
</script>

<template>
  <form @submit.prevent="emit('submit', userData)">
    <IInput
      class="mb-4"
      label="Електронна пошта"
      placeholder="email@gmail.com"
      v-model="userData.email"
    />
    <IInput label="Пароль" type="password" placeholder="Пароль" v-model="userData.password" />

    <IButton class="mt-10 w-full" variant="gradient" type="submit">Увійти</IButton>
  </form>
</template>
