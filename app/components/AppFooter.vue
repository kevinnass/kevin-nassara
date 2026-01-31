<template>
  <footer class="border-t border-[var(--border)] py-10 transition-colors duration-500">
    <div class="container-custom flex flex-col md:flex-row justify-between items-center gap-10">
      <div class="space-y-4 text-center md:text-left">
        <div class="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-widest">
          © {{ new Date().getFullYear() }} - Kevin Nassara
        </div>
      </div>
      
      <div class="flex gap-10">
        <a v-for="social in socials" :key="social.name" :href="social.link" class="text-xs font-bold text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors uppercase tracking-[0.15em]">
          {{ social.name }}
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const socials = [
  { name: 'GitHub', link: '#' },
  { name: 'LinkedIn', link: '#' },
]
</script>
