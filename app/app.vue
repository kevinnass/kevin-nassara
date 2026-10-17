<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from '~/composables/useTheme'

const route = useRoute()
const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>

<template>
  <div class="min-h-screen bg-transparent text-inherit">
    <!-- Pour la page d'accueil conceptuelle monopage, le layout plein écran prend les rênes -->
    <template v-if="route.path === '/'">
      <main>
        <NuxtPage />
      </main>
    </template>

    <!-- Pour les sous-pages spécifiques (ex: /portfolio-pdf) -->
    <template v-else>
      <header class="sticky top-0 z-50 w-full backdrop-blur-md bg-[var(--bg-sand)]/80 border-b border-[var(--border)] py-4 px-6">
        <div class="max-w-6xl mx-auto flex items-center justify-between">
          <NuxtLink to="/" class="flex items-center gap-2 group">
            <span class="w-8 h-8 rounded-full bg-stone-900 text-stone-100 flex items-center justify-center font-bold text-xs group-hover:bg-amber-600 transition-colors">
              KN
            </span>
            <span class="font-bold text-sm text-[var(--ink)]">Kevin Nassara</span>
          </NuxtLink>
          <NuxtLink to="/" class="text-xs font-semibold text-[var(--ink-muted)] hover:text-[var(--ink)] flex items-center gap-1">
            <span>← Retour à l'expérience principale</span>
          </NuxtLink>
        </div>
      </header>
      
      <main class="max-w-6xl mx-auto py-10 px-4 md:px-8">
        <NuxtPage />
      </main>
    </template>
  </div>
</template>

<style>
/* Global resets */
</style>
