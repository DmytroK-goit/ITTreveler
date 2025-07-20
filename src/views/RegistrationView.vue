<script setup>
import RegistrationForm from '@/components/Auth/RegistrationForm/RegistrationForm.vue'
import { registerUser } from '@/api/user'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const isLoading = ref(false)

const handleRegistration = async (userData) => {
  isLoading.value = true
  try {
    await registerUser(userData)

    router.replace('/map')
  } catch (error) {
    console.error('Registration failed:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <RegistrationForm @submit="handleRegistration" :is-loading="isLoading" />
</template>
