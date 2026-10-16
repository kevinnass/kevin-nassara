import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  content: [
    "./app/**/*.{vue,js,ts,jsx,tsx,md}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        khand: ['"Khand"', 'sans-serif'],
        display: ['"Khand"', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono: ['"Geist Mono"', 'monospace'],
      },
      colors: {
        sand: {
          50: '#FAF8F5',
          100: '#F5F0E8',
          200: '#EDE4D4',
          300: '#DFD1BA',
          400: '#CDB797',
          500: '#B89B74',
          800: '#4A3E31',
          900: '#2A2219',
        },
        slate: {
          950: '#020617',
        },
      },
    },
  },
}
