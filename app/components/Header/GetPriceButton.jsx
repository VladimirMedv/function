'use client'

import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import LogoB from './LogoB'
import Constructor from '../Constructor'

const GetPriceButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false) // Проверяем, что компонент смонтирован на клиенте

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
            <div className='flex-1 overflow-y-auto p-6'>
              <Constructor />
            </div>
          </div>,
          document.body // Этот код выполняется только после проверки isMounted
        )}
    </>
  )
}

export default GetPriceButton
