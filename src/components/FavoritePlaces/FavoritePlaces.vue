<script setup>
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import IButton from '../IButton/IButton.vue'
import { ref } from 'vue'

const counter = ref(0)
const user = ref({ name: 'Іван', age: '14' })

const inc = () => {
  counter.value += 1
}

const changeUser = () => {
  user.value = { name: 'Петро', age: '15' }
}
</script>

<template>
  <div class="px-6">
    <div class="text-grey">{{ user.name }}</div>
    <div class="text-grey mb-4">Додані маркери {{ counter }}</div>
    <FavoritePlace v-for="n in 4" :key="n" />
    <IButton class="w-full mt-10" @click="inc">Додати маркер</IButton>
    <IButton class="w-full mt-10" @click="changeUser">Додати маркер</IButton>
  </div>
</template>
