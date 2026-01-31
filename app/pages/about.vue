<template>
  <div class="space-y-32">
    <!-- Profile Header -->
    <header class="max-w-4xl space-y-8">
      <div class="badge w-fit animate-reveal">Master en Expertise Informatique • Epitech</div>
      <h1 class="text-5xl md:text-7xl font-black tracking-tight animate-reveal delay-100 text-[var(--primary)]">Parcours <br/><span class="text-[var(--accent)]">& Vision.</span></h1>
      <p class="text-xl md:text-2xl text-[var(--text-muted)] font-medium leading-relaxed animate-reveal delay-200">
        Développeur logiciel frontend/fullstack passionné avec une expertise affirmée dans l'intégration de l'IA et de l'automatisation.
      </p>
    </header>

    <!-- Professional Timeline -->
    <section class="space-y-16 animate-reveal delay-300">
      <div class="flex items-center gap-6">
        <h2 class="text-xs font-black uppercase tracking-[0.4em] text-[var(--text-muted)]">Expériences Professionnelles</h2>
        <div class="flex-grow h-px bg-[var(--border)]"></div>
      </div>

      <div class="space-y-20">
        <div v-for="job in experience" :key="job.role" class="grid grid-cols-1 md:grid-cols-4 gap-8 group">
          <div class="text-[10px] font-black font-mono text-[var(--accent)] uppercase tracking-widest pt-2">
            {{ job.period }}
          </div>
          <div class="md:col-span-3 space-y-4">
            <h3 class="text-3xl font-black group-hover:text-[var(--accent)] transition-colors duration-300 text-[var(--primary)]">{{ job.role }}</h3>
            <div class="text-lg font-bold text-[var(--text-muted)] font-mono">{{ job.company }}</div>
            <p class="text-[var(--text)] font-medium leading-relaxed pt-2 max-w-2xl">{{ job.desc }}</p>
            <ul class="list-disc list-inside text-[var(--text-muted)] text-sm space-y-1 pl-4">
              <li v-for="bullet in job.bullets" :key="bullet">{{ bullet }}</li>
            </ul>
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
          <p class="text-[var(--text-muted)] font-medium opacity-80">{{ edu.degree }}</p>
        </div>
      </div>
    </section>

    <!-- Skills Matrix Expanded -->
    <section class="animate-reveal delay-500 space-y-12">
      <div class="flex items-center gap-6">
        <h2 class="text-xs font-black uppercase tracking-[0.4em] text-[var(--text-muted)]">Compétences Techniques</h2>
        <div class="flex-grow h-px bg-[var(--border)]"></div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(group, key) in skillGroups" :key="key" class="space-y-6">
          <h3 class="text-sm font-black uppercase tracking-widest border-l-2 border-[var(--accent)] pl-4 text-[var(--primary)]">{{ key }}</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in group" :key="skill" class="px-3 py-1 bg-[var(--bg-offset)] text-[var(--text)] text-[10px] font-bold uppercase rounded-md border border-[var(--border)]">{{ skill }}</span>
          </div>
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
    desc: "Refonte et structuration de l’architecture frontend du dashboard afin d’améliorer la maintenabilité, la scalabilité et la performance.",
    bullets: [
      "Conception de composants UI réutilisables et d'un design system cohérent.",
      "Développement d’interfaces analytiques (métriques, infographies, statistiques).",
      "Intégration de fonctionnalités basées sur l’IA (analyse d’images, dommages).",
      "Collaboration étroite avec les équipes produit, design et management."
    ]
  },
  {
    period: "FÉV 2023 - SEPT 2023",
    role: "Developpeur Fullstack",
    company: "FCJM",
    desc: "Développement de fonctionnalités métier pour un dashboard de gestion logistique.",
    bullets: [
      "Mise en place de flux de données via Firebase (Firestore, Hosting).",
      "Conception d'interfaces ergonomiques axées sur l'accessibilité.",
      "Traduction des besoins fonctionnels en solutions techniques."
    ]
  }
]

const education = [
  {
    period: "2020 - 2025",
    school: "EPITECH Paris",
    location: "Paris, France",
    degree: "Master en Expertise Informatique"
  },
  {
    period: "2023 - 2024",
    school: "EPITECH Barcelone",
    location: "Barcelone, Espagne",
    degree: "Spécialisation Internet des Objets connectés (IoT)"
  }
]

const skillGroups = {
  "Frontend": ["Vue.js", "React.js", "Nuxt.js", "Next.js", "TailwindCSS"],
  "Backend": ["Node.js", "Nest.js", "Express.js", "Supabase", "Firebase", "Postgres", "Prisma"],
  "DevOps": ["AWS", "Git", "Docker", "CI/CD"],
  "Languages": ["Javascript", "Typescript", "Python", "Rust", "Go", "C/C++"]
}
</script>
