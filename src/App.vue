<script setup>
import { ref } from 'vue'
import LoginForm from './components/Auth/LoginForm/LoginForm.vue'
import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue'
import IModal from './components/IModal/IModal.vue'

const isOpen = ref(true)
const closeModal = () => {
  isOpen.value = false
}

const openModal = () => {
  isOpen.value = true
}
</script>
<template>
  <!-- <FavoritePlaces /> -->
  <button @click="openModal">OpenModal</button>

  <RegistrationForm @submit="console.log" />
  <LoginForm @submit="console.log" />

  <IModal v-if="isOpen" @close="closeModal"> </IModal>
</template>
