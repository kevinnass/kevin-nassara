<template>
  <header class="sticky top-0 z-50 w-full backdrop-blur-xl  border-b-2 border-[var(--border)] transition-colors duration-500">
    <nav class="container-custom h-24 flex items-center justify-between">
      <NuxtLink to="/" class="group flex items-center gap-3">
        <div class="w-10 h-10 bg-slate-900 dark:bg-indigo-600 text-white flex items-center justify-center rounded-xl font-black text-sm transition-transform group-hover:rotate-12">
          KN
        </div>
      </NuxtLink>
      
      <div class="hidden md:flex items-center gap-10">
        <NuxtLink 
          v-for="link in links" 
          :key="link.path"
          :to="link.path"
          v-slot="{ isActive }"
          class="relative group py-2"
        >
          <span 
            class="text-xs font-black transition-all uppercase tracking-[0.2em]"
            :class="[isActive ? 'text-[var(--accent)] tracking-[0.3em]' : 'text-[var(--text-muted)] hover:text-[var(--primary)]']"
          >
            {{ link.label }}
          </span>
          
          <!-- Active Dot Indicator -->
          <Transition name="scale">
            <div 
              v-if="isActive" 
              class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[var(--accent)] rounded-full shadow-[0_0_8px_rgba(79,70,229,0.3)]"
            ></div>
          </Transition>
        </NuxtLink>

        <!-- Theme Toggle Integration -->
        <div class="pl-4 border-l border-[var(--border)]">
          <ThemeToggle />
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden flex items-center gap-4">
        <ThemeToggle />
        <button class="w-10 h-10 flex flex-col items-end justify-center gap-1.5">
          <div class="w-6 h-0.5 bg-[var(--primary)] rounded-full"></div>
          <div class="w-4 h-0.5 bg-[var(--primary)] rounded-full"></div>
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
const links = [
  { label: 'Accueil', path: '/' },
  { label: 'Projets', path: '/projects' },
  { label: 'À propos', path: '/about' },
  { label: 'Contact', path: '/contact' }
]
</script>

<style scoped>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: translate(-50%, 4px) scale(0);
}
</style>
