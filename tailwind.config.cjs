module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A2E',
        secondary: '#16213E',
        accent: '#0F3460',
        highlight: '#E94560',
        olive: '#a3a748',
        terracotta: '#c55e36',
      },
      fontFamily: {
        MonaSans: ['"Mona Sans"', 'sans-serif'],
        Montserrat: ['"Montserrat"', 'sans-serif'],
        Lora: ['var(--font-lora)', 'serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        'progress-fill': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'map-trace': {
          '0%': { 'stroke-dashoffset': '0' },
          '100%': { 'stroke-dashoffset': '-100' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'progress-fill': 'progress-fill 7s linear forwards',
        'map-trace': 'map-trace 12s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
