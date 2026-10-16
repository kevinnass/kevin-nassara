<template>
  <div class="fixed top-4 sm:top-6 left-0 right-0 z-50 px-2 sm:px-4 pointer-events-none select-none flex justify-center">
    <!-- Conteneur centré regroupant Home, la barre Header, Son et Thème Jour/Nuit côte à côte -->
    <header class="flex items-center gap-1.5 sm:gap-2.5 max-w-full overflow-x-auto no-scrollbar px-1 py-1">
      
      <!-- Bouton Home autonome dans sa propre bulle, juste à côté -->
      <button 
        @click="handleHomeClick"
        class="pointer-events-auto shrink-0 group card-monolith w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
        :class="currentStage === 0 
          ? 'bg-stone-900 text-stone-100 dark:bg-sky-500 dark:text-stone-950 border-stone-900 dark:border-sky-400 shadow-md ring-2 ring-stone-900/10 dark:ring-sky-400/20' 
          : 'text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white hover:border-amber-600/40 dark:hover:border-sky-400/40'"
        title="Accueil"
        aria-label="Accueil"
      >
        <svg 
          class="w-4 h-4 transition-colors" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </button>

      <!-- Barre header principale contenant uniquement les chapitres -->
      <nav class="pointer-events-auto shrink-0 flex items-center gap-0.5 sm:gap-1 p-1 sm:p-1.5 card-monolith rounded-full shadow-sm">
        <button
          v-for="(stage, idx) in navStages"
          :key="stage.id"
          @click="handleNavClick(idx + 1)"
          class="relative px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-medium tracking-wide transition-all duration-300 font-sans whitespace-nowrap"
          :class="currentStage === (idx + 1) 
            ? 'text-stone-950 dark:text-stone-950 font-semibold bg-amber-200/80 dark:bg-sky-300 shadow-sm' 
            : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/50 dark:hover:bg-slate-800/60'"
        >
          <span>{{ stage.label }}</span>
        </button>
      </nav>

      <!-- Bouton Son autonome dans sa propre capsule, juste à côté -->
      <div class="pointer-events-auto shrink-0">
        <SoundToggle />
      </div>

      <!-- Bouton Thème Jour/Nuit (Soleil / Lune) -->
      <div class="shrink-0">
        <ThemeToggle />
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SoundToggle from './SoundToggle.vue'
import ThemeToggle from './ThemeToggle.vue'
import { useAmbientSound } from '~/composables/useAmbientSound'

const props = defineProps<{
  currentStage: number
  stages: { id: string; label: string }[]
}>()

const emit = defineEmits<{
  (e: 'navigate', index: number): void
}>()

const { playHomeSound, playHeaderNavSound } = useAmbientSound()

const handleHomeClick = () => {
  playHomeSound()
  emit('navigate', 0)
}

const handleNavClick = (stageIndex: number) => {
  playHeaderNavSound()
  emit('navigate', stageIndex)
}

// Filtre la première étape ("Aube" / Hero) car elle est représentée par le bouton Home
const navStages = computed(() => {
  return props.stages.slice(1)
})
</script>
