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
        secondary: '#727272', // Заголовки
        text: '#ffffff', // Основной текст
        footer: '#181818', // Фон футера
      },
      fontFamily: {
        sans: ['"Cera Pro"', 'sans-serif'], // Подключаем Cera Pro
      },
      screens: {
        '2lg': '1200px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}
