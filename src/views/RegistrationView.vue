<script setup>
import RegistrationForm from '@/components/Auth/RegistrationForm/RegistrationForm.vue'
import { useRouter } from 'vue-router'
import { useMutation } from '@/composables/useMutation'
import { authService } from '@/api/authService'

const router = useRouter()
const {
  isLoading,
  error,
  mutation: handleRegistration,
} = useMutation({
  mutationfn: (data) => authService.registerUser(data),
  onSuccess: () => router.replace('/map'),
})
</script>

<template>
  <RegistrationForm @submit="handleRegistration" :is-loading="isLoading" />
  <div v-if="error" class="text-red-500">{{ error.message }}</div>
</template>
