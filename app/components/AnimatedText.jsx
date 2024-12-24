import { useState, useEffect, useRef } from 'react'

function AnimatedText({ phrases }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef(null)
  const isResetting = useRef(false)
  const animationTimeout = useRef(null)
  const isMounted = useRef(true)
  const [height, setHeight] = useState(15)
  const [clipHeight, setClipHeight] = useState(10)
  const animationFrame = useRef(null)
  const lastTime = useRef(null)

  useEffect(() => {
    const getHeightsForScreen = () => {
      if (window.innerWidth >= 1920) return { height: 15, clipHeight: 12.5 }
      if (window.innerWidth >= 1200) return { height: 15, clipHeight: 11 }
      if (window.innerWidth >= 768) return { height: 10.5, clipHeight: 8.75 }
      if (window.innerWidth >= 480) return { height: 5.75, clipHeight: 4.75 }
      return { height: 3.9, clipHeight: 3.45 }
    }

    const handleResize = () => {
      const { height, clipHeight } = getHeightsForScreen()
      setHeight(height)
      setClipHeight(clipHeight)
    }

    window.addEventListener('resize', handleResize)
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
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
    }
  }, [])

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animationFrame.current) {
          cancelAnimationFrame(animationFrame.current)
        }
      } else {
        startAnimation()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    startAnimation()

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  const startAnimation = () => {
    if (!isMounted.current || !containerRef.current) return

    const step = (timestamp) => {
      if (!lastTime.current) lastTime.current = timestamp
      const elapsed = timestamp - lastTime.current

      if (elapsed > 3000) {
        setCurrentIndex((prevIndex) => prevIndex + 1)
        lastTime.current = timestamp
      }

      animationFrame.current = requestAnimationFrame(step)
    }

    animationFrame.current = requestAnimationFrame(step)
  }

  useEffect(() => {
    if (!containerRef.current || !isMounted.current) return

    const container = containerRef.current

    if (currentIndex === phrases.length) {
      isResetting.current = true

      animationTimeout.current = setTimeout(() => {
        if (!containerRef.current || !isMounted.current) return

        container.style.transition = 'none'
        setCurrentIndex(0)
        container.style.transform = `translateY(0px)`

        animationTimeout.current = setTimeout(() => {
          if (!containerRef.current || !isMounted.current) return

          container.style.transition = 'transform 0.3s ease-in-out'
          isResetting.current = false
        }, 50)
      }, 1000)
    }
  }, [currentIndex, phrases.length])

  return (
    <div
      className='relative w-full overflow-hidden'
      style={{
        height: `${height}rem`,
        clipPath: `inset(${height - clipHeight}rem 0 0 0)`,
      }}
    >
      <div
        ref={containerRef}
        className='absolute w-full'
        style={{
          transform: `translateY(-${currentIndex * height}rem)`,
          transition: isResetting.current
            ? 'none'
            : 'transform 0.3s ease-in-out',
          boxSizing: 'content-box',
        }}
      >
        {phrases.concat(phrases[0]).map((phrase, index) => (
          <div
            key={index}
            className='text-secondary font-bold'
            style={{
              height: `${height}rem`,
              lineHeight: `${height}rem`,
              textAlign: 'left',
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
