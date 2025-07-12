<script setup>
import LoginForm from './components/Auth/LoginForm/LoginForm.vue'
import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue'

// import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'
</script>
<template>
  <!-- <FavoritePlaces /> -->

  <RegistrationForm @submit="console.log" />
  <LoginForm @submit="console.log" />
</template>
