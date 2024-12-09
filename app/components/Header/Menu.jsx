'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { HiMenu } from 'react-icons/hi'
import LogoB from './LogoB' // Компонент логотипа
import Contacts from '../Footer/Contacts.jsx' // Корректный путь к Footer/Contacts
import DiscoverLink from '../Footer/DiscoverLink'

const menuItems = [
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contacts', label: 'Contact Us' },
]

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  useEffect(() => {
    if (isMenuOpen) {
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
  }, [isMenuOpen])

  const renderMenuItems = (onClick) =>
    menuItems.map(({ href, label }) => (
      <li key={href}>
        <Link
          href={href}
          className={`hover:underline hover:text-secondary transition-all  ${
            isMenuOpen ? 'text-black' : 'text-text'
          }`}
          onClick={onClick}
        >
          {label}
        </Link>
      </li>
    ))

  return (
    <nav className='flex items-center justify-between'>
      {/* Основное меню */}
      <ul className='hidden md:flex space-x-[20px] md:space-x-[40px] font-light 2lg:text-[22px] md:text-sm    '>
        {renderMenuItems()}
      </ul>

      {/* Бургер-меню */}
      <button
        className={`md:hidden focus:outline-none font-normal 2lg:text-[1.375rem] md:text-sm transition-transform transform ${
          isMenuOpen ? 'rotate-90' : ''
        }`}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        <HiMenu
          size={30}
          className='text-text'
        />
      </button>

      {/* Выпадающее меню для мобильных */}
      {isMenuOpen && (
        <div
          className={`absolute top-0 left-0 w-full h-full bg-white z-50 flex flex-col overflow-hidden transform transition-transform duration-300 ease-in-out ${
            isMenuOpen
              ? 'translate-y-0 opacity-100'
              : '-translate-y-full opacity-0'
          }`}
        >
          <div
            className='flex items-center justify-between p-5'
            onClick={toggleMenu}
          >
            <LogoB />
            <button
              className='text-black font-normal transition-transform transform rotate-90'
              aria-label='Close menu'
            >
              <HiMenu size={30} />
            </button>
          </div>
          <ul className='flex flex-col items-start mt-3 space-y-4 p-5 font-medium text-[33px] leading-10 gap-2'>
            {renderMenuItems(toggleMenu)}
          </ul>
          {/* Компонент Footer/Contacts */}
          <div className='absolute w-full flex flex-col items-center justify-center bottom-0 mb-[40px] p-5 text-dark-gray'>
            <Contacts />
            <DiscoverLink />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Menu
