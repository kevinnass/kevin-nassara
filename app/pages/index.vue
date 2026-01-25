<template>
  <div class="space-y-16">
    <header class="space-y-4">
      <h1 class="font-serif text-6xl md:text-8xl mb-2 opacity-0 animate-fade-in tracking-tighter">
        Kevin Nassara
      </h1>
      <p class="text-2xl md:text-3xl text-gray-700 font-serif italic opacity-0 animate-fade-in delay-500 border-l-4 border-black/10 pl-6 py-2">
        Software Developer
      </p>
    </header>

    <main class="max-w-3xl space-y-12">
      <div class="text-3xl md:text-4xl leading-relaxed">
        <PenWriting 
          text="Développeur logiciel passionné, spécialisé dans la création d'expériences numériques élégantes et performantes."
          :delay="1.2"
          :speed="0.05"
        />
      </div>
      
      <div class="text-2xl md:text-3xl text-gray-600 italic">
        <PenWriting 
          text="Expertise en Nuxt.js, Vue, et intégration d'IA pour des solutions modernes."
          :delay="6.5"
          :speed="0.06"
        />
      </div>
    </main>
    
    <div class="pt-8 opacity-0 animate-fade-in delay-2000">
      <NuxtLink to="/projects" class="font-serif text-xl border-b border-black/20 hover:border-black transition-colors pb-1 uppercase tracking-widest text-sm font-bold"> Explorer mes travaux →</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); filter: blur(10px); }
  to { opacity: 1; transform: translateY(0); filter: blur(0); }
}

.animate-fade-in {
  animation: fadeIn 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

.delay-500 { animation-delay: 0.5s; }
.delay-2000 { animation-delay: 11s; }
</style>
