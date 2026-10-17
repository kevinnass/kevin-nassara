<template>
  <div class="relative min-h-[500vh]" ref="containerRef">
    <!-- Astres Célestes Fixes (Soleil dans le coin sup. gauche le jour / Lune dans le coin sup. droit la nuit) -->
    <SunCanvas :progress="scrollProgress" />

    <!-- En-tête Conceptuel Fixe avec Navigation, Audio Synth et Bascule Jour/Nuit -->
    <ConceptHeader 
      :currentStage="currentStageIndex" 
      :stages="stages" 
      @navigate="scrollToStage" 
    />

    <!-- Indicateurs d'état et Footer discret centré au milieu du bas -->
    <ScrollProgress :progress="scrollProgress" />
    <FloatingNavHint />
    <AppFooter />

    <!-- FENÊTRE SCÉNIQUE FIXE : Le contenu change en permanence au scroll avec transition fluide -->
    <div class="fixed inset-0 z-10 flex items-center justify-center p-4 sm:p-6 md:p-12 pointer-events-none select-none">
      <div class="w-full max-w-3xl lg:max-w-4xl mx-auto pointer-events-auto">
        <Transition name="stage-fade" mode="out-in">
          
          <!-- ÉTAPE 0 : HERO — TAILLE NORMALE, TITRE SOFTWARE DATA ENGINEER & BIO -->
          <section 
            v-if="currentStageIndex === 0" 
            key="stage-0" 
            class="space-y-5 text-center max-w-2xl mx-auto"
          >
            <div class="space-y-3">
              <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs uppercase tracking-[0.3em] text-amber-900 dark:text-sky-300 bg-amber-200/60 dark:bg-sky-950/60 border border-amber-300/60 dark:border-sky-500/40 font-semibold font-sans shadow-sm">
                Software Data Engineer
              </span>
              <h1 class="font-display font-medium text-4xl sm:text-5xl md:text-6xl text-stone-900 dark:text-stone-100 tracking-tight leading-tight">
                Kevin Nassara
              </h1>
            </div>

            <p class="font-sans text-sm sm:text-base md:text-lg text-stone-600 dark:text-stone-300 font-normal leading-relaxed max-w-xl mx-auto">
              Software Engineer passionné par l'architecture logicielle, le développement full-stack moderne (Vue/Nuxt, React/Next, TypeScript, FastAPI) et les produits SaaS intégrant l'IA. De la conception UI/UX (Design Systems, accessibilité WCAG) au back-end (microservices, sécurité RLS, observabilité Sentry) et à la data, je conçois des applications modulaires, robustes et centrées sur l'utilisateur.
            </p>

            <div class="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-xs font-sans text-stone-500 dark:text-stone-400">
              <span class="px-3 py-1 rounded-full bg-stone-200/50 dark:bg-stone-800/60 border border-stone-300/40 dark:border-stone-700/40">Full-Stack & SaaS</span>
              <span class="px-3 py-1 rounded-full bg-stone-200/50 dark:bg-stone-800/60 border border-stone-300/40 dark:border-stone-700/40">Design Systems & UI/UX</span>
              <span class="px-3 py-1 rounded-full bg-stone-200/50 dark:bg-stone-800/60 border border-stone-300/40 dark:border-stone-700/40">Architectures "AI-Ready"</span>
              <span class="px-3 py-1 rounded-full bg-stone-200/50 dark:bg-stone-800/60 border border-stone-300/40 dark:border-stone-700/40">Microservices FastAPI</span>
              <span class="px-3 py-1 rounded-full bg-stone-200/50 dark:bg-stone-800/60 border border-stone-300/40 dark:border-stone-700/40">Testing & Sentry</span>
              <span class="px-3 py-1 rounded-full bg-stone-200/50 dark:bg-stone-800/60 border border-stone-300/40 dark:border-stone-700/40">Paris, France</span>
            </div>
          </section>

          <!-- ÉTAPE 1 : EXPÉRIENCES (FUSION SOFTWARE & DATA AVEC SWITCH PAR EXPÉRIENCE) -->
          <section 
            v-else-if="currentStageIndex === 1" 
            key="stage-1" 
            class="space-y-4 max-w-2xl mx-auto text-left max-h-[78vh] sm:max-h-[82vh] overflow-y-auto no-scrollbar pr-1 pb-6"
          >
            <!-- En-tête de section épuré sans cards -->
            <div class="space-y-1">
              <span class="text-xs uppercase tracking-[0.4em] text-stone-400 dark:text-stone-500 font-medium font-sans">
                0 1
              </span>
              <div class="flex items-center justify-between gap-3">
                <h2 class="font-display font-medium text-4xl sm:text-5xl md:text-6xl text-stone-900 dark:text-stone-100 tracking-tight leading-none">
                  Expériences
                </h2>
                <span class="text-[11px] font-mono px-3 py-1 rounded-full bg-stone-200/50 dark:bg-stone-800/60 text-stone-600 dark:text-stone-300 border border-stone-300/40 dark:border-stone-700/40 font-medium">
                  Software & Data
                </span>
              </div>
              <p class="font-sans text-xs sm:text-sm text-stone-500 dark:text-stone-400 font-normal leading-relaxed pt-1">
                Conception logicielle end-to-end : Design Systems multi-thèmes, architectures AI-Ready, microservices FastAPI, observabilité Sentry et data.
              </p>
            </div>

            <!-- Liste des expériences : pas de cards, typographie et lignes directrices épurées -->
            <div class="space-y-5 pt-1">
              <article 
                v-for="exp in experiencesList" 
                :key="exp.id" 
                class="space-y-2 pb-5 border-b border-stone-200/60 dark:border-stone-800/70 last:border-b-0 last:pb-0"
              >
                <!-- En-tête : Entreprise, Rôle dynamique, Période et Switcher -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div class="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
                    <h3 class="font-display font-medium text-xl sm:text-2xl text-stone-900 dark:text-stone-100">
                      {{ exp.company }}
                    </h3>
                    <span class="font-sans text-xs sm:text-sm font-medium text-amber-800 dark:text-sky-300">
                      — {{ exp.tracks[experienceTracks[exp.id]].role }}
                    </span>
                    <span class="font-sans text-[11px] text-stone-400 dark:text-stone-500 uppercase tracking-wider">
                      ({{ exp.period }})
                    </span>
                  </div>

                  <!-- Switcher simple et fluide Software / Data pour chaque expérience -->
                  <div class="inline-flex items-center p-0.5 rounded-full bg-stone-200/60 dark:bg-stone-800/70 border border-stone-300/50 dark:border-stone-700/50 text-[11px] font-sans self-start sm:self-auto shrink-0">
                    <button 
                      type="button"
                      @click="setExpTrack(exp.id, 'software')"
                      class="px-2.5 py-0.5 rounded-full transition-all duration-200 font-medium cursor-pointer"
                      :class="experienceTracks[exp.id] === 'software' 
                        ? 'bg-amber-200/90 dark:bg-sky-300 text-stone-950 font-semibold shadow-xs' 
                        : 'text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-100'"
                      title="Afficher les missions Software"
                    >
                      Software
                    </button>
                    <button 
                      type="button"
                      @click="setExpTrack(exp.id, 'data')"
                      class="px-2.5 py-0.5 rounded-full transition-all duration-200 font-medium cursor-pointer"
                      :class="experienceTracks[exp.id] === 'data' 
                        ? 'bg-amber-200/90 dark:bg-sky-300 text-stone-950 font-semibold shadow-xs' 
                        : 'text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-100'"
                      title="Afficher les missions Data"
                    >
                      Data
                    </button>
                  </div>
                </div>

                <!-- Contexte court de la mission -->
                <p v-if="exp.context" class="font-sans text-xs text-stone-500 dark:text-stone-400">
                  {{ exp.context }}
                </p>

                <!-- Bullets de missions avec transition fade -->
                <Transition name="track-fade" mode="out-in">
                  <ul 
                    :key="experienceTracks[exp.id]"
                    class="font-sans text-xs sm:text-[13px] text-stone-600 dark:text-stone-300 space-y-1.5 pt-0.5"
                  >
                    <li 
                      v-for="(bullet, bIdx) in exp.tracks[experienceTracks[exp.id]].bullets" 
                      :key="bIdx"
                      class="flex items-start gap-2 leading-relaxed"
                    >
                      <span class="text-amber-700 dark:text-sky-400 shrink-0 font-bold select-none">•</span>
                      <span v-html="bullet"></span>
                    </li>
                  </ul>
                </Transition>
              </article>

              <!-- Formation Académique : simple ligne discrète sans card -->
              <div class="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-sans text-stone-500 dark:text-stone-400 border-t border-stone-200/40 dark:border-stone-800/40">
                <span>🎓 <strong>Master en Ingénierie Logiciel</strong> — EPITECH Paris (2020 – 2025)</span>
                <span class="text-stone-400 dark:text-stone-500 text-[11px] sm:text-xs">Spécialisation IoT (Barcelone)</span>
              </div>
            </div>
          </section>

          <!-- ÉTAPE 2 : PROJETS (METS MES PROJETS GITHUB EN AVANT) -->
          <section 
            v-else-if="currentStageIndex === 2" 
            key="stage-2" 
            class="space-y-4 max-w-2xl mx-auto text-left max-h-[72vh] overflow-y-auto no-scrollbar pr-1"
          >
            <div class="space-y-1">
              <div class="flex items-center justify-between">
                <span class="text-xs uppercase tracking-[0.4em] text-stone-400 dark:text-stone-500 font-medium font-sans">
                  0 2
                </span>
                <a 
                  href="https://github.com/kevinnass" 
                  target="_blank" 
                  class="inline-flex items-center gap-1.5 text-xs font-medium text-amber-800 dark:text-sky-300 hover:underline font-sans"
                >
                  <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  <span>github.com/kevinnass ↗</span>
                </a>
              </div>
              <h2 class="font-display font-medium text-4xl sm:text-5xl md:text-6xl text-stone-900 dark:text-stone-100 tracking-tight leading-none">
                Projets
              </h2>
              <p class="font-sans text-xs sm:text-sm text-stone-500 dark:text-stone-400 font-normal leading-relaxed pt-1">
                Applications SaaS, dashboards décisionnels et plateformes interactives développées et documentées sur GitHub.
              </p>
            </div>

            <!-- Liste des projets GitHub réels -->
            <div class="space-y-3 pt-2">
              <div
                v-for="project in githubProjects"
                :key="project.title"
                class="p-3.5 sm:p-4 rounded-2xl bg-stone-100/70 dark:bg-stone-900/50 border border-stone-200/70 dark:border-stone-800 transition-all hover:border-amber-500/40 dark:hover:border-sky-400/40 group space-y-2"
              >
                <div class="flex items-start justify-between gap-2">
                  <div>
                    <div class="flex items-center gap-2">
                      <h3 class="font-display font-medium text-lg sm:text-xl text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-sky-300 transition-colors">
                        {{ project.title }}
                      </h3>
                      <span class="font-mono text-[10px] px-2 py-0.5 rounded-full bg-amber-100 dark:bg-sky-950 text-amber-800 dark:text-sky-300 border border-amber-300/40 dark:border-sky-500/30">
                        {{ project.category }}
                      </span>
                    </div>
                    <span class="font-sans text-[11px] text-stone-400 dark:text-stone-500 font-medium">
                      {{ project.tech }}
                    </span>
                  </div>

                  <div class="flex items-center gap-2 shrink-0">
                    <a
                      v-if="project.demo"
                      :href="project.demo"
                      target="_blank"
                      class="text-xs font-sans px-2.5 py-1 rounded-lg bg-stone-200/60 dark:bg-stone-800/80 hover:bg-amber-200 dark:hover:bg-sky-400 hover:text-stone-950 text-stone-700 dark:text-stone-300 transition-colors flex items-center gap-1"
                      title="Voir la démo en ligne"
                    >
                      <span>Live</span> ↗
                    </a>
                    <a
                      :href="project.github"
                      target="_blank"
                      class="text-xs font-sans px-2.5 py-1 rounded-lg bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-950 hover:bg-amber-600 dark:hover:bg-sky-300 transition-colors flex items-center gap-1 font-medium"
                      title="Voir le dépôt GitHub"
                    >
                      <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
                <p class="font-sans text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  {{ project.description }}
                </p>
              </div>
            </div>

            <!-- Bouton global GitHub -->
            <div class="pt-2 text-center">
              <a 
                href="https://github.com/kevinnass" 
                target="_blank" 
                class="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-950 hover:bg-amber-600 dark:hover:bg-sky-300 transition-colors shadow-sm"
              >
                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                <span>Explorer l'ensemble de mes dépôts sur GitHub ↗</span>
              </a>
            </div>
          </section>

          <!-- ÉTAPE 3 : STACK TECHNIQUE -->
          <section 
            v-else-if="currentStageIndex === 3" 
            key="stage-3" 
            class="space-y-4 max-w-2xl mx-auto text-left max-h-[72vh] overflow-y-auto no-scrollbar pr-1"
          >
            <div class="space-y-1">
              <span class="text-xs uppercase tracking-[0.4em] text-stone-400 dark:text-stone-500 font-medium font-sans">
                0 3
              </span>
              <h2 class="font-display font-medium text-4xl sm:text-5xl md:text-6xl text-stone-900 dark:text-stone-100 tracking-tight leading-none">
                Stack
              </h2>
              <p class="font-sans text-xs sm:text-sm text-stone-500 dark:text-stone-400 font-normal leading-relaxed pt-1">
                Technologies modernes et maîtrisées au quotidien pour l'ingénierie logicielle et les données.
              </p>
            </div>

            <div class="space-y-2.5 pt-2">
              <div 
                v-for="(techs, category) in skillClusters" 
                :key="category"
                class="p-3.5 rounded-xl bg-stone-100/70 dark:bg-stone-900/50 border border-stone-200/70 dark:border-stone-800 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2"
              >
                <span class="font-sans text-xs uppercase tracking-wider text-amber-700 dark:text-sky-300 font-semibold w-44 shrink-0">
                  {{ category }}
                </span>
                <span class="font-sans text-xs sm:text-sm text-stone-700 dark:text-stone-200 leading-relaxed">
                  {{ techs }}
                </span>
              </div>
            </div>
          </section>

          <!-- ÉTAPE 4 : CONTACT -->
          <section 
            v-else-if="currentStageIndex === 4" 
            key="stage-4" 
            class="space-y-6 max-w-2xl mx-auto text-center"
          >
            <div class="space-y-1">
              <span class="text-xs uppercase tracking-[0.4em] text-stone-400 dark:text-stone-500 font-medium font-sans">
                0 4
              </span>
              <h2 class="font-display font-medium text-5xl sm:text-6xl md:text-7xl text-stone-900 dark:text-stone-100 tracking-tight leading-none">
                Contact
              </h2>
            </div>

            <p class="font-sans text-sm sm:text-base md:text-lg text-stone-600 dark:text-stone-300 font-normal max-w-lg mx-auto pt-1 leading-relaxed">
              Disponible pour des opportunités en Software Engineering, Data & BI, conception de produits SaaS ou missions de consulting.
            </p>

            <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 font-sans text-xs uppercase tracking-[0.15em] font-medium text-stone-700 dark:text-stone-300">
              <a 
                href="mailto:kevin.nassara@epitech.eu"
                class="px-4 py-2 rounded-full bg-amber-200/80 dark:bg-sky-300 text-stone-950 font-semibold hover:scale-105 transition-all shadow-sm"
              >
                kevin.nassara@epitech.eu
              </a>
              <a 
                href="tel:+330745912337" 
                class="hover:text-stone-950 dark:hover:text-white transition-colors"
              >
                +33 7 45 91 23 37
              </a>
              <a 
                href="https://linkedin.com/in/kevin-nassara" 
                target="_blank"
                class="hover:text-stone-950 dark:hover:text-white transition-colors"
              >
                LinkedIn ↗
              </a>
              <a 
                href="https://github.com/kevinnass" 
                target="_blank"
                class="hover:text-stone-950 dark:hover:text-white transition-colors"
              >
                GitHub ↗
              </a>
            </div>

            <div class="text-xs font-sans text-stone-400 pt-1">
              📍 Paris / Île-de-France, France
            </div>
          </section>

        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import SunCanvas from '~/components/SunCanvas.vue'
import ConceptHeader from '~/components/ConceptHeader.vue'
import ScrollProgress from '~/components/ScrollProgress.vue'
import FloatingNavHint from '~/components/FloatingNavHint.vue'
import AppFooter from '~/components/AppFooter.vue'
import { useAmbientSound } from '~/composables/useAmbientSound'

// Métadonnées SEO
useHead({
  title: 'Kevin Nassara — Software Data Engineer',
  meta: [
    { name: 'description', content: 'Portfolio de Kevin Nassara, Software Data Engineer spécialisé en architectures SaaS, ingénierie de données, BI décisionnel et workflows IA.' }
  ]
})

const { playButtonSound } = useAmbientSound()

// Définition des 5 chapitres conceptuels (l'ordre du header : Expériences, Projets, Stack, Contact)
const stages = [
  { id: 'hero', label: 'Accueil' },
  { id: 'experiences', label: 'Expériences' },
  { id: 'projets', label: 'Projets' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
]

// Suivi réactif de la piste active (Software ou Data) pour chaque expérience
const experienceTracks = ref<Record<string, 'software' | 'data'>>({
  carviz: 'software',
  fcjm: 'software'
})

const setExpTrack = (id: string, track: 'software' | 'data') => {
  experienceTracks.value[id] = track
  playButtonSound()
}

// Expériences fusionnées avec missions Software et Data pour chaque entreprise
const experiencesList = [
  {
    id: 'carviz',
    company: 'Carviz',
    period: 'Août 2024 – Oct 2025',
    context: "SaaS d'inspection et d'estimation automatisée des dommages véhicules par IA.",
    tracks: {
      software: {
        role: 'Software Engineer',
        bullets: [
          '<strong>Design System multi-thèmes</strong> : conception et maintenance d\'un Design System de +50 composants UI réutilisables et typés (Vue.js, Nuxt.js, Tailwind CSS, TypeScript), réduisant de 40% le temps d\'intégration et éliminant les incohérences visuelles.',
          '<strong>Intégration IA Computer Vision</strong> : mise en place des workflows d\'édition d\'images (upscale HD, détourage d\'arrière-plan) et des vues d\'estimation automatisée des dommages véhicules alimentées par les modèles de la squad IA.',
          '<strong>Architecture "AI-Ready" & Spec-Driven</strong> : restructuration de la codebase frontend (Nuxt.js, auto-imports, conventions strictes de typage) et formalisation contextuelle (copilot-instructions) décuplant l\'efficacité des assistants IA agentiques (Claude Code, Cursor).',
          '<strong>Dashboard Analytics & State Management</strong> : création d\'interfaces de Data Visualization interactives (ApexCharts, Unovis) alimentées par un store Pinia optimisé (cache mémoire/localStorage, debouncing).',
          '<strong>Microservices Backend & Sécurité RLS</strong> : développement d\'APIs backend avec FastAPI (Python) et Supabase (PostgreSQL), modélisation relationnelle, requêtes optimisées et authentification Row Level Security.',
          '<strong>Testing & Observabilité Sentry</strong> : suite de tests automatisés (Vitest, Jest) et monitoring Sentry (Browser Tracing & Session Replay), réduisant les bugs en production de 60% et accélérant la résolution des incidents.'
        ]
      },
      data: {
        role: 'Data Analyst',
        bullets: [
          '<strong>Tableaux de bord décisionnels & KPIs métier</strong> : recueil et traduction des besoins direction en indicateurs clés (taux d\'acceptation, volume d\'inspections, ratios mensuels, précision des estimations).',
          '<strong>Requêtes SQL avancées</strong> : calculs de tendances temporelles M/M-1, analyses de cohortes et métriques par concession sous PostgreSQL/Supabase (~700 rapports d\'inspection/mois).',
          '<strong>Data Dictionary & Gouvernance</strong> : formalisation des sources, définitions, granularité et règles de calcul pour aligner équipes métier et techniques.',
          '<strong>Contrôle qualité & Ingestion IA</strong> : traitement, structuration et sécurisation des données issues de modèles IA pour fiabiliser les analyses opérationnelles.',
          '<strong>Data Visualisation</strong> : conception de dashboards interactifs avec ApexCharts, Unovis et Vue/Nuxt.'
        ]
      }
    }
  },
  {
    id: 'fcjm',
    company: 'FCJM',
    period: 'Janv 2023 – Avril 2024',
    context: 'Plateforme & dashboard de gestion logistique métier.',
    tracks: {
      software: {
        role: 'Software Engineer',
        bullets: [
          '<strong>Dashboard logistique React & Next.js</strong> : développement de 5 fonctionnalités principales de gestion livrées en plusieurs sprints agiles (Scrum).',
          '<strong>Backend Firebase & Cloud Hosting</strong> : modélisation des collections Firestore, règles de sécurité RLS et déploiement continu via Firebase Hosting.',
          '<strong>Ergonomie UI/UX & Accessibilité WCAG</strong> : conception d\'interfaces accessibles et ergonomiques, réduisant de 30% les retours utilisateurs négatifs sur la période.',
          '<strong>Testing Jest & Fiabilité</strong> : mise en place de tests unitaires avec Jest (couverture 70%), assurant la fiabilité des fonctionnalités critiques du dashboard.'
        ]
      },
      data: {
        role: 'Data Engineer',
        bullets: [
          'Conception de tableaux de bord logistiques et d\'indicateurs opérationnels pour utilisateurs métier.',
          'Modélisation des données sous Firebase Firestore, intégration d\'APIs REST et flux réactifs pour restituer les métriques de performance.'
        ]
      }
    }
  }
]

const containerRef = ref<HTMLElement | null>(null)
const scrollProgress = ref(0)
const currentStageIndex = ref(0)

// Gestion du scroll fluide & détection d'étape
const handleScroll = () => {
  if (typeof window === 'undefined') return
  const scrollTop = window.scrollY || document.documentElement.scrollTop
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight

  if (maxScroll <= 0) {
    scrollProgress.value = 0
    currentStageIndex.value = 0
    return
  }

  const rawProgress = Math.min(Math.max(scrollTop / maxScroll, 0), 1)
  scrollProgress.value = rawProgress

  // Découpage en paliers avec transition fluide
  const totalStages = stages.length
  const calculatedIndex = Math.min(Math.floor(rawProgress * totalStages), totalStages - 1)
  currentStageIndex.value = calculatedIndex
}

// Navigation par clics ou touches du clavier
const scrollToStage = (stageIdx: number) => {
  if (typeof window === 'undefined') return
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight
  const targetScroll = (stageIdx / (stages.length - 1)) * maxScroll
  window.scrollTo({
    top: targetScroll,
    behavior: 'smooth'
  })
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowDown' || e.key === 'PageDown') {
    if (currentStageIndex.value < stages.length - 1) {
      e.preventDefault()
      scrollToStage(currentStageIndex.value + 1)
    }
  } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
    if (currentStageIndex.value > 0) {
      e.preventDefault()
      scrollToStage(currentStageIndex.value - 1)
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('keydown', handleKeydown)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
})

// Projets GitHub réels de Kevin Nassara mis en avant
const githubProjects = [
  {
    title: 'JobTracker',
    category: 'IA & Décisionnel',
    tech: 'Nuxt 3 • Supabase (PostgreSQL) • Groq Llama 3.1 • Pinia • Extension Web',
    description: 'Dashboard décisionnel de pilotage et d’analyse des candidatures par IA : suivi de KPIs métier, analyse de funnel de conversion, extension navigateur d’ingestion automatique et extraction structurée d’offres d’emploi brutes.',
    github: 'https://github.com/kevinnass',
    demo: 'https://job-assist.base44.app'
  },
  {
    title: 'Gallery-La',
    category: 'Web & SaaS',
    tech: 'React • Next.js • TypeScript • Redux • Supabase',
    description: 'Plateforme portfolio artistique de partage d’œuvres multimédia (images, vidéos, audio) et création d’expositions virtuelles personnalisables par les artistes.',
    github: 'https://github.com/kevinnass',
    demo: 'https://gallery-la.vercel.app/'
  },
  {
    title: 'Bcn-Student-Life',
    category: 'Web App',
    tech: 'Vue.js • Pinia • Tailwind CSS',
    description: 'Guide web interactif destiné aux étudiants regroupant toutes les informations et services essentiels pour vivre, étudier et s’intégrer à Barcelone.',
    github: 'https://github.com/kevinnass',
    demo: 'https://bcn-student-life.vercel.app/'
  },
  {
    title: 'AirQuality IoT',
    category: 'IoT & Data',
    tech: 'Vue.js • Firebase • PWA • Capteurs IoT',
    description: 'Progressive Web Application connectée en temps réel à un kit de capteurs IoT pour mesurer et visualiser la qualité de l’air ambiant et l’exposition aux particules.',
    github: 'https://github.com/kevinnass/air-quality-iot',
    demo: ''
  }
]

// Écosystème Technique complet issu des compétences Software & Data
const skillClusters = {
  'Frontend & UI Engineering': 'Vue.js, Nuxt.js, React.js, Next.js, TypeScript, Tailwind CSS, Pinia (Store), Storybook, PWA',
  'Backend & Cloud Services': 'FastAPI (Python), Nest.js, Node.js, Supabase (PostgreSQL), Firebase Firestore, Redis, Prisma, REST API, GraphQL, AWS, Docker, Kubernetes',
  'Workflows IA & Méthodologie': 'Claude Code, Cursor, Antigravity, Spec-Driven Development, Context Engineering, Computer Vision, Agile/Scrum, Code Review',
  'Testing & Observabilité': 'Vitest (unit), Jest, Playwright (e2e), Cypress, Sentry (Browser Tracing & Replay), Accessibilité WCAG, CI/CD Actions',
  'Langages de programmation': 'JavaScript / TypeScript, Python, C/C++, Rust',
  'Data & Visualisation': 'SQL Avancé, PostgreSQL, Supabase, Metabase, Power BI, Data Dictionary, ETL/ELT, ApexCharts, Unovis'
}
</script>

<style scoped>
/* Scrollbar discrète pour le défilement dans les étapes riches */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Transition fluide lors du switch Software / Data */
.track-fade-enter-active,
.track-fade-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.track-fade-enter-from {
  opacity: 0;
  transform: translateY(3px);
}

.track-fade-leave-to {
  opacity: 0;
  transform: translateY(-3px);
}
</style>
