'use client'

import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import LogoB from './LogoB'
import Constructor from '../Constructor'

const GetPriceButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false) // Проверяем, что компонент смонтирован на клиенте

  useEffect(() => {
    if (isModalOpen) {
      // Отключить прокрутку при открытии меню
      document.body.style.overflow = 'hidden'
    } else {
      // Включить прокрутку обратно
      document.body.style.overflow = ''
    }

    return () => {
      // Очистка при размонтировании компонента
      document.body.style.overflow = ''
    }
  }, [isModalOpen])

  useEffect(() => {
    setIsMounted(true) // Устанавливаем флаг при монтировании
  }, [])

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev)
  }

  return (
    <>
      {/* Button "Get Price" visible only on screens wider than 480px */}
      <button
        onClick={toggleModal}
        className='hidden md:inline-block bg-bgwhite text-black font-normal rounded-full text-[0.875rem] leading-[2.125rem] px-[20px] py-[2px] transition-all hover:bg-secondary hover:text-text cursor-pointer duration-300 ease-in-out sm:text-nowrap'
        aria-label='Get Price'
      >
        Get Price
      </button>

      {/* Render modal only if component is mounted */}
      {isMounted &&
        createPortal(
          <div
            className={`fixed inset-0 z-50 bg-bgwhite text-black flex flex-col transition-opacity duration-300 ease-in-out ${
              isModalOpen
                ? 'opacity-100 pointer-events-auto'
                : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Modal header */}
            <div className='flex items-center justify-between 2lg:p-10 p-5'>
              <LogoB />
              <button
                onClick={toggleModal}
                className='bg-black text-text font-normal rounded-full text-[0.875rem] leading-[2.125rem] px-[20px] py-[2px] transition-all hover:bg-secondary duration-300 ease-in-out'
                aria-label='Close modal'
              >
                Close
              </button>
            </div>

            {/* Modal content */}
            <div className='flex md:flex-row flex-col items-start justify-center px-[10%] mb-14 pt-10 3xl:gap-[12.5rem] 2lg:gap-[8.375rem] md:gap-[5.688rem] gap-10 overflow-auto text-const-dark-gray'>
              <div>
                <h1 className='3xl:text-[3.125rem] text-3xl leading-[38px] 3xl:leading-[65px] font-medium hidden md:block whitespace-pre-line 3xl:-mt-[11px] 2lg:-mt-[7px] md:-mt-[6px]'>
                  {`Request for\n a commercial\n offer`}
                </h1>
                <h1 className='md:hidden block text-2xl leading-[30px] font-medium whitespace-pre-line pt-48'>
                  {`Request for\n a commercial offer`}
                </h1>
              </div>
              <div className='flex-1'>
                <Constructor />
              </div>
            </div>
          </div>,
          document.body // Этот код выполняется только после проверки isMounted
        )}
    </>
  )
}

export default GetPriceButton
