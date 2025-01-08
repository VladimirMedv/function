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
  { href: '/services/promo-design', label: 'Key Visual' },
  { href: '/services/content-design', label: 'Content design' },
]

export default function PageServices() {
  return (
    <>
      <div className='relative 3xl:py-[6.875rem] 2lg:py-20 py-[3.75rem]'>
        {/* Изображение с точным позиционированием */}
        <Image
          src={'/images/services.svg'}
          alt='Services'
          width={2015}
          height={641}
          className='w-full h-auto object-cover'
        />
        {/* Секция с текстом, который будет под изображением */}
        <section className='flex flex-col items-center justify-center px-5 7md:px-10 py-0 3xl:-mt-[103px] 2lg:-mt-[63px] -mt-[38px]'>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-wrap justify-between'>
              {SERVICES.map((service, index) => (
                <div
                  key={index}
                  className='flex items-center flex-wrap 3xl:leading-[110px] 2lg:leading-[67px] leading-[43px]'
                >
                  <div
                    className={`3xl:text-[105px] 2lg:text-[64px] text-[40px] 3xl:leading-[110px] 2lg:leading-[67px] leading-[43px] transform transition-transform duration-700`}
                  >
                    <Link
                      href={service.href}
                      className='hover:underline transition-colors duration-300 whitespace-nowrap font-medium 3xl:text-[105px] 2lg:text-[64px] text-[40px] 3xl:leading-[110px] 2lg:leading-[67px] leading-[43px]'
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
      </div>
      <section className='flex 7md:flex-row flex-col items-start justify-center px-[10%] 2lg:gap-48 7md:gap-32 4sm:gap-20 gap-10 text-text 3xl:pb-[12.5rem] 7md:pb-[9.4rem] pb-[6.25rem]'>
        <div>
          <h1 className='2lg:text-[3.125rem]  4sm:text-3xl 4sm:leading-[38px] 2lg:leading-[65px] font-medium 4sm:block hidden whitespace-pre-line 3xl:-mt-[11px] 2lg:-mt-[27px] 7md:-mt-[6px]'>
            {`Request for\n a commercial\n offer`}
          </h1>
          <h1 className='4sm:hidden block text-2xl leading-[30px] font-medium whitespace-pre-line'>
            {`Request for\n a commercial offer`}
          </h1>
        </div>
        <div className='flex-1'>
          <Constructor
            btnBgColor='bg-gray-title'
            btnBgActiveColor='bg-secondary'
          />
        </div>
      </section>
    </>
  )
}
