<script setup lang="ts">
// Global store or route logic can go here
</script>

<template>
  <div class="min-h-screen bg-[var(--bg)] transition-colors duration-500">
    <Preloader />
    <CustomCursor />
    <AppHeaderTest />
    
    <main class="container-custom py-20 md:py-32">
      <NuxtPage />
    </main>

    <AppFooter />
  </div>
</template>

<style>
/* Global resets move to main.css */
</style>
