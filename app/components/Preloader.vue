<template>
  <Transition name="fade">
    <div v-if="isVisible" class="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg)] overflow-hidden pointer-events-none">
      <!-- Animated Star -->
      <div class="relative">
        <svg 
          class="w-24 h-24 text-[var(--accent)] animate-star-load" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const isVisible = ref(true)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = false
  }, 1900) // Updated for faster 1.8s animation
})
</script>

<style scoped>
.fade-leave-active {
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-leave-to {
  opacity: 0;
}
</style>
