<script setup>
import { computed, reactive } from 'vue'
import IButton from '../IButton/IButton.vue'
import MarkerIcon from '../icons/MarkerIcon.vue'
import IInput from '../IInput/IInput.vue'
import IModal from '../IModal/IModal.vue'
import InputImage from '../InputImage/InputImage.vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  hasError: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['close', 'submit'])
const formData = reactive({
  title: '',
  description: '',
  img: null,
})

const uploadText = computed(() => {
  return formData.img ? 'Натисніть тут, щоб змінити фото' : 'Натисніть тут, щоб додати фото'
})
const handleUpload = (url) => {
  formData.img = url
}

const resetForm = () => {
  formData.title = ''
  formData.description = ''
  formData.img = null
}
</script>
<template>
  <IModal v-if="props.isOpen" @close="emit('close')">
    <form @submit.prevent="emit('submit', formData, resetForm)" class="min-w-[412px]">
      <div class="font-bolt text-center flex justify-center gap-1 mb-10">
        <MarkerIcon /> Додати маркер
      </div>
      <IInput label="Локація" class="mb-4" v-model="formData.title" />
      <IInput type="textarea" label="Опис" class="mb-2" v-model="formData.description" />
      <div class="flex gap-2 items-center mb-10">
        <img
          v-if="formData.img"
          :src="formData.img"
          alt="prev Photo"
          class="w-8 h-8 object-cover"
        />
        <InputImage @uploaded="handleUpload">{{ uploadText }}</InputImage>
      </div>

      <IButton class="w-full" variant="primary" :is-loading="props.isLoading">Додати</IButton>
      <div v-if="props.hasError" class="text-red-500">Something wrong</div>
    </form>
  </IModal>
</template>
