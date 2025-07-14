<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  type: {
    type: String,
    default: 'text',
  },
})

defineOptions({
  inheritAttrs: false, // щоб не передавати атрибути в input, а тільки ті, що вказані в props
})

const emit = defineEmits(['update:modelValue'])
const baseStyles =
  'w-full text-sm rounded-[4px] border-[1px] border-[#eaeaea] py-2 px-3 focus:outline-primary'

const isTextarea = computed(() => {
  return props.type === 'textarea'
})

const inputStyles = computed(() => {
  return isTextarea.value ? `${baseStyles} resize-none` : baseStyles
})
const componentName = computed(() => {
  return isTextarea.value ? 'textarea' : 'input'
})
const text = ref('')
const changeValue = (e) => {
  emit('update:modelValue', e.target.value)
}
</script>

<template>
  <div class="w-full text-[#2c2c2c]">
    <label for="" class="block">
      <span class="block text-xs px-3 mb-2">{{ props.label }}</span>
      <component
        :is="componentName"
        rows="3"
        :class="inputStyles"
        v-bind="{ ...$props, ...$attrs }"
        :value="modelValue"
        @input="changeValue"
      >
      </component>

      <!-- пропси :type="props.type" :placeholder="props.placeholder" всі пропси v-bind="props"-->
    </label>
  </div>
</template>
