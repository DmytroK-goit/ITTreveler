<script setup>
import RegistrationForm from '@/components/Auth/RegistrationForm/RegistrationForm.vue'
import { registerUser } from '@/api/user'
import { useRouter } from 'vue-router'
import { useMutation } from '@/composables/useMutation'

const router = useRouter()
const {
  isLoading,
  error,
  mutation: handleRegistration,
} = useMutation({
  mutationfn: registerUser,
  onSuccess: () => router.replace('/map'),
})

// const handleRegistration = async (userData) => {
//   isLoading.value = true
//   try {
//     await registerUser(userData)

//     router.replace('/map')
//   } catch (error) {
//     console.error('Registration failed:', error)
//   } finally {
//     isLoading.value = false
//   }
// }
</script>

<template>
  <RegistrationForm @submit="handleRegistration" :is-loading="isLoading" />
  <div v-if="error" class="text-red-500">{{ error.message }}</div>
</template>
