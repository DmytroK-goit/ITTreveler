<script setup>
import { defineProps } from 'vue'

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
const bgStyles =
  props.variant === 'gradient' ? 'bg-gradient-to-r from-[#FFA279] to-[#F3743D]' : 'bg-[#FFA279]'
</script>

<template>
  <button class="rounded-xl py-[14px] px-10 text-white font-bold tracking-wider" :class="bgStyles">
    <slot></slot>
  </button>
</template>
