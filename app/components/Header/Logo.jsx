'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Logo = () => {
  // Состояние для определения текущего размера экрана
  const [logoSrc, setLogoSrc] = useState('/images/logo_function_w.svg')
  const [size, setSize] = useState({ width: 145.26, height: 31.93 })

  useEffect(() => {
    // Функция для изменения логотипа в зависимости от ширины экрана
    const updateLogo = () => {
      const screenWidth = window.innerWidth

      if (screenWidth <= 480) {
        setLogoSrc('/images/logo_f_w.svg')
        setSize({ width: 19.54, height: 30.81 })
      } else {
        setLogoSrc('/images/logo_function_w.svg')
        setSize({ width: 145.26, height: 31.93 })
      }
    }

    updateLogo() // Устанавливаем начальное состояние
    window.addEventListener('resize', updateLogo) // Обновляем при изменении размера окна

    return () => window.removeEventListener('resize', updateLogo) // Чистим обработчик
  }, [])

  return (
    <Link
      href='/'
      aria-label='Home'
    >
      <Image
        src={logoSrc}
        alt='function logo'
        width={size.width}
        height={size.height}
        priority // Ускоряем загрузку логотипа
      />
    </Link>
  )
}

export default Logo
