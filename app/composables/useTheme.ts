import { ref, readonly } from 'vue'

const isDark = ref(false)
const isTransitioning = ref(false)

export function useTheme() {
  const toggleTheme = () => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('theme-transitioning')
      isTransitioning.value = true
      setTimeout(() => {
        document.documentElement.classList.remove('theme-transitioning')
        isTransitioning.value = false
      }, 1450)
    }
    isDark.value = !isDark.value
    applyTheme()
  }

  const applyTheme = () => {
    if (typeof document === 'undefined') return
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme_mode', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme_mode', 'light')
    }
  }

  const initTheme = () => {
    if (typeof window === 'undefined') return
    const saved = localStorage.getItem('theme_mode')
    if (saved === 'dark') {
      isDark.value = true
    } else {
      isDark.value = false
    }
    applyTheme()
  }

  return {
    isDark: readonly(isDark),
    isTransitioning: readonly(isTransitioning),
    toggleTheme,
    initTheme,
  }
}
