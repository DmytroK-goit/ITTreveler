<script setup>
import { ref } from 'vue'

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

defineEmits(['update:modelValue'])

const text = ref('')
const changeValue = (e) => {
  text.value = e.target.value
}
</script>

<template>
  <div class="w-full text-[#2c2c2c]">
    <label for="" class="block">
      <span class="block text-xs px-3 mb-2">{{ props.label }}</span>
      <input
        class="w-full text-sm rounded-[4px] border-[1px] py-2 px-3 focus:outline-primary"
        v-bind="{ ...$props, ...$attrs }"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <!-- пропси :type="props.type" :placeholder="props.placeholder" всі пропси v-bind="props"-->
    </label>
  </div>
</template>
