<template>
  <div class="fixed right-6 bottom-8 z-40 hidden md:flex items-center gap-3 select-none pointer-events-none">
    <div class="card-monolith px-4 py-2 rounded-full flex items-center gap-2 pointer-events-auto">
      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
      <span class="font-sans text-[11px] text-stone-600 dark:text-stone-300 font-medium">
        Scrollez ou naviguez avec les touches
      </span>
      <kbd class="font-sans text-[10px] bg-stone-200/80 dark:bg-slate-800 text-stone-700 dark:text-stone-300 px-1.5 py-0.5 rounded border border-stone-300 dark:border-slate-700">↓</kbd>
      <kbd class="font-sans text-[10px] bg-stone-200/80 dark:bg-slate-800 text-stone-700 dark:text-stone-300 px-1.5 py-0.5 rounded border border-stone-300 dark:border-slate-700">↑</kbd>
    </div>
  </div>
</template>
