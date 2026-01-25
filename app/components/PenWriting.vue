<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const props = defineProps<{
  text: string
  delay?: number
  speed?: number
}>()

const displayedText = ref('')

onMounted(() => {
  const chars = props.text.split('')
  const tl = gsap.timeline({ delay: props.delay || 0 })
  
  chars.forEach((char) => {
    tl.to({}, {
      duration: (props.speed || 0.08) + Math.random() * 0.05,
      onComplete: () => {
        displayedText.value += char
      }
    })
  })
})
</script>

<template>
  <span class="font-writing whitespace-pre-wrap leading-relaxed relative">
    {{ displayedText }}<span v-if="displayedText.length < text.length" class="inline-block w-[2px] h-[0.8em] bg-black/40 ml-1 translate-y-[0.1em]"></span>
  </span>
</template>
