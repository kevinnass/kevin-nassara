<template>
  <div class="space-y-32">
    <header class="max-w-3xl space-y-8">
      <div class="badge w-fit animate-reveal">Partenariat Stratégique</div>
      <h1 class="text-5xl md:text-7xl font-black tracking-tight animate-reveal delay-100 text-[var(--primary)]">Collaborons <br/><span class="text-[var(--accent)]">Ensemble.</span></h1>
      <p class="text-xl md:text-2xl text-[var(--text-muted)] font-medium leading-relaxed animate-reveal delay-200">
        Prêt à construire la prochaine génération d'infrastructure numérique ? Basé à <span class="text-[var(--primary)] font-bold">Paris</span>, je suis disponible pour des opportunités en engineering et consulting.
      </p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 animate-reveal delay-300">
      <div v-for="channel in channels" :key="channel.label" class="glass-card flex items-center justify-between group">
        <div class="space-y-2">
          <div class="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--text-muted)]">{{ channel.label }}</div>
          <div class="text-xl font-black group-hover:text-[var(--accent)] transition-colors text-[var(--primary)]">{{ channel.value }}</div>
        </div>
        <a :href="channel.link" target="_blank" class="w-14 h-14 flex items-center justify-center border border-[var(--border)] rounded-2xl group-hover:bg-[var(--primary)] group-hover:text-[var(--bg)] group-hover:scale-110 transition-all duration-500 shadow-sm">
          <span class="text-xl font-black">↗</span>
        </a>
      </div>
    </div>

    <!-- Corporate Contact CTA -->
    <div class="animate-reveal delay-500">
      <div class="bg-[var(--accent)] rounded-[2rem] p-12 md:p-20 text-center space-y-10 group overflow-hidden relative">
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        <div class="relative z-10 space-y-6">
          <h2 class="text-4xl md:text-6xl font-black text-white leading-tight">Envie d'échanger sur <br/> un projet ?</h2>
          <p class="text-indigo-100 text-xl font-medium max-w-lg mx-auto opacity-80">
            Expertise en développement Fullstack et intégration d'IA pour produits haute performance.
          </p>
          <div class="pt-6">
            <a href="mailto:kevin.nassara@epitech.eu" class="px-12 py-5 bg-[var(--bg)] text-[var(--accent)] dark:text-white font-black rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-2xl">
              Démarrer la Discussion
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const channels = [
  { label: 'E-mail Professionnel', value: 'kevin.nassara@epitech.eu', link: 'mailto:kevin.nassara@epitech.eu' },
  { label: 'Téléphone', value: '+33 07 45 91 23 37', link: 'tel:+330745912337' },
  { label: 'Localisation', value: 'Paris, France', link: '#' },
  { label: 'LinkedIn', value: 'Kevin Nassara', link: '#' }
]
</script>
