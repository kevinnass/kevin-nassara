<template>
  <div class="space-y-12">
    <header>
      <h1 class="font-serif text-5xl md:text-6xl tracking-tight">Projets Personnels</h1>
      <p class="font-serif italic text-xl text-gray-600 mt-2">Une sélection de travaux récents</p>
    </header>

    <main class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div v-for="(project, i) in projects" :key="i" 
           class="group border-b border-black/5 pb-10 transition-all hover:translate-x-2">
        <div class="flex justify-between items-start mb-4">
          <h3 class="font-serif text-3xl tracking-tight group-hover:italic transition-all">{{ project.title }}</h3>
          <span class="text-[10px] uppercase tracking-widest bg-black text-white px-2 py-1">{{ project.tech[0] }}</span>
        </div>
        <p class="font-writing text-2xl text-gray-700 leading-snug mb-6">
          {{ project.description }}
        </p>
        <div class="flex flex-wrap gap-2 mb-6">
          <span v-for="t in project.tech" :key="t" class="text-xs font-serif italic border border-black/10 px-2 py-0.5 opacity-60">
            {{ t }}
          </span>
        </div>
        <a href="#" class="font-serif text-sm border-b border-black/20 hover:border-black transition-colors uppercase tracking-widest font-bold">Consulter →</a>
      </div>
    </main>
    
    <div class="mt-12 p-8 border border-black/5 bg-black/5 italic font-serif text-center max-w-xl mx-auto">
      <PenWriting 
        text="D'autres projets sont en cours de développement..."
        :delay="1"
      />
    </div>
  </div>
</template>

<script setup>
const projects = [
  { 
    title: "Gallery-La", 
    description: "Une galerie en ligne pour les artistes et les créateurs.",
    tech: ["React", "TypeScript", "Supabase", "Redux"]
  },
  { 
    title: "JobAssist", 
    description: "Application boostée à l'IA pour aider dans la recherche d'emploi.",
    tech: ["React", "Tailwind", "Framer Motion", "AI"]
  },
  { 
    title: "Bcn-Student-Life", 
    description: "Guide interactif pour les étudiants s'installant à Barcelone.",
    tech: ["Vue.js", "Pinia", "Tailwind"]
  },
  { 
    title: "AirQuality", 
    description: "PWA permettant de déterminer la qualité de l'air ambiant.",
    tech: ["Vue.js", "Vite", "Vuex", "Firebase"]
  }
]
</script>
