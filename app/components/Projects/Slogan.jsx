'use client'

import { useState, useEffect } from 'react'

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
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setCurrentIndex((prevIndex) =>
        prevIndex === slogans.length ? 1 : prevIndex + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [slogans.length])

  useEffect(() => {
    if (currentIndex === slogans.length) {
      const timeout = setTimeout(() => {
        setIsAnimating(false)
        setCurrentIndex(0)
      }, 1000)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, slogans.length])

  return (
    <div className='relative 3xl:w-[1194px] 3xl:text-[13.125rem] leading-[10rem] font-bold -tracking-[0.03em]'>
      {/* Статичные строки */}
      <div className='h-[10rem]'>OurCreative</div>
      <div className='h-[10rem]'>Approach</div>
      <div className='h-[10rem] flex items-center'>
        <span>to</span>
        {/* Область для анимации */}
        <div
          className='relative overflow-hidden h-[12.4rem] text-secondary mt-8'
          style={{ width: '100%' }}
        >
          <div
            className={`absolute transition-transform duration-[1000ms] ease-in-out ${
              isAnimating ? '' : 'transition-none'
            }`}
            style={{
              transform: `translateY(-${currentIndex * 14}rem)`, // Увеличиваем расстояние между словами
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
