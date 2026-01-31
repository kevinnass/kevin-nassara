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
            class="text-xs font-bold transition-all uppercase tracking-[0.2em]"
            :class="[isActive ? 'text-indigo-600 dark:text-indigo-400 tracking-[0.3em]' : 'text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400']"
          >
            {{ link.label }}
          </span>
          
          <!-- Active Dot Indicator -->
          <Transition name="scale">
            <div 
              v-if="isActive && route.path !== '/'" 
              class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-indigo-600 dark:bg-indigo-400 rounded-full shadow-[0_0_8px_rgba(79,70,229,0.4)]"
            ></div>
          </Transition>
        </NuxtLink>

        <!-- Theme Toggle Integration -->
        <div class="pl-4 border-l border-slate-100 dark:border-slate-800 ml-4">
          <ThemeToggle />
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden flex items-center gap-4">
        <ThemeToggle />
        <button class="w-10 h-10 flex flex-col items-end justify-center gap-1.5">
          <div class="w-6 h-0.5 bg-slate-900 dark:bg-white rounded-full"></div>
          <div class="w-4 h-0.5 bg-slate-900 dark:bg-white rounded-full"></div>
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
const links = [
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
