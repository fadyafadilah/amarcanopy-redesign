/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        amarRed: '#E50909',
        amarBlack: '#070707',
        amarSoft: '#F8F8F8'
      },

      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },

      boxShadow: {
        soft: '0 24px 70px rgba(7, 7, 7, 0.10)'
      },

      // ✅ ANIMATION
      animation: {
        kenburns: 'kenburns 8s ease-in-out infinite alternate',
        fadeUp: 'fadeUp 0.8s ease-out forwards'
      },

      // ✅ KEYFRAMES
      keyframes: {
        kenburns: {
          '0%': {
            transform: 'scale(1.05) translate(0, 0)'
          },
          '100%': {
            transform: 'scale(1.15) translate(-1.5%, -1.5%)'
          }
        },

        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(25px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },

      // ✅ DELAY SUPPORT (penting untuk stagger)
      transitionDelay: {
        200: '200ms',
        400: '400ms',
        600: '600ms',
        800: '800ms'
      }
    }
  },
  plugins: []
}