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
      { threshold: 0.5 }
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
      className='flex flex-col items-center justify-center md:px-10 px-5 2lg:py-[12.5rem] sm:py-[9.375rem] max-sm:py-[7.5rem] overflow-hidden'
    >
      {/* <div className='overflow-hidden flex items-center'> */}
      <h2
        className={`text-[12.813rem] md:text-[20rem] 2lg:text-[31.875rem] text-secondary transform transition-transform duration-700 2lg:leading-[641.07px] md:leading-[402.24px] leading-[257.68px] font-bold ${
          hasAnimated ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        Services.
      </h2>
      {/* </div> */}
      <div className='flex flex-wrap 2lg:-mt-[11.4rem] md:-mt-[7rem] -mt-[5.1rem] z-10'>
        {SERVICES.map((service, index) => (
          <div
            key={index}
            className='overflow-hidden flex items-center flex-wrap 2lg:leading-[4.063rem] leading-[2.375rem]' // Контейнер для эффекта "вылезания из щели"
          >
            <div
              className={` text-3xl 2lg:text-5xl 2lg:leading-[4.063rem] leading-[2.375rem] transform transition-transform duration-700 delay-[${
                index * 100
              }ms] ${hasAnimated ? 'translate-y-0' : 'translate-y-full'}`}
            >
              <Link
                href={service.href}
                className='hover:underline  transition-colors duration-300 whitespace-nowrap font-medium text-3xl 2lg:text-5xl 2lg:leading-[4.063rem] leading-[2.375rem]'
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
    </section>
  )
}
