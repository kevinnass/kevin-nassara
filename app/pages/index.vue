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
    <div class="fixed inset-0 z-10 flex items-center justify-center p-6 md:p-12 pointer-events-none select-none">
      <div class="w-full max-w-4xl mx-auto pointer-events-auto">
        <Transition name="stage-fade" mode="out-in">
          
          <!-- ÉTAPE 0 : HERO ULTRA-ÉPURÉ & MINIMALISTE (Style Gallery-la) -->
          <section 
            v-if="currentStageIndex === 0" 
            key="stage-0" 
            class="space-y-4 text-center"
          >
            <div class="space-y-2">
              <span class="text-xs uppercase tracking-[0.4em] text-stone-400 dark:text-stone-500 font-medium font-sans">
                Software Engineer
              </span>
              <h1 class="font-display font-medium text-7xl sm:text-8xl md:text-9xl lg:text-[10.5rem] text-stone-900 dark:text-stone-100 tracking-tight leading-[0.85]">
                Kevin Nassara
              </h1>
            </div>
            <p class="font-sans text-sm sm:text-base md:text-lg text-stone-500 dark:text-stone-400 font-normal max-w-md mx-auto pt-4 leading-relaxed">
              Concevoir des architectures numériques, des systèmes intelligents et des interfaces épurées.
            </p>
          </section>

          <!-- ÉTAPE 1 : DÉMARCHE & VISION -->
          <section 
            v-else-if="currentStageIndex === 1" 
            key="stage-1" 
            class="space-y-4 max-w-xl mx-auto text-left"
          >
            <div class="space-y-1">
              <span class="text-xs uppercase tracking-[0.4em] text-stone-400 dark:text-stone-500 font-medium font-sans">
                0 1
              </span>
              <h2 class="font-display font-medium text-5xl sm:text-6xl md:text-7xl text-stone-900 dark:text-stone-100 tracking-tight leading-none">
                Démarche
              </h2>
              <p class="font-sans text-sm sm:text-base text-stone-500 dark:text-stone-400 font-normal leading-relaxed pt-1">
                Une architecture pensée pour laisser place à la clarté et à l'efficacité.
              </p>
            </div>
            <div class="pt-6 flex items-center gap-4 text-xs font-sans text-stone-400 dark:text-stone-500">
              <span>IA & LLM</span>
              <span>•</span>
              <span>Systèmes Distribués</span>
              <span>•</span>
              <span>Front-End d'Excellence</span>
            </div>
          </section>

          <!-- ÉTAPE 2 : PROJETS ÉPURÉS (LISTE MINIMALISTE - STYLE GALLERY-LA) -->
          <section 
            v-else-if="currentStageIndex === 2" 
            key="stage-2" 
            class="space-y-6 max-w-2xl mx-auto text-left"
          >
            <div class="space-y-1">
              <span class="text-xs uppercase tracking-[0.4em] text-stone-400 dark:text-stone-500 font-medium font-sans">
                0 2
              </span>
              <h2 class="font-display font-medium text-5xl sm:text-6xl md:text-7xl text-stone-900 dark:text-stone-100 tracking-tight leading-none">
                Projets
              </h2>
              <p class="font-sans text-sm sm:text-base text-stone-500 dark:text-stone-400 font-normal leading-relaxed pt-1">
                Une sélection de plateformes, d'outils SaaS et de systèmes construits avec soin.
              </p>
            </div>

            <!-- Liste ultra-épurée sans surcharge visuelle -->
            <div class="space-y-3 pt-4">
              <a
                v-for="project in allProjects"
                :key="project.title"
                :href="project.link"
                target="_blank"
                class="group flex items-baseline justify-between py-2.5 border-b border-stone-300/40 dark:border-stone-800 transition-colors"
              >
                <div class="flex items-baseline gap-4">
                  <span class="font-display font-medium text-xl sm:text-2xl text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-sky-400 transition-colors">
                    {{ project.title }}
                  </span>
                  <span class="font-sans text-xs text-stone-400 dark:text-stone-500 uppercase tracking-wider font-medium hidden sm:inline">
                    {{ project.tag }}
                  </span>
                </div>
                <span class="font-sans text-sm text-stone-400 group-hover:text-stone-900 dark:group-hover:text-white transition-colors">
                  ↗
                </span>
              </a>
            </div>
          </section>

          <!-- ÉTAPE 3 : PARCOURS MINIMALISTE (STYLE GALLERY-LA) -->
          <section 
            v-else-if="currentStageIndex === 3" 
            key="stage-3" 
            class="space-y-6 max-w-2xl mx-auto text-left"
          >
            <div class="space-y-1">
              <span class="text-xs uppercase tracking-[0.4em] text-stone-400 dark:text-stone-500 font-medium font-sans">
                0 3
              </span>
              <h2 class="font-display font-medium text-5xl sm:text-6xl md:text-7xl text-stone-900 dark:text-stone-100 tracking-tight leading-none">
                Expérience
              </h2>
              <p class="font-sans text-sm sm:text-base text-stone-500 dark:text-stone-400 font-normal leading-relaxed pt-1">
                Parcours d'ingénieur logiciel entre scale-ups, startups et projets d'envergure.
              </p>
            </div>

            <div class="space-y-4 pt-4">
              <div 
                v-for="exp in experienceList" 
                :key="exp.company"
                class="py-3 border-b border-stone-300/40 dark:border-stone-800 space-y-1"
              >
                <div class="flex items-baseline justify-between">
                  <h3 class="font-display font-medium text-xl sm:text-2xl text-stone-900 dark:text-stone-100">
                    {{ exp.role }}
                  </h3>
                  <span class="font-sans text-xs text-stone-400 dark:text-stone-500 uppercase tracking-wider font-medium">
                    {{ exp.period }}
                  </span>
                </div>
                <div class="flex items-center gap-2 font-sans text-xs sm:text-sm text-stone-500 dark:text-stone-400">
                  <span class="font-medium text-stone-700 dark:text-stone-300">{{ exp.company }}</span>
                  <span>—</span>
                  <span>{{ exp.focus }}</span>
                </div>
              </div>
            </div>
          </section>

          <!-- ÉTAPE 4 : STACK ÉPURÉE (STYLE GALLERY-LA) -->
          <section 
            v-else-if="currentStageIndex === 4" 
            key="stage-4" 
            class="space-y-6 max-w-2xl mx-auto text-left"
          >
            <div class="space-y-1">
              <span class="text-xs uppercase tracking-[0.4em] text-stone-400 dark:text-stone-500 font-medium font-sans">
                0 4
              </span>
              <h2 class="font-display font-medium text-5xl sm:text-6xl md:text-7xl text-stone-900 dark:text-stone-100 tracking-tight leading-none">
                Stack
              </h2>
              <p class="font-sans text-sm sm:text-base text-stone-500 dark:text-stone-400 font-normal leading-relaxed pt-1">
                Technologies modernes, typées et performantes au quotidien.
              </p>
            </div>

            <div class="space-y-3 pt-4">
              <div 
                v-for="(techs, category) in skillClusters" 
                :key="category"
                class="py-2.5 border-b border-stone-300/40 dark:border-stone-800 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1"
              >
                <span class="font-sans text-xs uppercase tracking-wider text-stone-400 dark:text-stone-500 font-medium w-36">
                  {{ category }}
                </span>
                <span class="font-display font-medium text-lg sm:text-xl text-stone-800 dark:text-stone-200 tracking-wide">
                  {{ techs }}
                </span>
              </div>
            </div>
          </section>

          <!-- ÉTAPE 5 : CONTACT MINIMALISTE (STYLE GALLERY-LA) -->
          <section 
            v-else-if="currentStageIndex === 5" 
            key="stage-5" 
            class="space-y-6 max-w-2xl mx-auto text-center"
          >
            <div class="space-y-1">
              <span class="text-xs uppercase tracking-[0.4em] text-stone-400 dark:text-stone-500 font-medium font-sans">
                0 5
              </span>
              <h2 class="font-display font-medium text-6xl sm:text-7xl md:text-8xl text-stone-900 dark:text-stone-100 tracking-tight leading-none">
                Contact
              </h2>
            </div>

            <p class="font-sans text-sm sm:text-base md:text-lg text-stone-500 dark:text-stone-400 font-normal max-w-md mx-auto pt-2 leading-relaxed">
              Disponible pour opportunités d'ingénierie logicielle, missions techniques et collaborations.
            </p>

            <div class="pt-6 flex flex-wrap items-center justify-center gap-8 font-sans text-xs uppercase tracking-[0.2em] font-medium text-stone-600 dark:text-stone-400">
              <a 
                href="mailto:kevin.nassara@epitech.eu"
                class="hover:text-stone-950 dark:hover:text-white transition-colors underline underline-offset-4"
              >
                kevin.nassara@epitech.eu
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
          </section>

        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import SunCanvas from '~/components/SunCanvas.vue'
import ConceptHeader from '~/components/ConceptHeader.vue'
import ScrollProgress from '~/components/ScrollProgress.vue'
import FloatingNavHint from '~/components/FloatingNavHint.vue'
import AppFooter from '~/components/AppFooter.vue'

// Métadonnées SEO
useHead({
  title: 'Kevin Nassara — Software Engineer',
  meta: [
    { name: 'description', content: 'Portfolio minimaliste de Kevin Nassara, Software Engineer spécialisé en IA, SaaS et interfaces web modernes.' }
  ]
})

// Définition des 6 chapitres conceptuels
const stages = [
  { id: 'hero', label: 'Accueil' },
  { id: 'demarche', label: 'Démarche' },
  { id: 'projets', label: 'Projets' },
  { id: 'parcours', label: 'Parcours' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
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

  // Découpage en 6 paliers avec transition fluide
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

// Données Projets épurées
const allProjects = [
  {
    title: 'GenAI Analytics Platform',
    tag: 'Nuxt 3 • Python • LangChain',
    link: 'https://github.com/kevinnass'
  },
  {
    title: 'Real-Time IoT & Energy Monitor',
    tag: 'Vue 3 • TypeScript • WebSockets',
    link: 'https://github.com/kevinnass'
  },
  {
    title: 'Design System & UI Library',
    tag: 'Storybook • Tailwind • Vue 3',
    link: 'https://github.com/kevinnass'
  },
  {
    title: 'SaaS Workflow Automator',
    tag: 'Node.js • PostgreSQL • Redis',
    link: 'https://github.com/kevinnass'
  },
  {
    title: 'Interactive Geospatial Explorer',
    tag: 'Mapbox GL • GeoJSON • Pinia',
    link: 'https://github.com/kevinnass'
  }
]

// Chronologie Professionnelle épurée
const experienceList = [
  {
    role: 'Software Engineer & Consultant',
    company: 'Projets Innovants',
    period: '2023 — Présent',
    focus: 'Architectures IA, SaaS & performance web'
  },
  {
    role: 'Full-Stack Developer',
    company: 'Tech Ecosystem',
    period: '2022 — 2023',
    focus: 'APIs distribuées & optimisation data'
  },
  {
    role: 'Diplôme Ingénierie Logicielle',
    company: 'EPITECH',
    period: '2020 — 2025',
    focus: 'Architectures logicielles & systèmes'
  }
]

// Écosystème Technique épuré
const skillClusters = {
  'Front-End': 'Vue 3, Nuxt 4, TypeScript, TailwindCSS, GSAP',
  'Back-End': 'Node.js, Python, FastAPI, REST, GraphQL, WebSockets',
  'IA & Data': 'LLM Integration, LangChain, Prompt Engineering',
  'DevOps': 'Docker, CI/CD, Git, Linux, GCP'
}
</script>
