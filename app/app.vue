<script setup lang="ts">
import { usePenStore } from '~/stores/pen'

const penStore = usePenStore()
const route = useRoute()

// Reset the pen writing queue whenever the page changes
watch(() => route.path, () => {
  penStore.reset()
})
</script>

<template>
  <div class="min-h-screen bg-[#dcd7c9] overflow-hidden">
    <div class="paper-sheet">
      <div class="paper-grain"></div>
      
      <!-- Real Header -->
      <header class="relative z-10 px-8 py-6 border-b border-black/5 flex justify-between items-center transition-opacity duration-500">
        <NuxtLink to="/" class="font-serif text-2xl font-bold tracking-tighter">KN.</NuxtLink>
        <nav class="flex space-x-6 font-serif text-sm uppercase tracking-widest">
          <NuxtLink to="/projects" class="hover:line-through transition-all">Projets</NuxtLink>
          <NuxtLink to="/about" class="hover:line-through transition-all">À propos</NuxtLink>
          <NuxtLink to="/contact" class="hover:line-through transition-all">Contact</NuxtLink>
        </nav>
      </header>

      <!-- Content Area -->
      <main class="flex-grow relative z-10 p-8 md:p-16 max-w-6xl mx-auto w-full">
        <NuxtPage />
      </main>

      <!-- Real Footer -->
      <footer class="relative z-10 px-8 py-6 border-t border-black/5 flex justify-between items-center text-xs font-serif uppercase tracking-widest opacity-60">
        <div>© 2026 Kevin Nassara</div>
        <div class="flex space-x-4">
          <a href="https://kevin.nassara.surge.sh" target="_blank" class="hover:underline">Portfolio</a>
          <a href="mailto:kevin.nassara@epitech.eu" class="hover:underline">Email</a>
        </div>
      </footer>
    </div>
    
    <NuxtRouteAnnouncer />
  </div>
</template>
