<script setup>
import { ref } from 'vue'
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import IButton from '../IButton/IButton.vue'
import IInput from '../IInput/IInput.vue'
const btnVariant = ref('gradient')

const changeBtnVar = () => {
  btnVariant.value = btnVariant.value === 'gradient' ? 'outline' : 'gradient'
}
</script>

<template>
  <div class="px-6">
    <div class="text-grey mb-4">Додані маркери {{ counter }}</div>
    <div class="py-5">
      <IInput label="Some label" />
      <a href="/" class="text-bolt" @click.prevent="() => console.log('prevent')">click</a>
    </div>
    <FavoritePlace v-for="n in 4" :key="n" />
    <IButton class="w-full mt-10" :variant="btnVariant" @click="changeBtnVar"
      >Додати маркер</IButton
    >
  </div>
</template>
