<script setup>
import { defineProps, computed, toRef } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    required: true,
    validator: (value) => {
      return ['primary', 'gradient', 'outline'].includes(value)
    },
  },
})
const { variant } = toRef(props) //Деструктуризація пропсів

const bgStyles = computed(() => {
  return props.variant === 'gradient'
    ? 'bg-gradient-to-r from-[#FFA279] to-[#F3743D]'
    : 'bg-[#FFA279]'
}) //потрібно передавати variant.value
</script>

<template>
  <button class="rounded-xl py-[14px] px-10 text-white font-bold tracking-wider" :class="bgStyles">
    <slot></slot>
  </button>
</template>
