<script setup>
import { ref } from 'vue'
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import IButton from '../IButton/IButton.vue'
const btnVariant = ref('gradient')

const changeBtnVar = () => {
  btnVariant.value = btnVariant.value === 'gradient' ? 'outline' : 'gradient'
}
</script>

<template>
  <div class="px-6">
    <div class="text-grey mb-4">Додані маркери {{ counter }}</div>
    <FavoritePlace v-for="n in 4" :key="n" />
    <IButton class="w-full mt-10" :variant="btnVariant" @click="changeBtnVar"
      >Додати маркер</IButton
    >
  </div>
</template>
