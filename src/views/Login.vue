<script setup>
import LoginForm from '@/components/Auth/LoginForm/LoginForm.vue'
import { loginUser } from '@/api/user'
import { useRouter } from 'vue-router'
import { useMutation } from '@/composables/useMutation'

const router = useRouter()
const {
  isLoading,
  error,
  mutation: handleLogin,
} = useMutation({
  mutationfn: loginUser,
  onSuccess: () => router.replace('/map'),
})

// const handleLogin = async (userData) => {
//   isLoading.value = true
//   try {
//     await loginUser(userData)
//     router.replace('/map')
//   } catch (error) {
//     console.error(error)
//   } finally {
//     isLoading.value = false
//   }
// }
</script>
<template>
  <LoginForm @submit="handleLogin" :is-loading="isLoading" />
  <div v-if="error" class="text-red-500">{{ error.message }}</div>
</template>
