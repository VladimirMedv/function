'use client'

import { useState } from 'react'
import { createPortal } from 'react-dom'
import LogoB from './LogoB'
import Constructor from '../Constructor' // Подключаем компонент Constructor

const GetPriceButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev)
  }

  return (
    <>
      {/* Кнопка "Get Price", видна только на экранах больше 480px */}
      <button
        onClick={toggleModal}
        className='hidden md:inline-block bg-white text-black font-normal rounded-full 2lg:px-[30px] 2lg:py-[10px]  md:px-5 md:py-2 leading-[34px] 2lg:text-[22px] md:text-[14px] transition-all hover:bg-secondary hover:text-white cursor-pointer duration-300 ease-in-out'
        aria-label='Get Price'
      >
        Get Price
      </button>

      {/* Портал для модального окна */}
      {isModalOpen &&
        createPortal(
          <div className='fixed inset-0 z-50 bg-white text-black flex flex-col'>
            {/* Верхняя часть модального окна */}
            <div className='flex items-center justify-between md:p-10 p-5'>
              <LogoB />
              <button
                onClick={toggleModal}
                className='bg-black text-white font-normal rounded-full 2lg:px-[30px] 2lg:py-[10px]  md:px-5 md:py-2 leading-[34px] 2lg:text-[22px] md:text-[14px] transition-all hover:bg-secondary duration-300 ease-in-out'
                aria-label='Close modal'
              >
                Close
              </button>
            </div>

            {/* Основной контент модального окна */}
            <div className='flex-1 overflow-y-auto p-6'>
              <Constructor />
            </div>
          </div>,
          document.body
        )}
    </>
  )
}

export default GetPriceButton
