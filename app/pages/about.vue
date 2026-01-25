<template>
  <div class="space-y-12">
    <header>
      <h1 class="font-serif text-5xl md:text-6xl tracking-tight">À propos</h1>
      <p class="font-serif italic text-xl text-gray-600 mt-2">Mon parcours et mes compétences</p>
    </header>

    <main class="grid grid-cols-1 md:grid-cols-2 gap-16">
      <section class="space-y-8">
        <div>
          <h2 class="font-serif text-2xl border-b border-black/10 pb-2 mb-4 uppercase tracking-widest text-sm font-bold">Expériences</h2>
          <div class="space-y-6">
            <div>
              <h3 class="font-serif text-xl font-bold">Carviz — Software Developer</h3>
              <p class="text-xs uppercase tracking-widest text-gray-500">2024 - 2025</p>
              <p class="font-writing text-xl mt-2">Refonte d'architecture Nuxt 3 et intégration de modèles IA.</p>
            </div>
            <div>
              <h3 class="font-serif text-xl font-bold">FCJM — FullStack Developer</h3>
              <p class="text-xs uppercase tracking-widest text-gray-500">2023</p>
              <p class="font-writing text-xl mt-2">Développement de dashboards logistiques avec Next.js et Firebase.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 class="font-serif text-2xl border-b border-black/10 pb-2 mb-4 uppercase tracking-widest text-sm font-bold">Formation</h2>
          <div class="space-y-4 font-serif">
            <p><strong>EPITECH Paris</strong> — Master en Expertise Informatique (2020-2025)</p>
            <p><strong>EPITECH Barcelone</strong> — Spécialisation IoT (2023-2024)</p>
          </div>
        </div>
      </section>

      <section class="space-y-8">
        <div>
          <h2 class="font-serif text-2xl border-b border-black/10 pb-2 mb-4 uppercase tracking-widest text-sm font-bold">Compétences Techniques</h2>
          <div class="grid grid-cols-2 gap-4">
            <ul class="font-writing text-xl space-y-1 list-none p-0">
              <li>Vue.js / Nuxt.js</li>
              <li>React.js / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
            <ul class="font-writing text-xl space-y-1 list-none p-0">
              <li>Node.js / Nest.js</li>
              <li>Supabase / PostgreSQL</li>
              <li>AWS / Docker</li>
              <li>Python / Rust</li>
            </ul>
          </div>
        </div>

        <div class="bg-black/5 p-6 border-l-2 border-black/20 italic font-serif">
          <PenWriting 
            text="Basé à Paris, disponible pour des projets innovants."
            :delay="2"
          />
        </div>
      </section>
    </main>
  </div>
</template>
