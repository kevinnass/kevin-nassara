<template>
  <div 
    class="fixed pointer-events-none z-[9999] hidden md:block"
    :style="{
      left: `${x}px`,
      top: `${y}px`,
      transform: 'translate(-50%, -50%)'
    }"
  >
    <svg 
      class="w-10 h-10 text-[var(--accent)] animate-star-rotate drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)]" 
      :style="{ '--rotate-speed': isHovering ? '0.8s' : '4s' }"
      viewBox="0 0 24 24" 
      fill="currentColor"
      stroke="white"
      stroke-width="0.5"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
    
    <!-- Subtle Trail/Glow -->
    <div 
      class="absolute inset-0 bg-[var(--accent)] blur-lg opacity-30 rounded-full transition-transform duration-300"
      :class="isHovering ? 'scale-150' : 'scale-75'"
    ></div>
  </div>
</template>

<script setup lang="ts">
const x = ref(-100)
const y = ref(-100)
const isHovering = ref(false)

const handleMouseMove = (e: MouseEvent) => {
  x.value = e.clientX
  y.value = e.clientY
  
  // Check if hovering interactive element
  const target = e.target as HTMLElement
  const isClickable = target.closest('a, button, [role="button"], input, select, textarea')
  isHovering.value = !!isClickable
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>
