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
        primary: '#292929', // Основной фон
        secondary: '#fd3d18', // Заголовки
        text: '#ffffff', // Основной текст
        footer: '#181818', // Фон футера
      },
      fontFamily: {
        sans: ['"Cera Pro"', 'sans-serif'], // Подключаем Cera Pro
      },
      screens: {
        sm: '480px',
        '2lg': '1200px',
        '3xl': '1920px',
        'max-sm': { max: '480px' },
        'max-2lg': { max: '1200px' },
        'max-3xl': { max: '1920px' },
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.5s ease-out',
      },
    },
  },
  plugins: [],
}
