<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import gsap from 'gsap'
import { usePenStore } from '~/stores/pen'

const props = defineProps<{
  text: string
  delay?: number
  speed?: number
}>()

const penStore = usePenStore()
const instanceId = Math.random().toString(36).substr(2, 9)

const displayedText = ref('')
const penRef = ref<HTMLElement | null>(null)
const containerRef = ref<HTMLElement | null>(null)
const textRef = ref<HTMLElement | null>(null)
const isWriting = ref(false)

const startWriting = () => {
  const chars = props.text.split('')
  let currentDelay = 0 // Relative delay from the moment this instance is allowed to write
  
  isWriting.value = true

  chars.forEach((char, i) => {
    // Increased speed: much faster than before
    const charSpeed = char === ' ' ? 0.01 : (props.speed || 0.03) + Math.random() * 0.03
    
    gsap.delayedCall(currentDelay, async () => {
      displayedText.value += char
      await nextTick()
      updatePenPosition()
      
      if (i === chars.length - 1) {
        finishWriting()
      }
    })
    
    currentDelay += charSpeed
  })
}

const finishWriting = () => {
  if (penRef.value) {
    gsap.to(penRef.value, { 
      opacity: 0, 
      y: "-=30", 
      duration: 0.4, 
      ease: "power2.in",
      onComplete: () => {
        isWriting.value = false
        penStore.finish(instanceId)
      }
    })
  } else {
    isWriting.value = false
    penStore.finish(instanceId)
  }
}

const updatePenPosition = () => {
  if (!textRef.value || !penRef.value || !containerRef.value) return

  const anchor = document.createElement('span')
  anchor.textContent = '\u200B'
  textRef.value.appendChild(anchor)
  
  const rect = anchor.getBoundingClientRect()
  const containerRect = containerRef.value.getBoundingClientRect()
  
  const x = rect.left - containerRect.left
  const y = rect.top - containerRect.top

  const jitterX = (Math.random() - 0.5) * 4
  const jitterY = (Math.random() - 0.5) * 2
  const rotation = -15 + (Math.random() - 0.5) * 20

  gsap.to(penRef.value, {
    left: x + jitterX,
    top: y - 5 + jitterY,
    rotation: rotation,
    duration: 0.1, // Snappier movement
    ease: "power2.out",
    overwrite: "auto"
  })
  
  textRef.value.removeChild(anchor)
}

onMounted(() => {
  penStore.register(instanceId)
})

onUnmounted(() => {
  penStore.finish(instanceId)
})

// Watch the store to see if it's our turn
watch(() => penStore.activeId, (newActiveId) => {
  if (newActiveId === instanceId && !isWriting.value && displayedText.value === '') {
    // Added a small initial delay to make it feel deliberate
    gsap.delayedCall(props.delay || 0.5, startWriting)
  }
}, { immediate: true })
</script>

<template>
  <div ref="containerRef" class="relative inline-block w-full min-h-[1.5em]">
    <span ref="textRef" class="font-writing whitespace-pre-wrap leading-relaxed relative">
      {{ displayedText }}
    </span>
    
    <div 
      v-if="isWriting"
      ref="penRef" 
      class="absolute pointer-events-none z-50 w-16 h-16 transition-opacity duration-300"
      style="transform: translate(-5%, -95%) rotate(-10deg); filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.15));"
    >
      <img src="/pen-nib.png" alt="Plume" class="w-full h-full object-contain mix-blend-multiply" />
    </div>
  </div>
</template>

<style scoped>
.font-writing {
  display: inline-block;
  min-height: 1.5em;
}
</style>
