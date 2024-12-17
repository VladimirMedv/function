'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

const logos = [
  '/images/clients/logo1.svg',
  '/images/clients/logo2.svg',
  '/images/clients/logo3.svg',
  '/images/clients/logo4.svg',
  '/images/clients/logo5.svg',
  '/images/clients/logo6.svg',
  '/images/clients/logo7.svg',
  '/images/clients/logo8.svg',
  '/images/clients/logo9.svg',
  '/images/clients/logo10.svg',
  '/images/clients/logo11.svg',
  '/images/clients/logo12.svg',
]

const Clients = () => {
  const [hasAnimated, setHasAnimated] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true) // Trigger animation
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [hasAnimated])

  return (
    <section className='flex items-center md:justify-center justify-between 3xl:px-56 2lg:px-40 px-5'>
      <div
        ref={containerRef}
        // className='lg:w-[1468px] max-2lg:w-[890px] max-md:w-[728px] max-sm:w-[440px] mx-auto'
      >
        <h2
          className={`3xl:text-[3.125rem] text-[1.875rem] 3xl:leading-[4.063rem] leading-[2.375rem] mb-8 text-gray-title font-medium transform transition-transform duration-700 ease-out ${
            hasAnimated
              ? 'translate-y-0 opacity-100'
              : 'translate-y-full opacity-0'
          }`}
        >
          Clients
        </h2>

        {/* Логотипы в два ряда */}
        <div className='grid grid-cols-2 2lg:gap-14 md:gap-8 gap-5 md:grid-cols-5 2lg:grid-cols-6'>
          {logos.map((logo, index) => (
            <div
              key={index}
              className='overflow-hidden flex justify-center'
            >
              <Image
                src={logo}
                alt={`Client logo ${index + 1}`}
                width={234.81}
                height={119.94}
                style={{
                  transform: hasAnimated ? 'translateY(0)' : 'translateY(65%)',
                  opacity: hasAnimated ? 1 : 0,
                  transition: `transform 0.35s ease-out ${
                    index * 0.1
                  }s, opacity 0.3s ease-out ${index * 0.1}s`,
                }}
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
