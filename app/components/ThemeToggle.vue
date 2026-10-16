<template>
  <button 
    @click="handleToggle" 
    class="pointer-events-auto group card-monolith w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
    :title="isDark ? 'Passer au mode jour (Soleil)' : 'Passer au mode nuit (Lune)'"
    aria-label="Basculer le thème jour / nuit"
  >
    <!-- Transition fluide entre l'icône Soleil et l'icône Lune -->
    <Transition name="icon-flip" mode="out-in">
      <!-- Icône Soleil en mode nuit (pour repasser au jour) -->
      <svg 
        v-if="isDark" 
        key="sun"
        class="w-4 h-4 text-amber-300 group-hover:rotate-45 transition-transform duration-500" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>

      <!-- Icône Lune en mode jour (pour passer à la nuit) -->
      <svg 
        v-else 
        key="moon"
        class="w-4 h-4 text-stone-700 group-hover:text-amber-700 group-hover:-rotate-12 transition-all duration-500" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </Transition>
  </button>
</template>

<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'
import { useAmbientSound } from '~/composables/useAmbientSound'

const { isDark, toggleTheme } = useTheme()
const { playThemeSwitchSound } = useAmbientSound()

const handleToggle = () => {
  playThemeSwitchSound()
  toggleTheme()
}
</script>
