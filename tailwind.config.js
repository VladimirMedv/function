/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#151516',
        secondary: '#FF3F1A',
        text: '#F0EDE8',
        bgwhite: '#F5F4F2',
        'dark-gray': '#1C1F22',
        'gray-title': '#727272',
        footer: '#000000',
        'light-gray': '#B6BAAF',
        'light-gray-2': '#D9D9D9',
        'gray-cop': '#5B5B5B',
        'gray-disabled': '#C8C8C8',
        'const-dark-gray': '#20201E',
        'const-gray-line': '#5A5A5A',
        'border-services': '#454545',
      },
      fontFamily: {
        sans: ['"Cera Pro"', 'sans-serif'],
      },
      screens: {
        ssm: '360px',
        sm: '480px',
        '2lg': '1200px',
        '3xl': '1920px',
        'max-ssm': { max: '360px' },
        'max-sm': { max: '480px' },
        'max-2lg': { max: '1200px' },
        'max-3xl': { max: '1920px' },
      },
      animation: {
        'scroll-left': 'scroll-left 30s linear infinite',
        'scroll-right': 'scroll-right 30s linear infinite',
        fadeIn: 'fadeIn 1s ease-out forwards', // Плавное появление
        fadeInDelay: 'fadeInDelay 1.5s ease-out forwards', // Плавное появление с задержкой
        slideUp: 'slideUp 0.7s ease-out forwards',
        disperse: 'disperse 1s ease-out forwards', // Эффект "уноса ветром"
        appear: 'appear 1s ease-out forwards', // Плавное появление
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'scroll-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInDelay: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        disperse: {
          '0%': { opacity: 1, transform: 'translateX(0)', filter: 'blur(0px)' },
          '50%': {
            opacity: 0.5,
            transform: 'translateX(-10px)',
            filter: 'blur(2px)',
          },
          '100%': {
            opacity: 0,
            transform: 'translateX(-30px)',
            filter: 'blur(5px)',
          },
        },
        appear: {
          '0%': {
            opacity: 0,
            transform: 'translateX(30px)',
            filter: 'blur(5px)',
          },
          '50%': {
            opacity: 0.5,
            transform: 'translateX(10px)',
            filter: 'blur(2px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
            filter: 'blur(0px)',
          },
        },
      },
    },
  },
  plugins: [],
}
