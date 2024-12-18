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
  const [isDisappearing, setIsDisappearing] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDisappearing(true) // Запуск анимации исчезновения
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slogans.length)
        setIsDisappearing(false) // Смена слова и запуск появления
      }, 1000) // Тайминг исчезновения должен совпадать с анимацией "disperse"
    }, 3000) // Общее время на смену слов

    return () => clearInterval(interval)
  }, [slogans.length])

  return (
    <div className='3xl:w-[1194px] 3xl:text-[13.125rem] leading-[10rem] font-bold -tracking-[0.03em]'>
      OurCreative Approach to
      <span
        className={`text-secondary ${
          isDisappearing ? 'animate-disperse' : 'animate-appear'
        }`}
      >
        {slogans[currentIndex]}
      </span>
    </div>
  )
}

export default Slogan
