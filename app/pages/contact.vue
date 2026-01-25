<template>
  <div class="space-y-16">
    <header>
      <h1 class="font-serif text-5xl md:text-6xl tracking-tight">Contact</h1>
      <p class="font-serif italic text-xl text-gray-600 mt-2">Parlons de votre prochain projet</p>
    </header>

    <main class="grid grid-cols-1 md:grid-cols-2 gap-16">
      <div class="space-y-12">
        <div class="text-3xl leading-relaxed">
          <PenWriting 
            text="Vous pouvez me joindre par email ou via mes réseaux sociaux."
            :delay="0.5"
          />
        </div>

        <div class="space-y-4 font-serif text-lg">
          <div class="flex items-center space-x-4">
            <span class="w-12 h-px bg-black/20"></span>
            <a href="mailto:kevin.nassara@epitech.eu" class="hover:line-through transition-all lowercase">kevin.nassara@epitech.eu</a>
          </div>
          <div class="flex items-center space-x-4">
            <span class="w-12 h-px bg-black/20"></span>
            <span class="lowercase">+33 07 45 91 23 37</span>
          </div>
          <div class="flex items-center space-x-4">
            <span class="w-12 h-px bg-black/20"></span>
            <span class="lowercase">Paris, France</span>
          </div>
        </div>
      </div>

      <form @submit.prevent class="space-y-8 font-serif">
        <div class="group">
          <label class="block mb-4 text-xs uppercase tracking-[0.2em] font-bold opacity-40 group-focus-within:opacity-100 transition-opacity">Nom complet</label>
          <input type="text" placeholder="Votre plume..." class="w-full bg-transparent border-b border-black/10 focus:border-black outline-none py-3 transition-all placeholder:italic placeholder:opacity-30">
        </div>
        <div class="group">
          <label class="block mb-4 text-xs uppercase tracking-[0.2em] font-bold opacity-40 group-focus-within:opacity-100 transition-opacity">Message</label>
          <textarea rows="5" placeholder="Écrivez ici..." class="w-full bg-transparent border-b border-black/10 focus:border-black outline-none py-3 transition-all placeholder:italic placeholder:opacity-30 resize-none"></textarea>
        </div>
        <button type="submit" class="font-serif text-2xl italic hover:line-through transition-all pt-4">Envoyer le courrier →</button>
      </form>
    </main>
  </div>
</template>
