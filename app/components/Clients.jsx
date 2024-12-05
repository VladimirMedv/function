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

  // Состояние для отслеживания видимых строк
  const [visibleRows, setVisibleRows] = useState([])
  const rowRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setVisibleRows((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 }
    )

    rowRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      rowRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  // Разделение логотипов на строки
  const rows = []
  for (let i = 0; i < logos.length; i += 6) {
    rows.push(logos.slice(i, i + 6)) // По 6 логотипов в строке
  }

  return (
    <div className='w-full flex flex-col items-center'>
      <h2 className='text-3xl 2lg:text-5xl font-normal mb-8'>Clients</h2>
      <div className='space-y-8'>
        {' '}
        {/* Контейнер для строк с отступами */}
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            ref={(el) => (rowRefs.current[rowIndex] = el)}
            className={`grid grid-cols-2 gap-4 max-3xl:grid-cols-6 max-md:grid-cols-5 transition-opacity duration-500 ${
              visibleRows.includes(rowIndex) ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {row.map((logo, index) => (
              <div
                key={index}
                className='flex items-center justify-center'
              >
                <Image
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  width={234.81}
                  height={119.94}
                  className='
                    w-[165px] h-[84.28px]
                    max-md:w-[139px] max-md:h-[71px]
                    max-2lg:w-[142.5px] max-2lg:h-[72.79px]
                    2lg:w-[234.81px] 2lg:h-[119.94px]
                  '
                  priority
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Clients
