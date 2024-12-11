'use client'
import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']")

    const smoothScroll = (target, duration = 800) => {
      const startPosition = window.pageYOffset
      const targetElement = document.querySelector(target)
      if (!targetElement) return

      const targetPosition = targetElement.offsetTop
      const distance = targetPosition - startPosition
      let startTime = null

      const animation = (currentTime) => {
        if (!startTime) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const run = easeOutQuad(timeElapsed, startPosition, distance, duration)
        window.scrollTo(0, run)

        if (timeElapsed < duration) requestAnimationFrame(animation)
      }

      const easeOutQuad = (t, b, c, d) => {
        t /= d
        return -c * t * (t - 2) + b
      }

      requestAnimationFrame(animation)
    }

    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        smoothScroll(link.getAttribute('href'))
      })
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', () => {})
      })
    }
  }, [])

  return null
}
