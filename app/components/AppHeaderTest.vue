<template>
  <header class="sticky top-0 z-[60] w-full backdrop-blur-xl border-b-2 border-[var(--border)] transition-colors duration-500">
    <nav class="container-custom h-24 flex items-center justify-between">
      <NuxtLink to="/" class="group flex items-center gap-3" @click="isMenuOpen = false">
        <div class="w-10 h-10 bg-slate-900 dark:bg-indigo-600 text-white flex items-center justify-center rounded-xl font-black text-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-indigo-500/30">
          KN
        </div>
      </NuxtLink>

      <div class="hidden md:flex items-center gap-10">
        <NuxtLink
          v-for="(link, index) in links"
          :key="link.path"
          :to="link.path"
          v-slot="{ isActive }"
          class="relative group py-2 inline-flex items-center"
        >
          <!-- Active Star Indicator -->
          <Transition name="scale">
            <svg
              v-if="isActive"
              class="w-3 h-3 text-[var(--accent)] animate-star-spin mr-1"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </Transition>

          <span
            class="text-xs font-black transition-all uppercase tracking-[0.2em] relative"
            :class="[isActive ? 'text-[var(--accent)] tracking-[0.3em]' : 'text-[var(--text-muted)] hover:text-[var(--primary)]']"
          >
            {{ link.label }}
            <!-- Animated underline -->
            <span
              class="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--accent)] transition-all duration-300 group-hover:w-full"
              :class="{ 'w-full': isActive }"
            ></span>
          </span>
        </NuxtLink>

        <!-- Theme Toggle Integration -->
        <div class="pl-4 border-l border-[var(--border)]">
          <ThemeToggle />
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden flex items-center gap-4">
        <ThemeToggle />
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="relative w-12 h-12 flex flex-col items-center justify-center gap-1.5 z-[100] transition-all duration-300"
          aria-label="Toggle Menu"
        >
          <div
            class="w-8 h-0.5 bg-[var(--primary)] rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            :class="{ 'rotate-45 translate-y-[2px] bg-[var(--accent)]': isMenuOpen }"
          ></div>
          <div
            class="w-5 h-0.5 bg-[var(--primary)] rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            :class="{ '-rotate-45 -translate-y-[4px] w-8 bg-[var(--accent)]': isMenuOpen }"
          ></div>
        </button>
      </div>
    </nav>

    <!-- Mobile Navigation Overlay (Premium) -->
    <Transition name="menu-overlay">
      <div v-if="isMenuOpen" class="fixed inset-0 z-[80] md:hidden h-screen bg-[var(--bg)] overflow-hidden">
        <div class="container-custom h-full flex flex-col justify-between py-12 pb-24">
          <!-- Top Tag -->
          <div class="flex items-center gap-4 animate-reveal-header">
            <span class="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--accent)]">Menu</span>
            <div class="h-px w-12 bg-[var(--accent)]/30"></div>
          </div>

          <!-- Main Navigation Links -->
          <div class="flex flex-col gap-6 items-start">
            <NuxtLink
              v-for="(link, index) in links"
              :key="link.path"
              :to="link.path"
              class="group relative flex items-baseline gap-6 w-full py-4 text-4xl font-black uppercase tracking-tighter text-[var(--primary)] transition-all duration-500 hover:translate-x-4"
              :style="{ transitionDelay: `${index * 50}ms`, animationDelay: `${200 + index * 100}ms` }"
              @click="isMenuOpen = false"
            >
              <span class="text-xs font-mono justify-center text-[var(--accent)] opacity-40 group-hover:opacity-100 transition-opacity">◆</span>
              <span class="group-hover:text-[var(--accent)] transition-colors">{{ link.label }}</span>
              <div class="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--accent)] transition-all duration-500 group-hover:w-full opacity-30"></div>
            </NuxtLink>
          </div>

          <!-- Bottom Contact & Socials -->
          <div class="grid grid-cols-2 gap-10 animate-reveal-footer pt-10 border-t border-[var(--border)]">
            <div class="space-y-4">
              <span class="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)]">Social</span>
              <div class="flex flex-col gap-2">
                <a href="https://github.com/kevinnass" target="_blank" class="text-xs font-bold hover:text-[var(--accent)] transition-colors">GitHub</a>
                <a href="https://linkedin.com/in/kevin-nassara" target="_blank" class="text-xs font-bold hover:text-[var(--accent)] transition-colors">LinkedIn</a>
              </div>
            </div>
            <div class="space-y-4 text-right">
              <span class="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)]">Contact</span>
              <div class="flex flex-col gap-2">
                <a href="mailto:kevin.nassara@epitech.eu" class="text-[10px] font-mono hover:text-[var(--accent)] transition-colors">kevin.nassara@epitech.eu</a>
                <span class="text-[10px] font-bold text-[var(--text-muted)]">Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Background Accents -->
        <div class="absolute -bottom-20 -right-20 w-96 h-96 bg-[var(--accent)] opacity-[0.03] rounded-full blur-[100px] pointer-events-none"></div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const isMenuOpen = ref(false)

// Lock scroll when menu is open
watch(isMenuOpen, (val) => {
  if (import.meta.client) {
    document.body.style.overflow = val ? 'hidden' : ''
  }
})

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

/* Premium Mobile Menu Transitions */
.menu-overlay-enter-active,
.menu-overlay-leave-active {
  transition: all 0.7s cubic-bezier(0.3, 0, 0.2, 1);
}

.menu-overlay-enter-from,
.menu-overlay-leave-to {
  clip-path: circle(0% at top right);
  opacity: 0;
}

.menu-overlay-enter-to,
.menu-overlay-leave-from {
  clip-path: circle(150% at top right);
  opacity: 1;
}

/* Internal Item Animations */
@keyframes reveal {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-reveal-header {
  animation: reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-reveal-footer {
  animation: reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both;
}

NuxtLink {
  animation: reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
}

/* Marquee Animation */
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 20s linear infinite;
}

/* Star Spin Animation */
@keyframes starSpin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-star-spin {
  animation: starSpin 3s linear infinite;
}
</style>
