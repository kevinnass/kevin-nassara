<template>
  <div class="space-y-40 pb-20">
    <!-- 01. SUPER HERO SECTION -->
    <header class="min-h-[60vh] flex flex-col justify-center space-y-10 group relative">
      <div class="absolute -top-20 -right-20 w-96 h-96 bg-[var(--accent-light)] rounded-full blur-[120px] -z-10 opacity-60"></div>
      
      <div class="space-y-8 max-w-5xl">
        <h1 class="text-6xl md:text-7xl font-black leading-[0.85] tracking-tighter text-[var(--primary)] animate-reveal delay-100">
          Software <span class="text-[var(--accent)] italic">Developer</span>
        </h1>
        
        <p class="text-2xl md:text-4xl italic text-[var(--text-muted)] font-medium w-full text-justify leading-tight animate-reveal delay-200">
          Je suis <span class="text-[var(--accent)]">Kevin Nassara</span>, un developpeur logiciel qui conçois des écosystèmes performants où la rigueur du code rencontre l'élégance du design, pour offrir des expériences numériques intuitives et sans friction.
        </p>
      </div>

      <div class="flex flex-wrap gap-6 pt-10 animate-reveal delay-300">
        <NuxtLink to="/projects" class="px-10 py-5 border-2 rounded-2xl font-black transition-all text-lg bg-[var(--primary)] backdrop-blur-sm text-[var(--bg)]">
          Explorer mes travaux
          <!-- <span class="ml-2 group-hover:translate-x-2 transition-transform duration-500">→</span> -->
        </NuxtLink>
        <NuxtLink to="/about" class="px-10 py-5 border-2 border-[var(--primary)] hover:border-[var(--accent)] rounded-2xl font-black transition-all text-lg bg-[var(--bg)]/20 backdrop-blur-sm text-[var(--primary)]">
          À propos de moi
        </NuxtLink>
      </div>
    </header>

    <!-- 02. CORE STATISTICS -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-12 py-10 border-y border-[var(--border)]">
      <div 
        v-for="(stat, index) in stats"
        :key="stat.label" 
        class="space-y-2 group cursor-default opacity-0 animate-reveal"
        :style="{ animationDelay: `${500 + index * 150}ms` }"
      >
        <div class="text-3xl md:text-3xl w-full text-center font-black text-[var(--primary)] transition-all duration-500 group-hover:scale-110 group-hover:text-[var(--accent)]">
          {{ stat.value }}
        </div>
        <div class="text-[10px] text-center font-black uppercase tracking-[0.3em] text-[var(--text-muted)] transition-colors duration-300 group-hover:text-[var(--primary)]">
          {{ stat.label }}
        </div>
        <!-- Animated underline on hover -->
        <div class="w-0 h-0.5 bg-[var(--accent)] mx-auto rounded-full transition-all duration-500 group-hover:w-12"></div>
      </div>
    </div>

    <!-- 03. VISION & PHILOSOPHY -->
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
      <div class="space-y-10 animate-reveal delay-700">
        <div class="flex items-center gap-6">
          <h2 class="text-xs font-black uppercase tracking-[0.4em] text-[var(--accent)]">Ma Vision</h2>
          <div class="flex-grow h-px bg-[var(--accent-light)]"></div>
        </div>
        <h3 class="text-4xl md:text-4xl font-black text-[var(--primary)] leading-[1.1]">
          Transformer le code en <span class="text-[var(--accent)]">levier business</span> stratégique.
        </h3>
        <p class="text-xl leading-relaxed text-[var(--text-muted)] max-w-xl">
          Mon approche ne s'arrête pas à l'écriture de lignes de code. J'analyse les besoins pour concevoir des solutions qui maximisent la performance et la satisfaction utilisateur.
        </p>
        
      </div>

      <!-- Real CV Quote/Summary Section -->
      <div class="grid grid-cols-1 gap-6 pt-4">
          <div v-for="point in points" :key="point.title" class="flex gap-8 items-start">
            <div class="w-12 h-12 flex-shrink-0 bg-[var(--accent-light)] rounded-2xl flex items-center justify-center text-[var(--accent)] font-bold text-xl shadow-inner">
              ✓
            </div>
            <div class="space-y-1">
              <h4 class="font-black text-xl text-[var(--primary)] tracking-tight">{{ point.title }}</h4>
              <p class="text-[var(--text-muted)] text-base leading-relaxed">{{ point.desc }}</p>
            </div>
          </div>
        </div>
    </section>

    <!-- 05. TECHNICAL ECOSYSTEM -->
    <div class="py-24 bg-slate-950 rounded-[3.5rem] text-center animate-reveal delay-300 relative overflow-hidden group/eco shadow-[0_40px_100px_rgba(0,0,0,0.1)]">
      <!-- Decorative Elements -->
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] transition-transform duration-1000 group-hover/eco:scale-150"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] transition-transform duration-1000 group-hover/eco:scale-150"></div>

      <div class="space-y-4 px-6 relative z-10">
        <div class="text-indigo-300 text-xl font-black uppercase tracking-[0.5em] animate-pulse">L'écosystème Technique</div>
        <h3 class="text-4xl md:text-5xl ont-black text-white leading-tight">Technofocus <br/> <span class="text-indigo-400">& Stack.</span></h3>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-16 gap-x-8 px-12 mt-10 opacity-60 hover:opacity-100 transition-opacity duration-1000 relative z-10">
        <div v-for="tech in fullStack" :key="tech" class="group/item flex flex-col items-center gap-4">
          <div class="text-xl font-black text-white tracking-tighter group-hover/item:text-indigo-400 group-hover/item:scale-125 transition-all cursor-default duration-500">
            {{ tech }}
          </div>
          <div class="w-1 h-1 bg-indigo-500/0 rounded-full group-hover/item:bg-indigo-500 transition-all duration-500"></div>
        </div>
      </div>
    </div>

    <!-- 06. FINAL CALL TO ACTION -->
    <section class="max-w-4xl mx-auto py-20 text-center space-y-12 animate-reveal delay-500">
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--primary)] leading-[0.9] tracking-tighter">
        Me contactez pour <span class="italic text-[var(--accent)]">discuter ?</span>
      </h2>
      <p class="text-xl md:text-2xl text-[var(--text-muted)] font-medium max-w-2xl mx-auto">
        Disponible pour des projets à forte valeur ajoutée, de l'élaboration de design systems à l'intégration de solutions IA.
      </p>
      <div class="pt-">
        <NuxtLink to="/contact" class="px-10 py-5 border-2 rounded-2xl font-black transition-all text-lg bg-[var(--primary)] backdrop-blur-sm text-[var(--bg)]">
          Me contacter
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { label: "Expériences", value: "3+ Ans" },
  { label: "Technologies maîtrisées", value: "10+" },
  { label: "Veille Technologique", value: "100% Passionné" },
  { label: "Cafés Bus", value: "∞" }
]

const points = [
  { title: "Développement Frontend Moderne", desc: "Focus sur la création d'interfaces réactives et intuitives avec React et Nuxt." },
  { title: "Intégration Intelligence Artificielle", desc: "Intégration de modèles d'IA pour enrichir les applications avec des fonctionnalités génératives, interactives, ou automatisées." },
  { title: "Infrastructure Solide", desc: "Mise en œuvre de stack moderne et coherente pour des projets scalables." }
]

const featuredProjects = [
  { 
    title: "Carviz Dashboard", 
    desc: "Refonte de l'architecture frontend d'un dashboard analytique industriel avec intégration d'IA prédictive.",
    year: "2024",
    tags: ["Nuxt 3", "AI", "TypeScript"]
  },
  { 
    title: "FCJM Logistics", 
    desc: "Optimisation des flux de données logistiques et conception d'une interface de gestion métier haute-disponibilité.",
    year: "2023",
    tags: ["Next.js", "Firebase", "Realtime"]
  }
]

const fullStack = [
  "NUXT 3", "VUE 3", "REACT", "TYPESCRIPT", "NEST.JS", "NODE.JS", 
  "SUPABASE", "FIREBASE", "POSTGRES", "AWS", "DOCKER", "CI/CD"
]
</script>
