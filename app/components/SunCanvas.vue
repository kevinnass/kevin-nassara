<template>
  <div class="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
    
    <!-- LUEUR D'AMBIANCE GLOBALE (Bascule douce et progressive calée sur le lever/coucher des astres) -->
    <div 
      class="fixed inset-0 pointer-events-none transition-all duration-[1400ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
      :style="{
        background: isDark
          ? 'radial-gradient(circle at 86% 12%, rgba(147, 197, 253, 0.09) 0%, rgba(99, 102, 241, 0.03) 45%, transparent 70%)'
          : 'radial-gradient(circle at 14% 12%, rgba(251, 191, 36, 0.10) 0%, rgba(245, 158, 11, 0.03) 45%, transparent 70%)'
      }"
    ></div>

    <!-- 1. SOLEIL (Coin Supérieur Gauche : Se lève le jour, se couche progressivement vers l'horizon bas-gauche la nuit) -->
    <div 
      class="fixed -top-16 -left-16 sm:-top-24 sm:-left-24 md:-top-32 md:-left-32 w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] md:w-[560px] md:h-[560px] pointer-events-none will-change-transform"
      :style="{
        transition: 'transform 1.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 1.3s cubic-bezier(0.25, 1, 0.5, 1)'
      }"
      :class="isDark 
        ? 'opacity-0 scale-[0.65] -translate-x-32 translate-y-40 pointer-events-none' 
        : 'opacity-100 scale-100 translate-x-0 translate-y-0'"
    >
      <!-- Halo externe solaire : intensité adoucie et chaleureuse -->
      <div 
        class="absolute -inset-20 rounded-full blur-[90px] md:blur-[130px] opacity-40 animate-pulse-warmth"
        style="background: radial-gradient(circle, rgba(251, 191, 36, 0.32) 0%, rgba(245, 158, 11, 0.14) 40%, rgba(217, 119, 6, 0.03) 75%, transparent 100%);"
      ></div>

      <!-- Disque intermédiaire ambré doux -->
      <div 
        class="absolute inset-0 rounded-full blur-2xl opacity-35 bg-gradient-to-br from-amber-400/20 via-orange-300/10 to-transparent"
      ></div>

      <!-- Cœur du soleil : lumière diffuse et apaisante -->
      <div 
        class="absolute inset-10 sm:inset-14 md:inset-20 rounded-full blur-[28px] opacity-70"
        style="background: radial-gradient(circle, rgba(255, 251, 235, 0.90) 0%, rgba(251, 191, 36, 0.55) 50%, rgba(217, 119, 6, 0.15) 100%);"
      ></div>

      <!-- Centre incandescent solaire doux -->
      <div class="absolute inset-[32%] rounded-full blur-xl bg-amber-100/60 opacity-80"></div>
    </div>

    <!-- 2. LUNE (Coin Supérieur Droit : Se lève progressivement de l'horizon bas-droit la nuit, se couche le jour) -->
    <div 
      class="fixed -top-16 -right-16 sm:-top-24 sm:-right-24 md:-top-32 md:-right-32 w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] md:w-[540px] md:h-[540px] pointer-events-none will-change-transform"
      :style="{
        transition: 'transform 1.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 1.3s cubic-bezier(0.25, 1, 0.5, 1)'
      }"
      :class="isDark 
        ? 'opacity-100 scale-100 translate-x-0 translate-y-0' 
        : 'opacity-0 scale-[0.65] translate-x-32 translate-y-40 pointer-events-none'"
    >
      <!-- Halo externe lunaire : lumière d'argent et bleu nuit douce -->
      <div 
        class="absolute -inset-20 rounded-full blur-[90px] md:blur-[130px] opacity-35 animate-pulse-warmth"
        style="background: radial-gradient(circle, rgba(147, 197, 253, 0.28) 0%, rgba(99, 102, 241, 0.12) 40%, rgba(30, 27, 75, 0.03) 75%, transparent 100%);"
      ></div>

      <!-- Disque intermédiaire nacré -->
      <div 
        class="absolute inset-0 rounded-full blur-2xl opacity-30 bg-gradient-to-bl from-sky-400/15 via-indigo-300/10 to-transparent"
      ></div>

      <!-- Cœur de la lune : perle céleste douce -->
      <div 
        class="absolute inset-10 sm:inset-14 md:inset-20 rounded-full blur-[28px] opacity-65"
        style="background: radial-gradient(circle, rgba(240, 249, 255, 0.90) 0%, rgba(186, 230, 253, 0.50) 50%, rgba(99, 102, 241, 0.15) 100%);"
      ></div>

      <!-- Centre lumineux de la lune -->
      <div class="absolute inset-[30%] rounded-full blur-xl bg-sky-100/60 opacity-80"></div>

      <!-- Cratères subtils et poétiques -->
      <div class="absolute inset-[24%] rounded-full opacity-25 pointer-events-none">
        <div class="absolute top-[30%] right-[36%] w-4 h-4 rounded-full bg-slate-400/25 blur-[1px]"></div>
        <div class="absolute top-[50%] right-[26%] w-6 h-6 rounded-full bg-slate-400/20 blur-[1px]"></div>
        <div class="absolute top-[64%] right-[46%] w-5 h-5 rounded-full bg-slate-400/15 blur-[1px]"></div>
        <div 
          class="absolute inset-0 rounded-full"
          style="background: radial-gradient(circle at 65% 35%, transparent 45%, rgba(15, 23, 42, 0.2) 90%);"
        ></div>
      </div>
    </div>

    <!-- 3. PARTICULES & POUSSIÈRES CÉLESTES EN SUSPENSION (Dorées le jour / Étoilées la nuit) -->
    <div class="fixed inset-0 pointer-events-none opacity-30">
      <div 
        v-for="i in 18" 
        :key="i"
        class="absolute rounded-full animate-float-gentle blur-[0.5px] transition-colors duration-1000"
        :class="isDark ? 'bg-sky-200/40' : 'bg-amber-400/30'"
        :style="{
          width: `${(i % 3) + (isDark && i % 4 === 0 ? 3 : 2)}px`,
          height: `${(i % 3) + (isDark && i % 4 === 0 ? 3 : 2)}px`,
          left: `${(i * 17) % 94 + 3}%`,
          top: `${(i * 23) % 90 + 5}%`,
          animationDuration: `${7 + (i % 6) * 2}s`,
          animationDelay: `${i * 0.35}s`
        }"
      ></div>
    </div>

    <!-- 4. VOILE DE TRANSITION ATMOSPHÉRIQUE PROGRESSIF (Crépuscule / Aube) -->
    <div 
      class="fixed inset-0 pointer-events-none transition-opacity duration-[1400ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
      :class="isTransitioning ? 'opacity-25 bg-amber-600/5 dark:bg-indigo-900/10' : 'opacity-0'"
    ></div>

  </div>
</template>

<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'

defineProps<{
  progress?: number
}>()

const { isDark, isTransitioning } = useTheme()
</script>
