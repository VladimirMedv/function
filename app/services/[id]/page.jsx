'use client'

import React, { useState } from 'react'
import SERVICES from '../../data/services'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ContactForm from '../../components/ContactForm'
import Projects from '../../components/Projects/Projects'
import Services from '../../components/Services'

const ServiceDetails = () => {
  const pathname = usePathname()
  const service = SERVICES.find((s) => s.href === pathname)

  const [isFormVisible, setFormVisible] = useState(false) // Состояние для управления видимостью формы

  const handleButtonClick = () => {
    setFormVisible(true) // Показываем форму при клике на кнопку
  }

  if (!service) {
    return <p className='text-red-500'>Service not found</p>
  }

  return (
    <>
      <section className='text-text p-6 3xl:px-[12.5rem] md:px-[9.375rem] px-5 3xl:py-[12.5rem] pb-[9.375rem]'>
        <h2 className='text-[3.125rem] font-medium text-gray-title'>
          Services
        </h2>
        <h1 className='3xl:text-[5rem] text-[3.125rem] font-medium mb-4'>
          {service.label}
        </h1>
        <p className='3xl:text-[2.5rem] 3xl:leading-[3.125rem] text-2xl mb-6 tracking-[-0.03em] max-w-[68.5rem]'>
          {service.description}
        </p>

        <div className=''>
          {/* Кнопка отображается только если форма скрыта */}
          {!isFormVisible && (
            <button
              className='3xl:text-[1.375rem] text-sm leading-[2.125rem] 3xl:px-[30px] 3xl:py-[10px] px-[20px] py-[2px] bg-text hover:bg-secondary rounded-full text-black mb-[9.375rem] 3xl:mt-[2.938rem] sm:mt-[2.625rem] mt-8'
              onClick={handleButtonClick}
            >
              Request
            </button>
          )}

          {/* Форма отображается только если она видима */}
          {isFormVisible && (
            <div className='pb-[100px] justify-center'>
              <div className='flex flex-row w-full'>
                <div className='flex-1 max-sm:flex-none 2lg:text-[3.125rem] text-3xl text-left 2lg:leading-[4.063rem] leading-[2.375rem] font-medium flex flex-col justify-between'>
                  <div className=' whitespace-pre-line'>{`Order\na service`}</div>
                </div>
                <div className='flex-1 flex flex-col float-start justify-start gap-[60px] 2lg:gap-[100px]'>
                  <ContactForm />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className=''>
          {service.steps.map((step, index) => (
            <div
              key={index}
              className={`p-4 flex flex-row 3xl:gap-[8.75rem] 2lg:gap-[5.625rem] md:gap-[3.125rem] gap-[5.625rem] tracking-[-0.03em] ${
                index !== service.steps.length - 1
                  ? 'border-b border-b-border-services'
                  : ''
              }`}
            >
              <span className='text-[2.5rem] leading-[3.143rem] font-medium text-secondary'>
                0{index + 1}
              </span>
              <div className='flex md:flex-row flex-col 3xl:gap-[12.5rem] 2lg:gap-[8.375rem] md:gap-[5.625rem] gap-[1.375rem]'>
                <h2 className='3xl:text-[2.5rem] 3xl:leading-[3.143rem] text-[1.5rem] leading-[1.875rem] font-medium 3xl:max-w-[22rem] 2lg:max-w-[13rem] max-w-[12.75rem]'>
                  {step.title}
                </h2>
                <div className='flex flex-col gap-4 3xl:max-w-[45.25rem] 2lg:max-w-[27.25rem] md:max-w-[22.125rem]'>
                  <p className='text-text 3xl:text-[1.625rem] 3xl:leading-[2.5rem] text-[1.5rem] leading-[1.875rem] whitespace-pre-line'>
                    {step.details + '\n'}
                    {step.note && (
                      <Link
                        href={step.note.note_url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-secondary underline '
                      >
                        {step.note.note_text}
                      </Link>
                    )}
                  </p>
                  <div className='flex md:flex-row flex-col 3xl:gap-[3.75rem] md:gap-10 gap-[2px] text-nowrap'>
                    <p className='3xl:text-[1.625rem] 3xl:leading-[2.5rem] text-[1rem] leading-[1.625rem] text-gray-title'>
                      {step.duration}
                    </p>
                    {step.revisions && (
                      <p className='3xl:text-[1.625rem] 3xl:leading-[2.5rem] text-[1rem] leading-[1.625rem] text-gray-title'>
                        {step.revisions}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className='text-[3.125rem] font-medium text-gray-title p-6 3xl:px-[12.5rem] md:px-[9.375rem] px-5 pb-[1.875rem]'>
          Completed Projects
        </h2>
        <Projects />
      </section>
      <Services
        justify='justify-between'
        sectionStyle='2lg:-mt-[3.75rem] -mt-[2.5rem] 2lg:py-[12.5rem] py-[9.375rem] px-5'
      />
    </>
  )
}

export default ServiceDetails
