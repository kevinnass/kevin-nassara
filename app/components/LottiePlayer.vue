<template>
  <div :class="['lottie-player', containerClass]">
    <ClientOnly>
      <DotLottieVue
        :src="src"
        :loop="loop"
        :autoplay="autoplay"
        v-bind="$attrs"
        class="w-full h-full"
      />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'

interface Props {
  src: string
  loop?: boolean
  autoplay?: boolean
  containerClass?: string
}

withDefaults(defineProps<Props>(), {
  loop: true,
  autoplay: true,
  containerClass: ''
})
</script>

<style scoped>
.lottie-player {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
</style>
