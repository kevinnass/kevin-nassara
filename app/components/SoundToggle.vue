<template>
  <button 
    @click="handleToggle"
    class="group relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border transition-all duration-300 card-monolith hover:scale-105 active:scale-95"
    :class="isPlaying 
      ? 'border-amber-600/40 dark:border-sky-500/40 bg-amber-50/80 dark:bg-sky-950/60 text-amber-950 dark:text-sky-200 shadow-sm' 
      : 'border-stone-300/80 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 text-stone-500 dark:text-slate-400 hover:text-stone-900 dark:hover:text-white'"
    aria-label="Basculer le son"
    :title="isPlaying ? 'Désactiver le son' : 'Activer le son'"
  >
    <!-- Indicateur d'état actif / discret -->
    <span 
      class="w-1.5 h-1.5 rounded-full transition-all duration-300"
      :class="isPlaying ? 'bg-amber-600 dark:bg-sky-400 animate-pulse' : 'bg-stone-400 dark:bg-slate-600'"
    ></span>

    <!-- Texte minimaliste -->
    <span class="font-sans text-xs font-medium tracking-wide select-none">
      Son
    </span>
  </button>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useAmbientSound } from '~/composables/useAmbientSound'

const { isPlaying, toggleSound, setupAutoPlay, playButtonSound } = useAmbientSound()

const handleToggle = () => {
  if (!isPlaying.value) {
    playButtonSound()
  }
  toggleSound()
}

onMounted(() => {
  setupAutoPlay()
})
</script>
