<script setup>
import HomepageView from './views/HomepageView.vue'

const fruits = ['kiwi', 'banana', 'apple', 'orange', 'grape']
const fruitsMap = {
  kiwi: 'Super kiwi',
  banana: 'Super banana',
  apple: 'Super apple',
  orange: 'Super orange',
  grape: 'Super grape',
}

// const isDesktop = window.innerWidth > 1024
// const handleResize = () => {
//   isDesktop.value = window.innerWidth > 1024
// }
// const isTablet = window.innerWidth <= 1024 && window.innerWidth > 748
</script>
<template>
  <div :key="fruit" v-for="(fruit, index) in fruits">{{ index }}- {{ fruit }}</div>
  <div :key="fruit" v-for="(fruit, key) in fruitsMap">{{ key }}-{{ fruit }}</div>
  <div :key="ch" v-for="ch in 'Pruvit'">{{ ch }}</div>

  <HomepageView />
</template>
