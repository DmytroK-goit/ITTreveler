<script setup>
import FavoritePlace from './components/FavoritePlace/FavoritePlace.vue'
import HomepageView from './views/HomepageView.vue'

// const isDesktop = window.innerWidth > 1024
// const handleResize = () => {
//   isDesktop.value = window.innerWidth > 1024
// }
// const isTablet = window.innerWidth <= 1024 && window.innerWidth > 748
</script>
<template>
  <!-- <div :key="fruit" v-for="(fruit, index) in fruits">{{ index }}- {{ fruit }}</div>
  <div :key="fruit" v-for="(fruit, key) in fruitsMap">{{ key }}-{{ fruit }}</div>
  <div :key="ch" v-for="ch in 'Pruvit'">{{ ch }}</div> -->

  <!-- <HomepageView /> -->
  <FavoritePlace />
</template>
