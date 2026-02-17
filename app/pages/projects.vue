<template>
  <div class="space-y-24">
    <header class="max-w-3xl space-y-6">
      <h1 class="text-5xl md:text-7xl font-black tracking-tight animate-reveal delay-100 text-[var(--primary)]">Projets <br/><span class="text-[var(--accent)]">Sélectionnés.</span></h1>
      <p class="text-xl md:text-2xl text-[var(--text-muted)] font-medium leading-relaxed animate-reveal delay-200">
        Quelques projets personnels que j'ai développés.
      </p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div
        @click="openProject(project.link)"
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
            {{ project.role || 'Détails' }}
          </span>
          <div class="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] group-hover:text-white transition-all">
            <span class="text-sm">→</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    title: "Gallery-La",
    year: "Projet Personnel",
    description: "Plateforme de galerie en ligne permettant aux artistes de gérer et exposer leurs œuvres en format numériques.",
    link: "https://gallery-la.vercel.app/",
    tags: ["React", "TypeScript", "Redux", "Supabase"]
  },
  {
    title: "JobAssist AI",
    year: "Projet Personnel",
    description: "Application web boostée à l'IA pour aider les candidats dans leur recherche d'emploi et la rédaction de candidatures.",
    link: "https://job-assist.base44.app",
    tags: ["React", "Tailwind", "Framer Motion", "LLM"]
  },
  {
    title: "Bcn-Student-Life",
    year: "Projet Personnel",
    description: "Plateforme web servant de guide interactif destiné aux étudiants et regroupant toutes les informations essentielles pour vivre, étudier et s’intégrer à Barcelone",
    link: "https://bcn-student-life.vercel.app/",
    tags: ["Vue.js", "Pinia", "Tailwind"]
  },
  {
    title: "AirQuality",
    year: "Projet Personnel",
    description: "Progressive web application qui permet, grâce a un kit de sensor IoT de déterminer la qualité de l’air ambiant",
    link: "https://github.com/kevinnass/air-quality-iot",
    tags: ["Vue.js", "Vite", "Vuex", "Firebase"]
  }
]

const openProject = (link: string) => {
  window.open(link, "_blank");
}
</script>
