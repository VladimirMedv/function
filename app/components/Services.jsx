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
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true) // Trigger animation once
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
  }, [hasAnimated])

  return (
    <section
      ref={sectionRef}
      className='bg-primary text-text py-16 flex items-center justify-center 2lg:px-56 md:px-36 px-[20px]'
    >
      <div className='2lg:w-[1468px] max-2lg:w-[890px] max-md:w-[728px] max-sm:w-[440px] mx-auto'>
        <div className='flex flex-wrap mt-4'>
          <div className='overflow-hidden flex items-center'>
            <h2
              className={`text-3xl 2lg:text-5xl font-medium text-gray-title transform transition-transform duration-700 mr-2 ${
                hasAnimated ? 'translate-y-0' : 'translate-y-full'
              }`}
            >
              Services
            </h2>
          </div>
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className='overflow-hidden flex items-center flex-wrap 2lg:leading-[4.063rem] leading-[2.375rem]' // Контейнер для эффекта "вылезания из щели"
            >
              <div
                className={` text-3xl 2lg:text-5xl transform transition-transform duration-700 delay-[${
                  index * 100
                }ms] ${hasAnimated ? 'translate-y-0' : 'translate-y-full'}`}
              >
                <Link
                  href={service.href}
                  className='hover:underline hover:text-secondary transition-colors duration-300 whitespace-nowrap font-medium text-3xl 2lg:text-5xl  2lg:leading-[4.063rem] leading-[2.375rem]'
                  aria-label={service.label}
                  title={service.label}
                >
                  {service.label}
                </Link>
                {index < SERVICES.length - 1 && <span>,&nbsp;</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
