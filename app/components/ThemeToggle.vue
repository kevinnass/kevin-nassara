<template>
  <button 
    @click="toggleTheme" 
    class="relative w-14 h-7 rounded-full transition-all duration-500 border focus:outline-none focus:ring-2 focus:ring-indigo-500 overflow-hidden group shadow-inner"
    :class="isDark 
      ? 'bg-slate-900 border-slate-800' 
      : 'bg-slate-200 border-slate-300'"
    aria-label="Toggle Theme"
  >
    <!-- Background Sparkles in Dark Mode -->
    <div v-if="isDark" class="absolute inset-0 opacity-40">
      <div class="absolute top-1 left-3 w-0.5 h-0.5 bg-white rounded-full animate-pulse"></div>
      <div class="absolute top-4 left-2 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style="animation-delay: 0.7s"></div>
      <div class="absolute top-2 left-6 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style="animation-delay: 0.3s"></div>
    </div>

    <!-- Background Glow in Light Mode -->
    <div v-else class="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent opacity-50"></div>

    <!-- Sliding Knob -->
    <div 
      class="absolute top-1 left-1 w-5 h-5 rounded-full shadow-lg flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform"
      :class="isDark 
        ? 'translate-x-7 bg-indigo-500 scale-90' 
        : 'translate-x-0 bg-white rotate-[360deg]'"
    >
      <span v-if="!isDark" class="text-[12px] filter drop-shadow-sm">☀️</span>
      <span v-else class="text-[10px] filter drop-shadow-sm">🌙</span>
    </div>
  </button>
</template>

<script setup lang="ts">
const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  updateTheme()
}

const updateTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    isDark.value = true
    updateTheme()
  }
})
</script>
