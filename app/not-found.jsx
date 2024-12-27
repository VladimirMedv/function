'use client'
import Link from 'next/link'
import { useEffect } from 'react'
import { usePageInfo } from './context/PageInfoContext'
import Image from 'next/image'

export default function NotFound() {
  const { setPageInfo } = usePageInfo() // Достаем функцию для обновления информации

  useEffect(() => {
    // Устанавливаем информацию для Footer
    setPageInfo({ is404: true })

    return () => setPageInfo({ is404: false })
  }, [setPageInfo])

  return (
    <div className='relative w-full flex justify-center items-center 3xl:mb-10 3xl:text-[50px] text-[30px] 3xl:leading-[65px] leading-[38px] font-medium'>
      {/* Изображение по всей ширине и высоте, с учетом содержимого */}
      <Image
        src='/images/404.svg'
        alt='404'
        width={1920}
        height={1200}
        className='absolute inset-0 w-full object-contain 2lg:pt-0 pt-40'
      />

      {/* Обертка для текста и ссылки */}
      <div className='relative z-10 w-full flex flex-col items-start justify-center px-[10%] pt-[400px]'>
        <p className='mb-10 whitespace-pre-line'>
          {`Well, isn't this just f*ing great?\nHow did you even get here?`}
        </p>
        <Link
          href='/'
          className='underline self-end'
        >
          Head back to the good stuff
        </Link>
      </div>
    </div>
  )
}
