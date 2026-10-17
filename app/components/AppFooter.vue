<template>
  <footer class="fixed bottom-5 sm:bottom-7 left-0 right-0 z-30 pointer-events-none select-none flex justify-center px-4">
    <!-- Footer discret et épuré, centré au milieu du bas (style Gallery-La) -->
    <div class="pointer-events-auto flex flex-wrap items-center justify-center gap-x-3.5 sm:gap-x-4 gap-y-1 text-[11px] sm:text-xs font-sans text-stone-400 dark:text-stone-500 tracking-wide transition-colors duration-500">
      <span>© {{ currentYear }} Kevin Nassara</span>
      <span class="opacity-40">•</span>
      <p class="hover:text-stone-950 dark:hover:text-white transition-colors">
        kevin.nassara@epitech.eu
      </p>
      <span class="opacity-40">•</span>
      <a 
        href="https://github.com/kevinnass" 
        target="_blank" 
        rel="noopener noreferrer"
        @click="playButtonSound"
        class="hover:text-stone-950 dark:hover:text-white transition-colors underline underline-offset-4 decoration-stone-300 dark:decoration-stone-700"
        title="Voir mon profil GitHub"
      >
        GitHub ↗
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useAmbientSound } from '~/composables/useAmbientSound'

const currentYear = new Date().getFullYear()
const { playButtonSound } = useAmbientSound()
</script>
