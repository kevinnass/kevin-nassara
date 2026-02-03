<template>
  <div class="space-y-40 pb-20">
    <!-- 01. SUPER HERO SECTION -->
    <header class="min-h-[60vh] flex flex-col justify-center space-y-10 group relative">
      <div class="absolute -top-20 -right-20 w-96 h-96 bg-[var(--accent-light)] rounded-full blur-[120px] -z-10 opacity-60"></div>
      
      <div class="space-y-8 max-w-5xl">
        
        <h1 class="text-6xl md:text-7xl font-black leading-[0.85] tracking-tighter text-[var(--primary)] animate-reveal delay-100">
          Software <span class="text-[var(--accent)] italic">Developer</span>
        </h1>
        
        <p class="text-2xl md:text-4xl text-[var(--text-muted)] font-medium max-w-3xl leading-tight animate-reveal delay-200">
          Bâtir des écosystèmes numériques <span class="text-[var(--primary)]">performants</span>, où la complexité technique s'efface devant une <span class="text-[var(--primary)] italic">élégance pure</span>.
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
    <div class="grid grid-cols-2 md:grid-cols-4 gap-12 py-10 border-y border-[var(--border)] animate-reveal delay-500">
      <div v-for="stat in stats" :key="stat.label" class="space-y-2">
        <div class="text-3xl md:text-4xl text-center font-black text-[var(--primary)]">{{ stat.value }}</div>
        <div class="text-[10px] text-center font-black uppercase tracking-[0.3em] text-[var(--text-muted)]">{{ stat.label }}</div>
      </div>
    </div>

    <!-- 03. VISION & PHILOSOPHY -->
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
      <div class="space-y-10 animate-reveal delay-700">
        <div class="flex items-center gap-6">
          <h2 class="text-xs font-black uppercase tracking-[0.4em] text-[var(--accent)]">Expertise & Vision</h2>
          <div class="flex-grow h-px bg-[var(--accent-light)]"></div>
        </div>
        <h3 class="text-4xl md:text-6xl font-black text-[var(--primary)] leading-[1.1]">
          Transformer le code en <span class="text-[var(--accent)]">levier business</span> stratégique.
        </h3>
        <p class="text-xl leading-relaxed text-[var(--text-muted)] max-w-xl">
          Mon approche ne s'arrête pas à l'écriture de lignes de code. J'analyse vos besoins métier pour concevoir des architectures frontend et fullstack qui maximisent la performance et la satisfaction utilisateur.
        </p>
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
      </div>

      <!-- Real CV Quote/Summary Section -->
      <div class="glass-card !p-12 space-y-8 animate-reveal delay-1000 bg-[var(--bg)]/40">
        <div class="w-16 h-1 bg-[var(--accent)]"></div>
        <p class="text-2xl font-medium leading-relaxed text-[var(--text)] italic">
          "Passionné par l'ingénierie logicielle, j'interviens de la conception UI/UX à l'intégration backend pour créer des applications performantes et centrées utilisateur."
        </p>
        <div class="flex items-center gap-4 border-t border-[var(--border)] pt-8">
          <div class="w-12 h-12 bg-[var(--primary)] rounded-full flex items-center justify-center text-[var(--bg)] font-black">KN</div>
          <div>
            <div class="font-black text-[var(--primary)]">Kevin Nassara</div>
            <div class="text-xs font-bold text-[var(--text-muted)] uppercase tracking-widest">Master Expertise Informatique • Epitech</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 04. FEATURED WORKS PREVIEW -->
    <section class="space-y-16 animate-reveal delay-500">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div class="space-y-4">
          <h2 class="text-xs font-black uppercase tracking-[0.4em] text-[var(--text-muted)]">Travaux Sélectionnés</h2>
          <h3 class="text-4xl md:text-6xl font-black text-[var(--primary)]">Réalisations <span class="text-[var(--accent)]">Phare.</span></h3>
        </div>
        <NuxtLink to="/projects" class="group flex items-center gap-4 text-xs font-black uppercase tracking-widest text-[var(--primary)] bg-[var(--bg-offset)] px-6 py-3 rounded-full hover:bg-[var(--accent-light)] transition-colors">
          Voir tout le portfolio
          <div class="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:text-[var(--bg)] transition-all">
            →
          </div>
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div v-for="proj in featuredProjects" :key="proj.title" class="glass-card !p-0 overflow-hidden group">
          <div class="aspect-video bg-[var(--bg-offset)] relative overflow-hidden">
             <!-- Visual placeholder representing the app -->
             <div class="absolute inset-0 flex items-center justify-center text-[var(--text-muted)] font-black text-8xl opacity-10 uppercase tracking-tighter select-none">
               {{ proj.title.split(' ')[0] }}
             </div>
             <!-- Animated Gradient Overlay -->
             <div class="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
             
             <div class="absolute bottom-10 left-10 flex gap-3">
               <span v-for="tag in proj.tags" :key="tag" class="px-5 py-2 bg-[var(--bg)]/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase text-[var(--text-muted)] shadow-sm border border-[var(--border)]">
                 {{ tag }}
               </span>
             </div>
          </div>
          <div class="p-12 space-y-5">
            <div class="flex justify-between items-center text-[var(--primary)]">
              <h4 class="text-3xl font-black group-hover:text-[var(--accent)] transition-colors tracking-tight">{{ proj.title }}</h4>
              <span class="text-xs font-bold text-[var(--text-muted)] font-mono">{{ proj.year }}</span>
            </div>
            <p class="text-[var(--text-muted)] text-lg leading-relaxed font-medium line-clamp-2">{{ proj.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 05. TECHNICAL ECOSYSTEM -->
    <div class="py-32 bg-slate-950 rounded-[3.5rem] text-center space-y-16 animate-reveal delay-300 relative overflow-hidden group/eco shadow-[0_40px_100px_rgba(0,0,0,0.1)]">
      <!-- Decorative Elements -->
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] transition-transform duration-1000 group-hover/eco:scale-150"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] transition-transform duration-1000 group-hover/eco:scale-150"></div>
      
      <div class="space-y-4 px-6 relative z-10">
        <div class="text-indigo-400 text-xs font-black uppercase tracking-[0.5em] animate-pulse">L'écosystème Technique</div>
        <h3 class="text-4xl md:text-6xl font-black text-white leading-tight">Technofocus <br/> <span class="text-indigo-400">& Stack.</span></h3>
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-16 gap-x-8 px-12 opacity-60 hover:opacity-100 transition-opacity duration-1000 relative z-10">
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
      <h2 class="text-5xl md:text-7xl lg:text-8xl font-black text-[var(--primary)] leading-[0.9] tracking-tighter">
        Prêt à bâtir le <span class="italic text-[var(--accent)]">futur ?</span>
      </h2>
      <p class="text-xl md:text-2xl text-[var(--text-muted)] font-medium max-w-2xl mx-auto">
        Disponible pour des projets à forte valeur ajoutée, de l'élaboration de design systems à l'intégration de solutions IA.
      </p>
      <div class="pt-6">
        <NuxtLink to="/contact" class="btn-primary !px-16 !py-6 text-xl shadow-2xl shadow-[var(--accent-light)]">
          Initialiser la discussion
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { label: "Expérience", value: "3+ Ans" },
  { label: "Spécialisation", value: "Process et Intégration IA" },
  { label: "Formation", value: "Master Epitech" },
  { label: "Localisation", value: "Paris / ES" }
]

const points = [
  { title: "Frontend Haute-Performance", desc: "Optimisation Core Web Vitals et architectures Nuxt / React." },
  { title: "Intégration Intelligence Artificielle", desc: "Automatisation de flux métier via LLM et analyse d'images." },
  { title: "Infrastructure Évolutive", desc: "Bases de données Supabase, Firebase et déploiement cloud." }
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
