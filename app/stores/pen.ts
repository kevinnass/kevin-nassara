import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePenStore = defineStore('pen', () => {
  const activeId = ref<string | null>(null)
  const queue = ref<string[]>([])

  const register = (id: string) => {
    if (!queue.value.includes(id)) {
      queue.value.push(id)
    }
    if (activeId.value === null) {
      activeId.value = id
    }
  }

  const finish = (id: string) => {
    if (activeId.value === id) {
      queue.value = queue.value.filter(item => item !== id)
      activeId.value = queue.value[0] || null
    }
  }

  const reset = () => {
    activeId.value = null
    queue.value = []
  }

  return { activeId, register, finish, reset }
})
