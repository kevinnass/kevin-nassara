<template>
  <div class="max-w-5xl mx-auto space-y-8 py-6 px-4 md:px-0">
    <!-- Screen Action Button (Hidden when printing, non-fixed) -->
    <div class="no-print flex justify-end">
      <button 
        @click="triggerPrint" 
        class="px-6 py-3 bg-[var(--accent)] text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-indigo-700 transition-all shadow-md flex items-center gap-2"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 000-4h-6a2 2 0 000 4zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
        Télécharger en PDF
      </button>
    </div>

    <!-- MAIN PORTFOLIO DOCUMENT (Optimized for Print & PDF) -->
    <article class="bg-[var(--glass)] border border-[var(--border)] rounded-3xl p-8 md:p-14 space-y-12 shadow-xl print:shadow-none print:border-0 print:p-0 print:bg-white">
      
      <!-- 01. EXECUTIVE HEADER -->
      <header class="border-b border-[var(--border)] pb-8 space-y-6">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div class="space-y-2">
            <div class="text-xs font-black uppercase tracking-[0.3em] text-[var(--accent)]">Dossier de Compétences & Portfolio</div>
            <h1 class="text-4xl md:text-6xl font-black text-[var(--primary)] tracking-tight">Kevin Nassara</h1>
            <h2 class="text-xl md:text-2xl font-bold text-[var(--accent)]">Software Data Engineer</h2>
          </div>

          <!-- Contact Badges -->
          <div class="space-y-2 text-xs font-bold text-[var(--text-muted)] border-l-2 border-[var(--accent)] pl-4">
            <div>📍 Paris, France</div>
            <div>📧 <a href="mailto:kevin.nassara@epitech.eu" class="hover:underline">kevin.nassara@epitech.eu</a></div>
            <div>📞 <a href="tel:+330745912337" class="hover:underline">+33 07 45 91 23 37</a></div>
            <div>💻 <a href="https://github.com/kevinnass" target="_blank" class="hover:underline">github.com/kevinnass</a></div>
            <div>🔗 <a href="https://linkedin.com/in/kevin-nassara" target="_blank" class="hover:underline">linkedin.com/in/kevin-nassara</a></div>
          </div>
        </div>

        <p class="text-sm md:text-base text-[var(--text)] font-medium leading-relaxed pt-2">
          Ingénieur logiciel & data alliant développement full-stack moderne (Vue/Nuxt, TypeScript, FastAPI) et expertise data (SQL avancé, modélisation relationnelle, pipelines ETL et dashboards décisionnels). Passionné par l'intégration de l'IA et la création de produits numériques performants.
        </p>
      </header>

      <!-- 02. KEY METRICS HIGHLIGHTS -->
      <section class="grid grid-cols-2 md:grid-cols-4 gap-4 break-inside-avoid">
        <div v-for="stat in stats" :key="stat.label" class="bg-[var(--bg-offset)]/30 border border-[var(--border)] rounded-2xl p-4 text-center">
          <div class="text-2xl md:text-3xl font-black text-[var(--primary)]">{{ stat.value }}</div>
          <div class="text-[10px] font-black uppercase tracking-wider text-[var(--text-muted)] mt-1">{{ stat.label }}</div>
        </div>
      </section>

      <!-- 03. TECHNICAL ECOSYSTEM & SKILLS MATRIX -->
      <section class="space-y-6 break-inside-avoid">
        <div class="flex items-center gap-4">
          <h3 class="text-xs font-black uppercase tracking-[0.3em] text-[var(--accent)]">Écosystème Technique & Compétences</h3>
          <div class="flex-grow h-px bg-[var(--border)]"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="(group, key) in skillGroups" :key="key" class="bg-[var(--bg-offset)]/20 border border-[var(--border)] rounded-2xl p-5 space-y-3">
            <h4 class="text-xs font-black uppercase tracking-wider text-[var(--primary)]">{{ key }}</h4>
            <div class="flex flex-wrap gap-1.5">
              <span v-for="skill in group" :key="skill" class="px-2.5 py-1 bg-[var(--bg-offset)] text-[var(--text)] text-[10px] font-black uppercase tracking-wider rounded-lg border border-[var(--border)]">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- 04. PROFESSIONAL EXPERIENCE -->
      <section class="space-y-8">
        <div class="flex items-center gap-4">
          <h3 class="text-xs font-black uppercase tracking-[0.3em] text-[var(--accent)]">Expériences Professionnelles</h3>
          <div class="flex-grow h-px bg-[var(--border)]"></div>
        </div>

        <div class="space-y-8">
          <div v-for="job in experience" :key="job.role + job.company" class="border border-[var(--border)] rounded-2xl p-6 space-y-4 break-inside-avoid bg-[var(--bg-offset)]/10">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border)]/60 pb-3">
              <div>
                <h4 class="text-xl font-black text-[var(--primary)]">{{ job.role }} <span class="text-[var(--accent)]">@ {{ job.company }}</span></h4>
                <div class="text-xs text-[var(--text-muted)] font-medium mt-0.5">{{ job.desc }}</div>
              </div>
              <span class="text-xs font-mono font-black text-[var(--accent)] uppercase tracking-wider bg-[var(--accent-light)] px-3 py-1 rounded-full w-fit">
                {{ job.period }}
              </span>
            </div>

            <ul class="space-y-2 text-xs text-[var(--text)] font-medium">
              <li v-for="bullet in job.bullets" :key="bullet" class="flex items-start gap-2">
                <span class="text-[var(--accent)] font-bold mt-0.5">•</span>
                <span>{{ bullet }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 05. FEATURED PROJECTS SHOWCASE -->
      <section class="space-y-6 break-inside-avoid">
        <div class="flex items-center gap-4">
          <h3 class="text-xs font-black uppercase tracking-[0.3em] text-[var(--accent)]">Projets Clés Sélectionnés</h3>
          <div class="flex-grow h-px bg-[var(--border)]"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="project in projects" :key="project.title" class="border border-[var(--border)] rounded-2xl p-5 space-y-3 bg-[var(--bg-offset)]/20">
            <div class="flex items-center justify-between">
              <h4 class="text-base font-black text-[var(--primary)]">{{ project.title }}</h4>
              <span class="text-[9px] font-black uppercase tracking-widest text-[var(--accent)] bg-[var(--accent-light)] px-2 py-0.5 rounded-full border border-[var(--accent)]/20">
                {{ project.category }}
              </span>
            </div>
            <p class="text-xs text-[var(--text-muted)] leading-relaxed">{{ project.description }}</p>
            <div class="flex flex-wrap gap-1 pt-1">
              <span v-for="tag in project.tags" :key="tag" class="text-[9px] font-mono font-bold text-[var(--text-muted)] bg-[var(--bg-offset)] px-2 py-0.5 rounded">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- 06. EDUCATION & SOFT SKILLS -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 break-inside-avoid pt-4">
        <!-- Education -->
        <section class="space-y-4">
          <div class="flex items-center gap-4">
            <h3 class="text-xs font-black uppercase tracking-[0.3em] text-[var(--accent)]">Formation Académique</h3>
            <div class="flex-grow h-px bg-[var(--border)]"></div>
          </div>
          <div class="space-y-3">
            <div v-for="edu in education" :key="edu.school" class="border border-[var(--border)] rounded-xl p-4 space-y-1">
              <div class="flex items-center justify-between text-xs">
                <span class="font-black text-[var(--primary)]">{{ edu.school }}</span>
                <span class="font-mono text-[var(--accent)] font-bold">{{ edu.period }}</span>
              </div>
              <div class="text-xs text-[var(--text-muted)] font-medium">{{ edu.degree }}</div>
            </div>
          </div>
        </section>

        <!-- Soft Skills -->
        <section class="space-y-4">
          <div class="flex items-center gap-4">
            <h3 class="text-xs font-black uppercase tracking-[0.3em] text-[var(--accent)]">Soft Skills & Méthodes</h3>
            <div class="flex-grow h-px bg-[var(--border)]"></div>
          </div>
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in softSkills" :key="skill" class="px-3 py-1.5 bg-[var(--bg-offset)] text-[var(--primary)] text-xs font-bold rounded-xl border border-[var(--border)]">
              ✓ {{ skill }}
            </span>
          </div>
        </section>
      </div>

      <!-- FOOTER STAMP -->
      <footer class="pt-8 border-t border-[var(--border)] text-center text-xs font-mono text-[var(--text-muted)]">
        Document portfolio extrait en temps réel de kevinnassara.com — Kevin Nassara © {{ new Date().getFullYear() }}
      </footer>

    </article>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Portfolio PDF — Kevin Nassara',
  meta: [
    { name: 'description', content: 'Portfolio complet et imprimable de Kevin Nassara, Software Engineer.' }
  ]
})

const triggerPrint = () => {
  if (import.meta.client) {
    window.print()
  }
}

const stats = [
  { label: "Expérience Software", value: "3+ Ans" },
  { label: "Composants Design System", value: "+50" },
  { label: "Réduction Bugs Prod", value: "-60%" },
  { label: "Veille Technologique & IA", value: "100%" }
]

const skillGroups = {
  "Software & Frontend": ["Vue.js", "Nuxt.js", "React.js", "Next.js", "TypeScript", "Tailwind CSS", "Pinia", "Storybook", "PWA"],
  "Backend & Cloud": ["FastAPI (Python)", "Nest.js", "Node.js", "Supabase (PostgreSQL)", "Firebase", "Redis", "Prisma", "AWS", "Docker"],
  "IA Workflow & Spec-Driven": ["Claude Code", "Cursor", "Antigravity", "Spec-Driven", "Context Engineering", "Computer Vision"],
  "Testing & Observabilité": ["Vitest", "Jest", "Playwright", "Cypress", "Sentry (Tracing & Replay)", "WCAG"],
  "Langages de programmation": ["JavaScript / TypeScript", "Python", "C/C++", "Rust"],
  "Data & Business Intelligence": ["SQL Avancé", "PostgreSQL", "Supabase", "Metabase", "Power BI", "Data Dictionary", "ETL/ELT"]
}

const experience = [
  {
    period: "AOÛT 2024 – OCT 2025",
    role: "Software Engineer & Data",
    company: "Carviz",
    desc: "Startup IA — Produit SaaS d'inspection et d'estimation automatisée de dommages véhicules.",
    bullets: [
      "Conception et maintenance d'un Design System multi-thèmes (+50 composants UI réutilisables et typés Vue.js, Nuxt.js, Tailwind CSS, TypeScript), réduisant de 40% le temps d'intégration.",
      "Intégration de fonctionnalités IA Computer Vision : workflows d'édition d'images (upscale HD, détourage d'arrière-plan) et vues d'estimation automatisée par modèles IA.",
      "Refactorisation de l'architecture frontend 'AI-Ready' & Spec-Driven pour décupler l'efficacité des assistants IA agentiques (Claude Code, Cursor).",
      "Développement de microservices back-end avec FastAPI (Python) et Supabase (PostgreSQL) : modélisation relationnelle et Row Level Security (RLS).",
      "Développement du dashboard analytics & KPIs métier (ApexCharts, Unovis, store Pinia optimisé avec cache et debouncing).",
      "Testing et observabilité en production (Vitest, Jest, Sentry Tracing & Session Replay), réduisant les bugs de 60% et accélérant la résolution des incidents."
    ]
  },
  {
    period: "JAN 2023 – AVRIL 2024",
    role: "Software Engineer",
    company: "FCJM",
    desc: "Dashboard de gestion logistique métier et pilotage des flux.",
    bullets: [
      "Développement de 5 fonctionnalités principales de gestion logistique avec React.js et Next.js, livré en plusieurs sprints Scrum.",
      "Implémentation backend sur Firebase : modélisation des collections Firestore, règles de sécurité et déploiement continu via Firebase Hosting.",
      "Conception d'interfaces ergonomiques et accessibles (conformité WCAG), réduisant de 30% les retours utilisateurs négatifs.",
      "Mise en place de tests unitaires avec Jest (couverture 70%), assurant la fiabilité des fonctionnalités critiques du dashboard."
    ]
  }
]

const projects = [
  {
    title: "JobTracker",
    category: "IA & Automation",
    description: "Dashboard de suivi de candidatures avec extension navigateur et analyse intelligente par IA (Groq/Llama3.1).",
    tags: ["Vue.js/Nuxt", "Supabase", "Groq-llama3.1", "Pinia"]
  },
  {
    title: "Gallery-La",
    category: "Web & SaaS",
    description: "Plateforme portfolio artistique et création d'expositions virtuelles personnalisables.",
    tags: ["React/Next.js", "TypeScript", "Redux", "Supabase"]
  },
  {
    title: "Bcn-Student-Life",
    category: "Web & SaaS",
    description: "Guide interactif étudiant pour l'intégration à Barcelone.",
    tags: ["Vue.js", "Pinia", "Tailwind CSS"]
  },
  {
    title: "AirQuality IoT",
    category: "IoT",
    description: "PWA connectée à des capteurs IoT pour mesurer la qualité de l'air en temps réel.",
    tags: ["Vue.js", "Firebase", "PWA", "Sensors"]
  }
]

const education = [
  {
    period: "2020 – 2025",
    school: "EPITECH Paris",
    degree: "Master en Ingénierie logiciel"
  },
  {
    period: "2023 – 2024",
    school: "EPITECH Barcelone",
    degree: "Spécialisation Internet des Objets (IoT)"
  }
]

const softSkills = [
  "Agile / Scrum",
  "Code Review & Testing",
  "Autonomie & Rigueur",
  "Esprit d'équipe",
  "Résolution de problèmes complexes",
  "Anglais Professionnel"
]
</script>
