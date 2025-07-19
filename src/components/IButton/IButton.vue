<script setup>
import { defineProps, computed, toRef } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    required: true,
    validator: (value) => {
      return ['primary', 'gradient', 'outline'].includes(value)
    },
  },
  to: String,
})
const { variant } = toRef(props) //Деструктуризація пропсів

const bgStyles = computed(() => {
  return props.variant === 'gradient'
    ? 'bg-gradient-to-r from-[#FFA279] to-[#F3743D]'
    : 'bg-[#FFA279]'
}) //потрібно передавати variant.value

const isLink = computed(() => !!props.to)

const componentName = computed(() => {
  return isLink.value ? RouterLink : 'button'
})

const link = computed(() => {
  return isLink.value ? props.to : undefined
})
</script>

<template>
  <component
    :is="componentName"
    class="rounded-xl py-[14px] px-10 text-white font-bold tracking-wider"
    :class="bgStyles"
    :to="link"
  >
    <slot></slot>
  </component>
</template>
