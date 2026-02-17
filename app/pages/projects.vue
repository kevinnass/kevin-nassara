<template>
  <div class="space-y-24">
    <header class="max-w-3xl space-y-6">
      <h1 class="text-5xl md:text-7xl font-black tracking-tight animate-reveal delay-100 text-[var(--primary)]"> <span class="text-[var(--accent)]">Projets</span> Sélectionnés.</h1>
      <p class="text-xl md:text-2xl text-[var(--text-muted)] font-medium leading-relaxed animate-reveal delay-200">
        Quelques projets personnels que j'ai développés.
      </p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <NuxtLink
        :to="project.link"
        target="_blank"
        v-for="(project, index) in projects" 
        :key="project.title"
        class="glass-ca p-6 border-2 border-black rounded-lg p-2 flex flex-col h-full group animate-reveal"
        :style="{ animationDelay: `${200 + index * 100}ms` }"
      >
        <div class="space-y-6 flex-grow">
          <div class="flex justify-between items-start">
            <h3 class="text-3xl font-black group-hover:text-[var(--accent)] transition-colors duration-300 text-[var(--primary)]">
              {{ project.title }}
            </h3>
            <span class="text-[10px] font-black font-mono border border-[var(--border)] px-2 py-1 rounded text-[var(--text-muted)] uppercase">
              {{ project.year }}
            </span>
          </div>
          <p class="text-[var(--text-muted)] font-medium leading-relaxed">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2 pt-4">
            <span 
              v-for="tech in project.tags"
              :key="tech"
              class="badge text-[9px] !bg-[var(--bg-offset)] !text-[var(--text-muted)] group-hover:!bg-[var(--accent-light)] group-hover:!text-[var(--accent)] transition-colors"
            >
              {{ tech }}
            </span>
          </div>
        </div>
        
        <div class="mt-12 pt-6 border-t border-[var(--border)] flex items-center justify-between group-hover:border-[var(--accent)] transition-colors">
          <span class="text-xs font-black uppercase tracking-widest text-[var(--text-muted)] group-hover:text-[var(--accent)]">
            {{ 'Voir le projet' }}
          </span>
          <div class="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] group-hover:text-white transition-all">
            <span class="text-sm">→</span>
          </div>
        </div>
      </NuxtLink>
    </div>

    <div class="flex items-center justify-center animate-reveal delay-500">
      <NuxtLink 
        to="https://github.com/kevinnass" 
        target="_blank"
        class="group relative inline-flex items-center gap-4 px-12 py-6 bg-[var(--primary)] text-white rounded-2xl font-black text-lg transition-all duration-500 hover:shadow-[0_20px_40px_rgba(79,70,229,0.2)] hover:-translate-y-1 active:scale-95 overflow-hidden"
      >
        <!-- Background Glow Effect on Hover -->
        <div class="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
        
        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        <span>Explorer plus</span>
        <span class="text-xl group-hover:translate-x-2 transition-transform duration-500">→</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    title: "Gallery-La",
    year: "Web",
    description: "Plateforme de galerie en ligne permettant aux artistes de gérer et exposer leurs œuvres en format numériques.",
    link: "https://gallery-la.vercel.app/",
    tags: ["React", "TypeScript", "Redux", "Supabase"]
  },
  {
    title: "JobAssist AI",
    year: "Web IA",
    description: "Application web boostée à l'IA pour aider les candidats dans leur recherche d'emploi et la rédaction de candidatures.",
    link: "https://job-assist.base44.app",
    tags: ["React", "Tailwind", "Framer Motion", "LLM"]
  },
  {
    title: "Bcn-Student-Life",
    year: "Web",
    description: "Plateforme web servant de guide interactif destiné aux étudiants et regroupant toutes les informations essentielles pour vivre, étudier et s’intégrer à Barcelone",
    link: "https://bcn-student-life.vercel.app/",
    tags: ["Vue.js", "Pinia", "Tailwind"]
  },
  {
    title: "AirQuality",
    year: "Web IoT",
    description: "Progressive web application qui permet, grâce a un kit de sensor IoT de déterminer la qualité de l’air ambiant",
    link: "https://github.com/kevinnass/air-quality-iot",
    tags: ["Vue.js", "Vite", "Vuex", "Firebase"]
  }
]

const openProject = (link: string) => {
  window.open(link, "_blank");
}
</script>
