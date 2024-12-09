'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

const SERVICES = [
  { href: '/services/corporate-identity', label: 'Corporate identity' },
  { href: '/services/product-identity', label: 'Product identity' },
  { href: '/services/personal-identity', label: 'Personal identity' },
  { href: '/services/brand-support', label: 'Brand support' },
  { href: '/services/naming', label: 'Naming' },
  { href: '/services/logo', label: 'Logo' },
  { href: '/services/packaging', label: 'Packaging' },
  { href: '/services/brand-guidelines', label: 'Brand guidelines' },
  { href: '/services/ui-ux', label: 'UI/UX' },
  { href: '/services/promo-design', label: 'Promo design' },
  { href: '/services/content-design', label: 'Content design' },
]

export default function Services() {
  const [visibleItems, setVisibleItems] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleItems(1) // Начать с первого элемента
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (visibleItems > 0 && visibleItems <= SERVICES.length + 1) {
      const timer = setTimeout(() => {
        setVisibleItems((prev) => prev + 1)
      }, 300) // Интервал появления (300 мс для мягкости)
      return () => clearTimeout(timer)
    }
  }, [visibleItems])

  return (
    <section
      ref={sectionRef}
      className='bg-primary text-text py-16 flex items-center justify-center 2lg:px-56 md:px-36 px-[20px]'
    >
      <div className='2lg:w-[1468px] max-2lg:w-[890px] max-md:w-[728px] max-sm:w-[440px] mx-auto'>
        <div className='flex items-center text-3xl 2lg:text-5xl flex-wrap 2lg:leading-[4.063rem] leading-[2.375rem]'>
          {/* Заголовок */}
          <h2
            className={`font-medium inline-block mr-2 text-gray-title transition-all duration-1000 ease-out ${
              visibleItems >= 1
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-5 scale-95'
            }`}
          >
            Services
          </h2>
          {/* Ссылки */}
          {SERVICES.map((service, index) => (
            <span
              key={index}
              className={`inline-block transition-all duration-1000 ease-out ${
                visibleItems > index + 1
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-5 scale-95'
              }`}
            >
              <Link
                href={service.href}
                className='hover:underline hover:text-secondary whitespace-nowrap font-medium'
                aria-label={service.label}
                title={service.label}
              >
                {service.label}
              </Link>
              {index < SERVICES.length - 1 && <span>,&nbsp;</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
