/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {}, // Поддержка вложенности
    tailwindcss: {},
    autoprefixer: {}, // Автоматическое добавление вендорных префиксов
  },
}

export default config
