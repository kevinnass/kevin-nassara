<template>
  <div class="fixed left-6 bottom-8 z-40 hidden lg:flex flex-col items-center gap-3 select-none pointer-events-none">
    <!-- Indicateur vertical de progression fluide -->
    <div class="relative w-0.5 h-32 bg-stone-300/60 dark:bg-slate-700/60 rounded-full overflow-hidden">
      <div 
        class="absolute top-0 left-0 right-0 bg-amber-600 dark:bg-sky-400 rounded-full transition-all duration-300"
        :style="{ height: `${Math.round(progress * 100)}%` }"
      ></div>
    </div>
    
    <span class="font-sans text-[10px] uppercase tracking-widest text-stone-500 dark:text-slate-400 font-medium">
      {{ Math.round(progress * 100) }}%
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  progress: number
}>()
</script>
