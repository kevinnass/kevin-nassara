<template>
  <div class="space-y-32">
    <!-- Profile Header -->
    <header class="max-w-4xl space-y-8">
      <h1 class="text-5xl md:text-7xl font-black tracking-tight animate-reveal delay-100 text-[var(--primary)]">A propos de <span class="text-[var(--accent)]">Moi.</span></h1>
      <p class="text-xl md:text-2xl text-[var(--text-muted)] font-medium leading-relaxed animate-reveal delay-200">
        Mon objectif, <span class="text-[var(--accent)]">Transformer le code en levier business stratégique</span> en analysant les besoins pour concevoir des solutions qui maximisent la performance et la satisfaction utilisateur.
      </p>
    </header>

    <!-- Skills Matrix Expanded -->
    <section class="animate-reveal delay-500 space-y-12">
      <div class="flex items-center gap-6">
        <h2 class="text-xs font-black uppercase tracking-[0.4em] text-[var(--text-muted)]">Compétences Techniques</h2>
        <div class="flex-grow h-px bg-[var(--border)]"></div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(group, key) in skillGroups" :key="key" class="border-2 hover:scale-105 border-[var(--border)] rounded-3xl !p-8 flex flex-col gap-8 group hover:border-[var(--accent)] transition-all duration-500">
          <div class="flex items-center justify-between">
            <h3 class="text-base font-black uppercase tracking-widest text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors duration-300">{{ key }}</h3>
            <!-- Category Icon Mapping -->
            <div class="text-[var(--accent)] opacity-40 group-hover:opacity-100 transition-opacity duration-500">
              <svg v-if="key.includes('Frontend')" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <svg v-else-if="key.includes('Backend')" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7v10c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3V7c0-2-1.5-3-3.5-3h-9C5.5 4 4 5 4 7zm0 5h16M7 8v1m0 7v1"/></svg>
              <svg v-else-if="key.includes('AI')" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              <svg v-else-if="key.includes('CI/CD')" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
              <svg v-else class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            </div>
          </div>
          
          <div class="flex flex-wrap gap-2.5">
            <div v-for="skill in group" :key="skill" class="relative group/badge">
              <span class="inline-flex items-center px-4 py-2 bg-[var(--bg-offset)] hover:bg-[var(--accent)] hover:text-white text-[var(--text)] text-[11px] font-black uppercase tracking-wider rounded-xl border border-[var(--border)] hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-300">
                {{ skill }}
              </span>
              <!-- Individual Glow Effect -->
              <div class="absolute inset-0 bg-[var(--accent)] blur-lg opacity-0 group-hover/badge:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Professional Timeline -->
    <section class="space-y-16 animate-reveal delay-300">
      <div class="flex items-center gap-6">
        <h2 class="text-xs font-black uppercase tracking-[0.4em] text-[var(--text-muted)]">Expériences Professionnelles</h2>
        <div class="flex-grow h-px bg-[var(--border)]"></div>
      </div>

      <div class="relative space-y-0 pb-10">
        <!-- Vertical Timeline Line -->
        <div class="absolute left-[7px] md:left-[147px] top-4 bottom-4 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--border)] to-transparent opacity-30"></div>

        <div v-for="(job, index) in experience" :key="job.role" class="relative grid grid-cols-1 md:grid-cols-[140px_1fr] gap-8 md:gap-16 pb-20 group last:pb-0">
          <!-- Timeline Node (Mobile Only) -->
          <div class="absolute left-[2px] top-3 w-3 h-3 rounded-full bg-[var(--bg)] border-2 border-[var(--accent)] z-10 md:hidden"></div>

          <!-- Column 1: Period & Node -->
          <div class="relative flex flex-col items-start md:items-end pt-1">
            <div class="text-[12px] font-black font-mono text-[var(--text-muted)] group-hover:text-[var(--accent)] uppercase tracking-widest transition-colors duration-300">
              {{ job.period }}
            </div>
            <!-- Timeline Node (Desktop) -->
            <div class="absolute -right-[43px] top-3 hidden md:flex items-center justify-center">
              <div class="w-4 h-4 rounded-full bg-[var(--bg)] border-2 border-[var(--border)] group-hover:border-[var(--accent)] group-hover:scale-125 transition-all duration-500 z-10 flex items-center justify-center">
                <div class="w-1.5 h-1.5 rounded-full bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <!-- Pulse Effect -->
              <div class="absolute w-4 h-4 rounded-full bg-[var(--accent)] opacity-0 group-hover:animate-ping -z-0"></div>
            </div>
          </div>

          <!-- Column 2: Content -->
          <div class="glass-card !p-8 md:!p-10 !bg-transparent border border-transparent hover:border-[var(--border)] hover:!bg-[var(--bg-offset)]/30 transition-all duration-500 rounded-3xl group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.02)]">
            <div class="space-y-6">
              <div class="space-y-2">
                <h3 class="text-3xl md:text-4xl font-black text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors duration-500">
                  {{ job.role }}
                </h3>
                <div class="inline-flex items-center gap-2 px-3 py-1 bg-[var(--bg-offset)] border border-[var(--border)] rounded-lg text-sm font-bold text-[var(--text-muted)]">
                  <span class="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
                  {{ job.company }}
                </div>
              </div>
              
              <div class="space-y-4">
                <p class="text-[var(--text)] font-medium leading-relaxed max-w-4xl opacity-90">
                  <span class="text-[var(--accent)] font-extrabold flex items-center gap-2 uppercase text-sm mr-2 border-b border-[var(--accent)]/30">
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>
                    Description:
                  </span>
                  {{ job.desc }}
                </p>
                
                <div class="space-y-4">
                  <div class="text-[var(--accent)] text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>
                    Objectifs & Impact
                  </div>
                  <ul class="grid grid-cols-1 gap-3">
                    <li v-for="bullet in job.bullets" :key="bullet" class="flex gap-3 text-sm text-[var(--text-muted)] font-medium leading-normal bg-[var(--bg)]/50 p-3 rounded-xl border border-transparent hover:border-[var(--border)] transition-all">
                      <span class="text-[var(--accent)] mt-1.5">•</span>
                      {{ bullet }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Academic Journey -->
    <section class="space-y-16 animate-reveal delay-400">
      <div class="flex items-center gap-6">
        <h2 class="text-xs font-black uppercase tracking-[0.4em] text-[var(--text-muted)]">Parcours Académique</h2>
        <div class="flex-grow h-px bg-[var(--border)]"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div v-for="edu in education" :key="edu.school" class="space-y-4">
          <div class="text-xs font-black text-[var(--accent)] uppercase tracking-widest">{{ edu.period }}</div>
          <h3 class="text-2xl font-black text-[var(--primary)]">{{ edu.school }}</h3>
          <div class="text-[var(--text-muted)] font-bold">{{ edu.location }}</div>
          <p class="text-[var(--accent)] font-medium">{{ edu.degree }}</p>
          <p class="text-[var(--accent)] font-medium">{{ edu.spe }}</p>
        </div>
      </div>
    </section>

    <!-- Soft Skills Section -->
    <section class="animate-reveal delay-500 space-y-12 pb-20">
      <div class="flex items-center gap-6">
        <h2 class="text-xs font-black uppercase tracking-[0.4em] text-[var(--text-muted)]">Soft Skills</h2>
        <div class="flex-grow h-px bg-[var(--border)]"></div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="skill in softSkills" :key="skill" class=" text-[var(--text)] !p-8 flex items-center gap-6 group hover:border-[var(--accent)] transition-all duration-500">
          <div class="w-12 h-12 flex-shrink-0 bg-[var(--bg-offset) rounded-xl flex items-center justify-center text-[var(--accent)] border border-[var(--border)] group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-500">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3l1.5 7.5L21 12l-7.5 1.5L12 21l-1.5-7.5L3 12l7.5-1.5L12 3z" />
            </svg>
          </div>
          <span class="font-bold text-[var(--primary)] text-lg leading-tight">{{ skill }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const experience = [
  {
    period: "SEPT 2024 - SEPT 2025",
    role: "Frontend Engineer",
    company: "Carviz",
    desc: "Frontend Engineer dans une startup IA sur le volet Dashboard d'un produit SaaS IA destiné à automatiser le processus d'inspection, de vente et de marketing de véhicules en concessions.",
    bullets: [
      "Refonte et structuration de l’architecture frontend du dashboard (Nuxt 3, Vue, TypeScript) afin d’améliorer la maintenabilité, la scalabilité et la performance de l’application.",
      "Conception et développement de composants UI réutilisables et d’un design system garantissant une cohérence visuelle et une meilleure productivité produit.",
      "Developpement d’interfaces analytiques (métriques, infographie, statistiques) pour des besoins décisionnels d’utilisateur admin",
      "Développement de services backend et gestion des données applicatives avec Supabase et PostgreSQL.",
      "Intégration de fonctionnalités basées sur l’IA (analyse d’images, estimation de dommages), avec une configuration dynamique accessible depuis l’interface utilisateur",
      "Collaboration avec les équipes managment et design dans un environnement startup agile, avec un fort focus sur la qualité logicielle, l’expérience utilisateur et l’impact produit."
    ]
  },
  {
    period: "FÉV 2023 - SEPT 2023",
    role: "Developpeur Fullstack",
    company: "FCJM",
    desc: "Développement fullstack sur un projet dashboard de gestion logistique.",
    bullets: [
     "Développement de fonctionnalités métier pour un dashboard de gestion logistique avec Next.js et React.js",
     "Mise en place de flux de données et de services backend via Firebase (Firestore, Hosting) pour la gestion, la persistance et l’hébergement des données applicatives.",
     "Conception d’interfaces utilisateur performantes et ergonomiques, avec une attention particulière portée à la lisibilité, l’accessibilité et la maintenabilité du code.",
     "Traduction des besoins fonctionnels métiers en solutions techniques, en collaboration avec les équipes produit et techniques"
    ]
  }
]

const education = [
  {
    period: "2020 - 2025",
    school: "EPITECH Paris",
    location: "Paris, France",
    degree: "Master en Expertise Informatique",
    spe: "Software Developer"
  },
  {
    period: "2023 - 2024",
    school: "EPITECH Barcelone",
    location: "Barcelone, Espagne",
    degree: "Spécialisation Internet des Objets connectés (IoT)"
  }
]

const softSkills = [
  "Autonomie",
  "Esprit d'équipe",
  "Esprit d'analyse et de résolution de problèmes",
  "Sens du détail et de la qualité du code",
  "Vision produit",
  "Anglais Professionnel"
]

const skillGroups = {
  "Frontend & UI/UX": ["Vue.js", "React.js", "Nuxt.js", "Next.js", "TailwindCSS", "Framer Motion", "GSAP", "Shadcn/UI", "Storybook", "Figma"],
  "Backend & Database": ["Node.js", "Nest.js", "Express.js", "Supabase", "Firebase", "Postgres", "Prisma", "MongoDB"],
  "AI": ["IDE Agentic [Antigravity, Cursor, Windsurf]", "LLM [Claude, ChatGPT, Gemini]", "Agent [OpenClaw, ClaudeCowork]", "Automatisation [Gumloop, N8N, Make]"],
  "CI/CD & DevOps": ["AWS", "Docker", "Vercel", "Netlify", "GitHub Actions", "GitLab CI", "VPS", "Coolify"],
  "Languages": ["Javascript", "Typescript", "Python", "Rust", "Go", "C/C++"]
}
</script>
