'use client'
import Link from 'next/link'
import { useEffect } from 'react'
import { usePageInfo } from './context/PageInfoContext'

export default function NotFound() {
  const { setPageInfo } = usePageInfo() // Достаем функцию для обновления информации

  useEffect(() => {
    // Устанавливаем информацию для Footer
    setPageInfo({ is404: true })

    return () => setPageInfo({ is404: false })
  }, [setPageInfo])

  return (
    <div className='flex justify-center items-center flex-col font-medium 3xl:text-[50px] text-[30px] 3xl:leading-[65px] leading-[38px] py-[12.5rem] 3xl:h-[1000px]'>
      <h1 className='-z-10 3xl:font-bold 3xl:text-[1160px] 2lg:text-[710px] 7md:text-[290px]  4sm:text-[200px] 3sm:text-[150px] -tracking-[0.03em] text-secondary'>
        404
      </h1>
      <div className='flex flex-row 3xl:px-[15rem] w-full'>
        <p className='whitespace-pre-line 3xl:pl-10'>{`Well, isn't this just f*ing great?\nHow did you even get here?`}</p>
        <Link
          href='/'
          className='underline 3xl:pt-[160px] flex-1 3xl:-ml-[90px]'
        >
          Head back to the good stuff
        </Link>
      </div>
    </div>
  )
}
