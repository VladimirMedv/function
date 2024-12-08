'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const Clients = () => {
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

  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)

  // Наблюдаем за появлением компонента в области видимости
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [])

  return (
    <section className='bg-primary text-text py-16 flex items-center justify-center 2lg:px-56 md:px-36 px-5'>
      <div
        ref={containerRef}
        // className='w-full flex flex-col items-start mx-auto overflow-hidden'
        className='lg:w-[1468px] max-2lg:w-[890px] max-md:w-[728px] max-sm:w-[440px] mx-auto overflow-hidden'
      >
        <h2 className='text-3xl 2lg:text-5xl font-normal mb-8 text-gray-title'>
          Clients
        </h2>

        {/* Контейнер для строк */}
        <div
          className={`relative w-full h-[150px] 2lg:h-[250px] ${
            isVisible ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-1000`}
        >
          {/* Верхний ряд */}
          <div className='absolute top-0 w-full flex items-center space-x-4 animate-scroll-left'>
            {[...logos, ...logos].map((logo, index) => (
              <Image
                key={`top-${index}`}
                src={logo}
                alt={`Client logo ${index + 1}`}
                width={234.81}
                height={119.94}
                className='w-[165px] h-[84.28px] 
                max-md:w-[139px] max-md:h-[71px] 
                max-2lg:w-[142.5px] max-2lg:h-[72.79px] 
                2lg:w-[234.81px] 2lg:h-[119.94px]'
                priority
              />
            ))}
          </div>

          {/* Нижний ряд */}
          <div className='absolute bottom-0 w-full flex items-center justify-end space-x-4 animate-scroll-right'>
            {[...logos, ...logos].map((logo, index) => (
              <Image
                key={`bottom-${index}`}
                src={logo}
                alt={`Client logo ${index + 1}`}
                width={234.81}
                height={119.94}
                className='w-[165px] h-[84.28px] 
                max-md:w-[139px] max-md:h-[71px] 
                max-2lg:w-[142.5px] max-2lg:h-[72.79px] 
                2lg:w-[234.81px] 2lg:h-[119.94px]'
                priority
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
