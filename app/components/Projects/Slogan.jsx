'use client'

import { useState, useEffect, useRef } from 'react'

function Slogan() {
  const slogans = [
    'Innovation',
    'Strategy',
    'Identity',
    'Branding',
    'Design',
    'Creation',
    'Solutions',
  ]
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef(null)
  const isResetting = useRef(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (isResetting.current) return // Блокируем обновление, если идет ресет
      setCurrentIndex((prevIndex) => prevIndex + 1)
    }, 3000) // Интервал между прокрутками

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const container = containerRef.current

    if (currentIndex === slogans.length) {
      isResetting.current = true // Устанавливаем флаг ресета
      setTimeout(() => {
        // Ждем завершения анимации
        container.style.transition = 'none' // Убираем анимацию
        setCurrentIndex(0) // Сбрасываем индекс
        container.style.transform = `translateY(0px)` // Возвращаем к началу
        setTimeout(() => {
          container.style.transition = 'transform 1s ease-in-out' // Возвращаем анимацию
          isResetting.current = false // Снимаем флаг ресета
        }, 50) // Даем небольшой промежуток для применения стилей
      }, 1000) // Длительность текущей анимации (1s)
    }
  }, [currentIndex, slogans.length])

  return (
    <div className='relative 3xl:w-[1194px] 2lg:w-[836px] 3xl:text-[13.125rem] 2lg:text-[9.188rem] 3xl:leading-[10rem] 2lg:leading-[7rem] font-bold -tracking-[0.03em]'>
      {/* Статичные строки */}
      <div className='h-[10rem]'>OurCreative</div>
      <div className='h-[10rem]'>Approach</div>
      <div className='h-[10rem] flex items-center'>
        <span>to</span>
        {/* Область для анимации */}
        <div
          className='relative overflow-hidden h-[12.6rem] text-secondary mt-[2.75rem]'
          style={{ width: '100%' }}
        >
          <div
            ref={containerRef}
            className='absolute w-full'
            style={{
              transform: `translateY(-${currentIndex * 14}rem)`,
              transition: isResetting.current
                ? 'none'
                : 'transform 1s ease-in-out',
            }}
          >
            {slogans.concat(slogans[0]).map((slogan, index) => (
              <div
                key={index}
                className='h-[12rem] flex items-start justify-start'
                style={{ marginBottom: '2rem' }} // Дополнительный отступ между словами
              >
                {slogan}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slogan
