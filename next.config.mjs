import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // appDir: true, // Удалите или закомментируйте, если это вызывает ошибку
  },
  webpack: (config) => {
    // Добавление алиасов для удобства импорта
    config.resolve.alias['@'] = path.resolve(__dirname, 'src')
    return config
  },
}

export default nextConfig
