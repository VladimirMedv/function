'use client'

import Link from 'next/link'
import Constructor from '../components/Constructor'

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

export default function PageServices() {
  return (
    <section className='flex flex-col items-center justify-center 7md:px-10 px-5 2lg:py-[12.5rem]  4sm:py-[9.375rem] max-sm:py-[7.5rem] overflow-hidden  gap-[12.5rem]'>
      <div className='flex flex-col items-center justify-center'>
        <h2
          className={`text-[12.813rem] 7md:text-[20rem] 2lg:text-[31.875rem] text-secondary transform transition-transform duration-700 2lg:leading-[641.07px] 7md:leading-[402.24px] leading-[257.68px] font-bold `}
        >
          Services.
        </h2>
        <div className='flex flex-wrap justify-between 2lg:-mt-[11.4rem] 7md:-mt-[7rem] -mt-[5.1rem] z-10 max-w-[100vw] 7md:px-10 px-5'>
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className='overflow-hidden flex items-center flex-wrap 2lg:leading-[4.063rem] leading-[2.375rem]' // Контейнер для эффекта "вылезания из щели"
            >
              <div
                className={` text-3xl 2lg:text-5xl 2lg:leading-[4.063rem] leading-[2.375rem] transform transition-transform duration-700 `}
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
      </div>
      <div className='flex flex-row max-sm:flex-col items-start justify-center px-[10%] mb-14 mt-10 2lg:gap-48 7md:gap-32 4sm:gap-20 gap-10 text-text'>
        <div>
          <h1 className='2lg:text-[3.125rem]  4sm:text-3xl 4sm:leading-[38px] 2lg:leading-[65px] font-medium max-sm:hidden whitespace-pre-line'>
            {`Request for\n a commercial\n offer`}
          </h1>
          <h1 className='hidden max-sm:block text-2xl leading-[30px] font-medium whitespace-pre-line'>
            {`Request for\n a commercial offer`}
          </h1>
        </div>
        <div className='flex-1'>
          <Constructor
            btnBgColor='bg-gray-title'
            btnBgActiveColor='bg-secondary'
          />
        </div>
      </div>
    </section>
  )
}
