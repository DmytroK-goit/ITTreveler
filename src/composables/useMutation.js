import { ref } from 'vue'

export const useMutation = ({ mutationfn, onSuccess, onError }) => {
  const data = ref(null)
  const isLoading = ref(false)
  const error = ref(null)

  const mutation = async (...args) => {
    isLoading.value = true
    try {
      data.value = await mutationfn(...args)
      error.value = null
      onSuccess?.(data)
    } catch (e) {
      error.value = e
      onError?.(error)
    } finally {
      isLoading.value = false
    }
  }
  return {
    data,
    isLoading,
    error,
    mutation,
  }
}
