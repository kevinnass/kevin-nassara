<template>
  <div class="space-y-16">
    <header class="max-w-3xl space-y-6">
      <h1 class="text-5xl md:text-7xl font-black tracking-tight animate-reveal delay-100 text-[var(--primary)]"> <span class="text-[var(--accent)]">Projets</span> Sélectionnés.</h1>
      <p class="text-xl md:text-2xl text-[var(--text-muted)] font-medium leading-relaxed animate-reveal delay-200">
        Une sélection de projets personnels et applicatifs mettant en œuvre des architectures modernes, de l'IA et de l'IoT.
      </p>
    </header>

    <!-- Category Filter Tabs -->
    <div class="flex flex-wrap gap-3 animate-reveal delay-300">
      <button
        v-for="category in categories"
        :key="category"
        @click="selectedCategory = category"
        class="px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 border-2"
        :class="[
          selectedCategory === category
            ? 'bg-[var(--accent)] border-[var(--accent)] text-white shadow-md scale-105'
            : 'bg-[var(--bg-offset)]/30 border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--primary)]'
        ]"
      >
        {{ category }}
      </button>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <NuxtLink
        v-for="(project, index) in filteredProjects" 
        :key="project.title"
        :to="project.link"
        target="_blank"
        class="glass-card !p-8 border-2 border-[var(--border)] hover:border-[var(--accent)] rounded-3xl flex flex-col justify-between h-full group animate-reveal transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
        :style="{ animationDelay: `${200 + index * 100}ms` }"
      >
        <div class="space-y-6 flex-grow">
          <div class="flex justify-between items-start gap-4">
            <h3 class="text-3xl font-black group-hover:text-[var(--accent)] transition-colors duration-300 text-[var(--primary)]">
              {{ project.title }}
            </h3>
            <span class="text-[10px] font-black font-mono border border-[var(--accent)]/30 px-3 py-1 rounded-full text-[var(--accent)] uppercase bg-[var(--accent-light)]">
              {{ project.category }}
            </span>
          </div>
          <p class="text-[var(--text-muted)] font-medium leading-relaxed text-base">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2 pt-2">
            <span 
              v-for="tech in project.tags"
              :key="tech"
              class="badge text-[10px] !bg-[var(--bg-offset)] !text-[var(--text-muted)] group-hover:!bg-[var(--accent-light)] group-hover:!text-[var(--accent)] transition-colors"
            >
              {{ tech }}
            </span>
          </div>
        </div>
        
        <div class="mt-8 pt-6 border-t border-[var(--border)] flex items-center justify-between group-hover:border-[var(--accent)] transition-colors">
          <span class="text-xs font-black uppercase tracking-widest text-[var(--text-muted)] group-hover:text-[var(--accent)]">
            Voir le projet
          </span>
          <div class="w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] group-hover:text-white transition-all duration-300">
            <span class="text-sm font-bold">↗</span>
          </div>
        </div>
      </NuxtLink>
    </div>

    <!-- GitHub CTA -->
    <div class="flex items-center justify-center animate-reveal delay-500 pt-10">
      <NuxtLink 
        to="https://github.com/kevinnass" 
        target="_blank"
        class="group relative inline-flex items-center gap-4 px-12 py-6 bg-[var(--primary)] text-white rounded-2xl font-black text-lg transition-all duration-500 hover:shadow-[0_20px_40px_rgba(79,70,229,0.2)] hover:-translate-y-1 active:scale-95 overflow-hidden"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
        
        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        <span>Voir l'ensemble des dépôts GitHub</span>
        <span class="text-xl group-hover:translate-x-2 transition-transform duration-500">→</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const categories = ["Tous", "IA & Automation", "Web & SaaS", "IoT"]
const selectedCategory = ref("Tous")

const projects = [
  {
    title: "JobTracker",
    category: "IA & Automation",
    description: "Dashboard de suivi de candidatures avec extension navigateur (import automatique des offres) et analyse intelligente des opportunités par IA (Groq/Llama3.1).",
    link: "https://job-assist.base44.app",
    tags: ["Vue.js / Nuxt.js", "Supabase", "Groq-llama3.1", "Pinia", "Browser Extension"]
  },
  {
    title: "Gallery-La",
    category: "Web & SaaS",
    description: "Plateforme portfolio artistique de partage d'œuvres multimédia (images, vidéos, audio) et création d'expositions virtuelles personnalisables par les artistes.",
    link: "https://gallery-la.vercel.app/",
    tags: ["React / Next.js", "TypeScript", "Redux", "Supabase"]
  },
  {
    title: "Bcn-Student-Life",
    category: "Web & SaaS",
    description: "Plateforme web servant de guide interactif destiné aux étudiants et regroupant toutes les informations essentielles pour vivre, étudier et s’intégrer à Barcelone.",
    link: "https://bcn-student-life.vercel.app/",
    tags: ["Vue.js", "Pinia", "Tailwind CSS"]
  },
  {
    title: "AirQuality IoT",
    category: "IoT",
    description: "Progressive Web Application (PWA) connectée à un kit de capteurs IoT permettant d'évaluer et mesurer en temps réel la qualité de l'air ambiant.",
    link: "https://github.com/kevinnass/air-quality-iot",
    tags: ["Vue.js", "Vite", "Vuex", "Firebase", "PWA", "IoT Sensors"]
  }
]

const filteredProjects = computed(() => {
  if (selectedCategory.value === "Tous") return projects
  return projects.filter(p => p.category === selectedCategory.value)
})
</script>
