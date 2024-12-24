import { useState, useEffect, useRef } from 'react'

function AnimatedText({ phrases }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef(null)
  const isResetting = useRef(false)
  const animationTimeout = useRef(null)
  const isMounted = useRef(true)
  const [height, setHeight] = useState(15) // Общая высота блока
  const [clipHeight, setClipHeight] = useState(10) // Высота, на которой текст начинает исчезать

  useEffect(() => {
    // Функция для определения высоты
    const getHeightsForScreen = () => {
      if (window.innerWidth >= 1920) return { height: 15, clipHeight: 12.5 } // 3xl
      if (window.innerWidth >= 1200) return { height: 15, clipHeight: 11 } // 2lg
      if (window.innerWidth >= 768) return { height: 10.5, clipHeight: 8.75 } // md
      if (window.innerWidth >= 480) return { height: 5.75, clipHeight: 4.75 } // sm
      return { height: 3.9, clipHeight: 3.45 } // default
    }

    const handleResize = () => {
      const { height, clipHeight } = getHeightsForScreen()
      setHeight(height)
      setClipHeight(clipHeight)
    }

    window.addEventListener('resize', handleResize)

    // Устанавливаем начальные значения
    const { height, clipHeight } = getHeightsForScreen()
    setHeight(height)
    setClipHeight(clipHeight)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    isMounted.current = true

    return () => {
      isMounted.current = false
      if (animationTimeout.current) {
        clearTimeout(animationTimeout.current)
      }
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (isResetting.current || !containerRef.current) return
      setCurrentIndex((prevIndex) => prevIndex + 1)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!containerRef.current || !isMounted.current) return

    const container = containerRef.current

    if (currentIndex === phrases.length) {
      isResetting.current = true

      animationTimeout.current = setTimeout(() => {
        if (!containerRef.current || !isMounted.current) return

        container.style.transition = 'none'
        setCurrentIndex(0)
        container.style.transform = `translateY(0px)` // сброс позиции

        animationTimeout.current = setTimeout(() => {
          if (!containerRef.current || !isMounted.current) return

          container.style.transition = 'transform 1s ease-in-out'
          isResetting.current = false
        }, 50)
      }, 1000)
    }
  }, [currentIndex, phrases.length])

  return (
    <div
      className='relative w-full overflow-hidden'
      style={{
        height: `${height}rem`, // Высота всего блока
        clipPath: `inset(${height - clipHeight}rem 0 0 0)`, // Обрезаем область видимости сверху
      }}
    >
      <div
        ref={containerRef}
        className='absolute w-full'
        style={{
          transform: `translateY(-${currentIndex * height}rem)`, // Динамическая высота
          transition: isResetting.current ? 'none' : 'transform 1s ease-in-out',
          boxSizing: 'content-box',
        }}
      >
        {phrases.concat(phrases[0]).map((phrase, index) => (
          <div
            key={index}
            className='text-secondary font-bold'
            style={{
              height: `${height}rem`, // Высота строки
              lineHeight: `${height}rem`, // Вертикальное выравнивание текста
              textAlign: 'left', // Текст выравнивается по левому краю
            }}
          >
            {phrase}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimatedText
