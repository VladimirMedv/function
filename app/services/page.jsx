'use client'

import Link from 'next/link'
import Constructor from '../components/Constructor'
import Image from 'next/image'

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
    <>
      <Image
        src={'/images/services.svg'}
        alt='Services'
        width={2015}
        height={641}
        className='w-full h-auto object-cover 2lg:pt-[19.875rem]  4sm:pt-[9.375rem] pt-[7.5rem] -z-10 absolute top-0 left-0'
      />
      <section className='flex flex-col items-center justify-center 7md:px-10 px-5 3xl:pb-[12.5rem] 3xl:pt-[20rem] 2lg:pb-[12.5rem] 2lg:pt-[20rem] 4sm:py-[9.375rem] py-[7.5rem] overflow-hidden  gap-[12.5rem]'>
        <div className='flex flex-col items-center justify-center'>
          {/* <h2
          className={`text-[12.813rem] 7md:text-[20rem] 2lg:text-[31.875rem] text-secondary transform transition-transform duration-700 2lg:leading-[641.07px] 7md:leading-[402.24px] leading-[257.68px] font-bold `}
        >
          Services.
        </h2> */}

          <div className='flex flex-wrap justify-between 2lg:pt-[19.875rem] z-10 7md:px-10 px-5'>
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className='flex items-center flex-wrap 3xl:leading-[110px] 2lg:leading-[67px] leading-[43px]' // Контейнер для эффекта "вылезания из щели"
              >
                <div
                  className={` 3xl:text-[105px] 2lg:text-[64px] text-[40px] 3xl:leading-[110px] 2lg:leading-[67px] leading-[43px] transform transition-transform duration-700 `}
                >
                  <Link
                    href={service.href}
                    className='hover:underline  transition-colors duration-300 whitespace-nowrap font-medium 3xl:text-[105px] 2lg:text-[64px] text-[40px] 3xl:leading-[110px] 2lg:leading-[67px] leading-[43px]'
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
        <div className='flex 7md:flex-row flex-col items-start justify-center px-[10%] mb-14 mt-10 2lg:gap-48 7md:gap-32 4sm:gap-20 gap-10 text-text'>
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
    </>
  )
}
