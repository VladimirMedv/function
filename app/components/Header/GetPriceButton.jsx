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
        className='hidden sm:inline-block bg-bgwhite text-black font-normal rounded-full text-sm leading-[2.125rem] px-[20px] py-[2px] transition-all hover:bg-secondary hover:text-text cursor-pointer duration-300 ease-in-out sm:text-nowrap'
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
            <div className='flex items-center justify-between md:p-10 p-5'>
              <LogoB />
              <button
                onClick={toggleModal}
                className='bg-black text-text font-normal rounded-full text-sm leading-[2.125rem] px-[20px] py-[2px] transition-all hover:bg-secondary duration-300 ease-in-out'
                aria-label='Close modal'
              >
                Close
              </button>
            </div>

            {/* Modal content */}
            <div className='flex flex-row max-sm:flex-col items-start justify-center px-[10%] mb-14 mt-10 2lg:gap-48 md:gap-32 sm:gap-20 gap-10 overflow-auto text-const-dark-gray'>
              <div>
                <h1 className='2lg:text-[3.125rem] sm:text-3xl sm:leading-[38px] 2lg:leading-[65px] font-medium max-sm:hidden whitespace-pre-line'>
                  {`Request for\n a commercial\n offer`}
                </h1>
                <h1 className='hidden max-sm:block text-2xl leading-[30px] font-medium whitespace-pre-line'>
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
