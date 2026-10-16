<template>
  <div 
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    class="relative inline-flex items-center rounded-full border transition-all duration-300 card-monolith select-none"
    :class="[
      isPlaying 
        ? 'border-amber-600/40 dark:border-sky-500/40 bg-amber-50/80 dark:bg-sky-950/60 text-amber-950 dark:text-sky-200 shadow-sm' 
        : 'border-stone-300/80 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 text-stone-500 dark:text-slate-400 hover:text-stone-900 dark:hover:text-white',
      isHovered ? 'px-3 py-1.5' : 'px-3.5 py-1.5'
    ]"
  >
    <!-- Zone cliquable : point d'état + texte 'Son' (désactivable / activable à volonté au clic) -->
    <button 
      type="button"
      @click="handleToggle"
      class="inline-flex items-center gap-2 select-none cursor-pointer focus:outline-none"
      :title="isPlaying ? 'Désactiver le son' : 'Activer le son'"
      aria-label="Basculer le son"
    >
      <!-- Indicateur d'état actif / discret -->
      <span 
        class="w-1.5 h-1.5 rounded-full transition-all duration-300 shrink-0"
        :class="isPlaying ? 'bg-amber-600 dark:bg-sky-400 animate-pulse' : 'bg-stone-400 dark:bg-slate-600'"
      ></span>

      <!-- Texte 'Son' -->
      <span class="font-sans text-xs font-medium tracking-wide hover:opacity-80 transition-opacity">
        Son
      </span>
    </button>

    <!-- Jauge de volume qui apparaît au survol à droite du texte et disparaît quand on enlève la souris -->
    <div 
      class="flex items-center transition-all duration-300 ease-out overflow-hidden"
      :class="isHovered 
        ? 'max-w-[130px] opacity-100 ml-2.5 pl-2 border-l border-stone-300/70 dark:border-slate-700/70' 
        : 'max-w-0 opacity-0 ml-0 pl-0 border-l-0 pointer-events-none'"
      @click.stop
    >
      <div class="flex items-center gap-1.5 py-0.5">
        <input 
          type="range"
          min="0"
          max="100"
          step="1"
          :value="volumePercent"
          @input="onVolumeInput"
          @mousedown="isDragging = true"
          @mouseup="isDragging = false"
          @click.stop
          class="sound-volume-slider w-14"
          :style="{
            '--thumb-color': isPlaying ? (isDark ? '#38bdf8' : '#d97706') : '#78716c',
            '--track-bg': isDark ? 'rgba(148, 163, 184, 0.25)' : 'rgba(120, 113, 108, 0.2)'
          }"
          :title="`Volume: ${volumePercent}%`"
          aria-label="Régler le volume"
        />

        <span class="text-[10px] font-mono tabular-nums opacity-60 w-5 text-right select-none">
          {{ volumePercent }}%
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useAmbientSound } from '~/composables/useAmbientSound'
import { useTheme } from '~/composables/useTheme'

const { isPlaying, volume, setVolume, toggleSound, setupAutoPlay, playButtonSound } = useAmbientSound()
const { isDark } = useTheme()

const isHovered = ref(false)
const isDragging = ref(false)

const volumePercent = computed(() => {
  return Math.round((volume.value ?? 0.35) * 100)
})

const handleToggle = () => {
  if (!isPlaying.value) {
    playButtonSound()
  }
  toggleSound()
}

const onVolumeInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  const val = Number(target.value) / 100
  setVolume(val)
}

const handleMouseEnter = () => {
  isHovered.value = true
}

const handleMouseLeave = () => {
  if (!isDragging.value) {
    isHovered.value = false
  }
}

const handleGlobalMouseUp = () => {
  if (isDragging.value) {
    isDragging.value = false
    if (!isHovered.value) {
      isHovered.value = false
    }
  }
}

onMounted(() => {
  setupAutoPlay()
  if (typeof window !== 'undefined') {
    window.addEventListener('mouseup', handleGlobalMouseUp)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('mouseup', handleGlobalMouseUp)
  }
})
</script>
