import { ref, readonly } from 'vue'

const isMuted = ref(false)
const isPlaying = ref(false)

let bgAudio: HTMLAudioElement | null = null
let fadeInterval: any = null
let hasAutoStarted = false

// Volumes optimaux pour l'expérience sonore Wii
const TARGET_BG_VOLUME = 0.32
const THEME_SWITCH_VOLUME = 0.52
const HEADER_NAV_VOLUME = 0.45
const HOME_VOLUME = 0.55

/**
 * Initialise l'audio de fond Wii (musique d'ambiance officielle en boucle)
 */
function initBgAudio() {
  if (typeof window === 'undefined' || bgAudio) return

  bgAudio = new Audio('/audio/wii/bg-music.mp3')
  bgAudio.loop = true
  bgAudio.volume = 0
  bgAudio.preload = 'auto'
}

/**
 * Précharge les effets sonores Wii pour une réactivité instantanée au clic (0 latence)
 */
function preloadSfx() {
  if (typeof window === 'undefined') return
  const sfxList = [
    '/audio/wii/home-in.mp3',
    '/audio/wii/button-select.mp3',
    '/audio/wii/channel-open.mp3',
  ]
  sfxList.forEach(src => {
    const a = new Audio()
    a.preload = 'auto'
    a.src = src
  })
}

/**
 * Joue un effet sonore Wii isolé
 */
function playSFX(url: string, volume = 0.5) {
  if (typeof window === 'undefined') return
  try {
    // Si l'utilisateur clique alors que la musique n'a pas encore démarré (autoplay bloqué)
    // et qu'il n'a pas manuellement coupé le son, ce geste utilisateur débloque la musique d'ambiance
    if (!isMuted.value && !isPlaying.value && bgAudio) {
      startSound()
    }

    const sound = new Audio(url)
    sound.volume = volume
    sound.currentTime = 0
    sound.play().catch(() => {
      // Échec silencieux si bloqué
    })
  } catch (e) {
    // ignore
  }
}

/**
 * Fondu d'entrée progressif pour la musique d'ambiance
 */
async function startSound() {
  if (typeof window === 'undefined') return
  try {
    if (!bgAudio) {
      initBgAudio()
    }
    if (!bgAudio) return

    isMuted.value = false
    isPlaying.value = true

    clearInterval(fadeInterval)
    const playPromise = bgAudio.play()
    if (playPromise !== undefined) {
      await playPromise
    }

    // Fondu sonore agréable sur ~1.2s
    const currentVol = bgAudio.volume
    const duration = 1200
    const steps = 24
    const intervalTime = duration / steps
    const stepIncrement = (TARGET_BG_VOLUME - currentVol) / steps

    fadeInterval = setInterval(() => {
      if (!bgAudio) {
        clearInterval(fadeInterval)
        return
      }
      if (bgAudio.volume + stepIncrement >= TARGET_BG_VOLUME) {
        bgAudio.volume = TARGET_BG_VOLUME
        clearInterval(fadeInterval)
      } else {
        bgAudio.volume = Math.min(TARGET_BG_VOLUME, bgAudio.volume + stepIncrement)
      }
    }, intervalTime)
  } catch (e) {
    isPlaying.value = false
    console.debug('Autoplay initial restreint par le navigateur:', e)
  }
}

/**
 * Fondu de sortie progressif
 */
function stopSound() {
  if (typeof window === 'undefined' || !bgAudio) return
  isMuted.value = true
  isPlaying.value = false

  clearInterval(fadeInterval)
  const currentVol = bgAudio.volume
  const duration = 600
  const steps = 15
  const intervalTime = duration / steps
  const stepDecrement = currentVol / steps

  fadeInterval = setInterval(() => {
    if (!bgAudio) {
      clearInterval(fadeInterval)
      return
    }
    if (bgAudio.volume - stepDecrement <= 0.01) {
      bgAudio.volume = 0
      bgAudio.pause()
      clearInterval(fadeInterval)
    } else {
      bgAudio.volume = Math.max(0, bgAudio.volume - stepDecrement)
    }
  }, intervalTime)
}

/**
 * Bascule marche / arrêt du son d'ambiance
 */
async function toggleSound() {
  if (isPlaying.value) {
    stopSound()
  } else {
    await startSound()
  }
}

export function useAmbientSound() {
  /**
   * Tente de démarrer la musique dès le chargement ou au tout premier geste utilisateur
   */
  const setupAutoPlay = () => {
    if (typeof window === 'undefined' || hasAutoStarted) return
    hasAutoStarted = true

    initBgAudio()
    preloadSfx()

    // Essai de démarrage immédiat
    startSound()

    // Fallback garanti au premier geste (clic, scroll, touche clavier, toucher)
    const onFirstUserAction = () => {
      if (!isMuted.value && !isPlaying.value) {
        startSound()
      }
      window.removeEventListener('click', onFirstUserAction)
      window.removeEventListener('scroll', onFirstUserAction)
      window.removeEventListener('keydown', onFirstUserAction)
      window.removeEventListener('touchstart', onFirstUserAction)
    }

    window.addEventListener('click', onFirstUserAction, { passive: true })
    window.addEventListener('scroll', onFirstUserAction, { passive: true })
    window.addEventListener('keydown', onFirstUserAction, { passive: true })
    window.addEventListener('touchstart', onFirstUserAction, { passive: true })
  }

  /**
   * 1. Son unique lors du switch mode jour / nuit (effet shimmer d'ouverture de chaîne Wii)
   */
  const playThemeSwitchSound = () => {
    playSFX('/audio/wii/channel-open.mp3', THEME_SWITCH_VOLUME)
  }

  /**
   * 2. Son unique lors du clic sur un bouton du header (clic Wii précis)
   */
  const playHeaderNavSound = () => {
    playSFX('/audio/wii/button-select.mp3', HEADER_NAV_VOLUME)
  }

  /**
   * 3. Son unique lors du clic sur le bouton home (carillon signature du menu Home Wii)
   */
  const playHomeSound = () => {
    playSFX('/audio/wii/home-in.mp3', HOME_VOLUME)
  }

  /**
   * Son générique pour d'autres interactions
   */
  const playButtonSound = () => {
    playSFX('/audio/wii/button-select.mp3', HEADER_NAV_VOLUME)
  }

  return {
    isMuted: readonly(isMuted),
    isPlaying: readonly(isPlaying),
    toggleSound,
    startSound,
    stopSound,
    setupAutoPlay,
    playThemeSwitchSound,
    playHeaderNavSound,
    playHomeSound,
    playButtonSound,
  }
}
